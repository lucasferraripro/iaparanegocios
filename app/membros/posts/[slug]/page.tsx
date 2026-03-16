'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Copy, Check, Clock, User, Bot, Wrench, Video } from 'lucide-react'
import { useState } from 'react'
import posts from '@/content/posts.json'

export default function PostPage() {
  const params = useParams()
  const slug = params.slug as string

  const post = (posts as any[]).find(p => p.slug === slug)
  const [copied, setCopied] = useState(false)

  const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#'

  const orderBumps = [
    {
      icon: <Bot size={20} />,
      titulo: 'Agente SDR no seu DM',
      precoFinal: 'R$ 67',
    },
    {
      icon: <Wrench size={20} />,
      titulo: 'Stack de IA completa',
      precoFinal: 'R$ 97',
    },
    {
      icon: <Video size={20} />,
      titulo: 'Vídeo com IA em escala',
      precoFinal: 'R$ 127',
    },
  ]

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Módulo não encontrado</h1>
        <Link href="/membros" className="text-gray-700 hover:text-gray-900 transition">
          ← Voltar para o hub
        </Link>
      </div>
    )
  }

  const handleCopyChecklist = () => {
    const checklist = post.conteudo
      .split('[ ]')
      .filter((item: string) => item.trim())
      .map((item: string, idx: number) => `${idx + 1}. ${item.trim()}`)
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
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-6 transition"
        >
          <ArrowLeft size={18} />
          Voltar para o hub
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
            {post.tag || 'Módulo'}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-600">
            <Clock size={12} />
            {post.tempo_leitura || '5 min'}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3 sm:text-4xl">{post.titulo}</h1>
        <p className="text-lg text-gray-700 mb-4">{post.descricao}</p>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
            <User size={14} className="text-gray-600" />
          </div>
          <span className="text-sm text-gray-600">Lucas Ferrari · @lucasferrari.pro</span>
        </div>
      </div>

      {/* Copy Checklist Button */}
      <button
        onClick={handleCopyChecklist}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200 hover:text-gray-900 mb-10"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copiado!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copiar Checklist
          </>
        )}
      </button>

      {/* Content */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-none space-y-3 mb-6" {...props} />,
            li: ({ node, ...props }) => (
              <li className="flex items-start gap-3">
                <span className="text-gray-600 font-semibold mt-1">•</span>
                <span className="text-gray-700" {...props} />
              </li>
            ),
            strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
            em: ({ node, ...props }) => <em className="italic text-gray-600" {...props} />,
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left border-collapse" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => <thead className="border-b border-gray-300" {...props} />,
            th: ({ node, ...props }) => <th className="py-2 px-3 text-gray-900 font-semibold" {...props} />,
            td: ({ node, ...props }) => <td className="py-2 px-3 text-gray-700 border-b border-gray-200" {...props} />,
            code: ({ node, ...props }) => <code className="bg-gray-100 text-gray-900 px-1.5 py-0.5 rounded text-sm" {...props} />,
          }}
        >
          {post.conteudo}
        </ReactMarkdown>
      </div>

      {/* Order Bumps */}
      <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Acelere seus resultados</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {orderBumps.map((bump, idx) => (
            <a
              key={idx}
              href={checkoutUrl}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition hover:border-gray-300 hover:bg-gray-100"
            >
              <span className="text-gray-900">{bump.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{bump.titulo}</p>
                <p className="text-xs font-bold text-gray-700">{bump.precoFinal}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between">
        {(() => {
          const currentIndex = posts.findIndex(p => p.id === post.id)
          const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
          const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

          return (
            <>
              {prevPost ? (
                <Link
                  href={`/membros/posts/${prevPost.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
                >
                  ← Anterior
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/membros/posts/${nextPost.slug}`}
                  className="flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
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
