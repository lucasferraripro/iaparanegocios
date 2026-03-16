#!/usr/bin/env node
/**
 * Monetizze CLI - Gerenciador de produtos via API
 * Uso:
 *   node monetizze-cli.js list              → lista todos os produtos
 *   node monetizze-cli.js get <id>          → detalhes de um produto
 *   node monetizze-cli.js publish           → publica novo produto (interativo)
 */

const https = require('https')
const zlib = require('zlib')
const readline = require('readline')

const API_KEY = process.env.MONETIZZE_API_KEY || '3EoN3xec4DgtAo1gIcyBMb3OnCb2MVZM'
const BASE_URL = 'api.monetizze.com.br'
const BASE_PATH = '/2.1'

let cachedToken = null
let tokenExpiry = null

function rawRequest(method, path, extraHeaders = {}, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: BASE_URL,
      path: BASE_PATH + path,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...extraHeaders,
      },
    }
    if (body) {
      const json = JSON.stringify(body)
      options.headers['Content-Length'] = Buffer.byteLength(json)
    }
    const req = https.request(options, (res) => {
      const chunks = []
      const encoding = res.headers['content-encoding']
      const stream = (encoding === 'gzip' || encoding === 'deflate')
        ? res.pipe(zlib.createGunzip())
        : res
      stream.on('data', (chunk) => chunks.push(chunk))
      stream.on('end', () => {
        const data = Buffer.concat(chunks).toString()
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) })
        } catch {
          resolve({ status: res.statusCode, body: data })
        }
      })
    })
    req.on('error', reject)
    if (body) req.write(JSON.stringify(body))
    req.end()
  })
}

async function getToken() {
  if (cachedToken && tokenExpiry && new Date() < new Date(tokenExpiry)) {
    return cachedToken
  }
  const { status, body } = await rawRequest('GET', '/token', { 'X_CONSUMER_KEY': API_KEY })
  if (status !== 200 || !body.token) {
    throw new Error(`Falha ao obter token: ${JSON.stringify(body)}`)
  }
  cachedToken = body.token
  tokenExpiry = body.expire
  return cachedToken
}

async function request(method, path, body = null) {
  const token = await getToken()
  return rawRequest(method, path, { 'TOKEN': token }, body)
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve))
}

async function listProducts() {
  console.log('\n🔄 Buscando produtos na Monetizze...\n')
  const { status, body } = await request('GET', '/produto')
  if (status !== 200) {
    console.error(`❌ Erro ${status}:`, body)
    return
  }
  const products = Array.isArray(body) ? body : (body.data || [body])
  if (products.length === 0) {
    console.log('Nenhum produto encontrado.')
    return
  }
  console.log(`✅ ${products.length} produto(s) encontrado(s):\n`)
  products.forEach((p, i) => {
    console.log(`[${i + 1}] ID: ${p.id || '-'} | ${p.nome || p.name || '-'} | R$ ${p.preco || p.price || '-'} | Status: ${p.status || '-'}`)
  })
}

async function getProduct(id) {
  console.log(`\n🔄 Buscando produto ID ${id}...\n`)
  const { status, body } = await request('GET', `/produto/${id}`)
  if (status !== 200) {
    console.error(`❌ Erro ${status}:`, body)
    return
  }
  console.log('✅ Produto encontrado:\n')
  console.log(JSON.stringify(body, null, 2))
}

async function publishProduct() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  console.log('\n📦 Publicar novo produto na Monetizze\n')

  const nome = await ask(rl, '  Nome do produto: ')
  const descricao = await ask(rl, '  Descrição: ')
  const preco = await ask(rl, '  Preço (ex: 47.00): ')
  const tipo = await ask(rl, '  Tipo [I=Infoproduto / F=Físico / S=Serviço] (padrão: I): ') || 'I'

  rl.close()

  const product = {
    nome,
    descricao,
    preco: parseFloat(preco),
    tipo: tipo.toUpperCase(),
  }

  console.log('\n🔄 Publicando produto...\n')
  console.log('Dados:', JSON.stringify(product, null, 2))

  const { status, body } = await request('POST', '/produto', product)
  if (status === 200 || status === 201) {
    console.log('\n✅ Produto publicado com sucesso!')
    console.log(JSON.stringify(body, null, 2))
  } else {
    console.error(`\n❌ Erro ${status}:`, body)
  }
}

async function main() {
  const [,, command, ...args] = process.argv

  switch (command) {
    case 'list':
      await listProducts()
      break
    case 'get':
      if (!args[0]) { console.error('Uso: node monetizze-cli.js get <id>'); process.exit(1) }
      await getProduct(args[0])
      break
    case 'publish':
      await publishProduct()
      break
    default:
      console.log(`
Monetizze CLI — Comandos disponíveis:
  node monetizze-cli.js list           Lista todos os produtos
  node monetizze-cli.js get <id>       Detalhes de um produto
  node monetizze-cli.js publish        Publica novo produto
      `)
  }
}

main().catch((err) => {
  console.error('Erro fatal:', err.message)
  process.exit(1)
})
