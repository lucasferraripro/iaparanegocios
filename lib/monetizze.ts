import axios from 'axios'

const BASE_URL = 'https://api.monetizze.com.br/2.1'

function getConsumerKey(): string {
  const apiKey = process.env.MONETIZZE_API_KEY
  if (!apiKey) throw new Error('MONETIZZE_API_KEY não configurada no .env.local')
  return apiKey
}

let cachedToken: string | null = null
let tokenExpiry: Date | null = null

async function getToken(): Promise<string> {
  if (cachedToken && tokenExpiry && new Date() < tokenExpiry) {
    return cachedToken
  }
  const { data } = await axios.get(`${BASE_URL}/token`, {
    headers: { 'X_CONSUMER_KEY': getConsumerKey(), 'Content-Type': 'application/json' },
  })
  cachedToken = data.TOKEN
  tokenExpiry = new Date(data.expire)
  return cachedToken!
}

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

client.interceptors.request.use(async (config) => {
  const token = await getToken()
  config.headers['TOKEN'] = token
  return config
})

export interface MonetizzeProduct {
  id?: number
  nome: string
  descricao?: string
  preco?: number
  tipo?: string
  status?: string
  [key: string]: unknown
}

export async function getProducts(): Promise<MonetizzeProduct[]> {
  const { data } = await client.get('/produto')
  return data
}

export async function getProduct(id: number | string): Promise<MonetizzeProduct> {
  const { data } = await client.get(`/produto/${id}`)
  return data
}

export async function createProduct(product: MonetizzeProduct): Promise<MonetizzeProduct> {
  const { data } = await client.post('/produto', product)
  return data
}

export async function updateProduct(id: number | string, product: Partial<MonetizzeProduct>): Promise<MonetizzeProduct> {
  const { data } = await client.put(`/produto/${id}`, product)
  return data
}
