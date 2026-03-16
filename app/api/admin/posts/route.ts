import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id, titulo, slug, descricao, tempo_leitura, tag, conteudo } = body

    // Ler arquivo de posts
    const postsPath = join(process.cwd(), 'content', 'posts.json')
    const posts = JSON.parse(readFileSync(postsPath, 'utf-8'))

    // Atualizar post
    const postIndex = posts.findIndex((p: any) => p.id === id)
    if (postIndex !== -1) {
      posts[postIndex] = {
        ...posts[postIndex],
        titulo,
        descricao,
        tempo_leitura,
        tag,
        conteudo,
      }

      // Salvar arquivo
      writeFileSync(postsPath, JSON.stringify(posts, null, 2))

      return Response.json({ success: true, message: 'Post atualizado' })
    } else {
      return Response.json({ success: false, message: 'Post não encontrado' }, { status: 404 })
    }
  } catch (error) {
    console.error('Erro ao atualizar post:', error)
    return Response.json({ success: false, message: 'Erro ao salvar' }, { status: 500 })
  }
}
