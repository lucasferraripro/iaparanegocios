'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import posts from '@/content/posts.json'

export default function PostPage() {
  const params = useParams()
  const slug = params.slug as string

  const post = posts.find(p => p.slug === slug)
  const [copied, setCopied] = useState(false)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Módulo não encontrado</h1>
        <Link href="/membros" className="text-blue-600 hover:underline">
          Voltar para o hub
        </Link>
      </div>
    )
  }

  const handleCopyChecklist = () => {
    const checklist = post.conteudo
      .split('[ ]')
      .filter(item => item.trim())
      .map((item, idx) => `${idx + 1}. ${item.trim()}`)
      .join('\n')

    navigator.clipboard.writeText(checklist)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/membros"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition"
        >
          <ArrowLeft size={20} />
          Voltar para o hub
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.titulo}</h1>
        <p className="text-xl text-gray-600">{post.descricao}</p>
      </div>

      {/* Copy Checklist Button */}
      <button
        onClick={handleCopyChecklist}
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-12"
      >
        {copied ? (
          <>
            <Check size={20} />
            Copiado!
          </>
        ) : (
          <>
            <Copy size={20} />
            Copiar Checklist
          </>
        )}
      </button>

      {/* Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-none space-y-3 mb-6" {...props} />,
            li: ({ node, ...props }) => (
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-semibold mt-1">•</span>
                <span className="text-gray-700" {...props} />
              </li>
            ),
            strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
            em: ({ node, ...props }) => <em className="italic text-gray-600" {...props} />,
          }}
        >
          {post.conteudo}
        </ReactMarkdown>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between">
        {(() => {
          const currentIndex = posts.findIndex(p => p.id === post.id)
          const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
          const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

          return (
            <>
              {prevPost ? (
                <Link
                  href={`/membros/posts/${prevPost.slug}`}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:border-blue-600 transition font-semibold"
                >
                  ← Anterior
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/membros/posts/${nextPost.slug}`}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Próximo →
                </Link>
              ) : (
                <div />
              )}
            </>
          )
        })()}
      </div>
    </div>
  )
}
