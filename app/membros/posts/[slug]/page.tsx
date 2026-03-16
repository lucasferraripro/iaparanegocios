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
      <div className="text-center py-20 bg-[#020617] min-h-screen">
        <h1 className="text-3xl font-black text-white mb-6 tracking-tighter">Módulo não encontrado</h1>
        <Link href="/membros" className="text-blue-500 hover:text-blue-400 font-bold uppercase tracking-widest text-xs transition">
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
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] pb-24">
      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/membros"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-white font-bold uppercase tracking-widest text-[10px] mb-10 transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Voltar para o hub
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400">
              {post.tag || 'Módulo'}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-500 border-l border-white/10 pl-3">
              <Clock size={12} />
              {post.tempo_leitura || '5 min'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">{post.titulo}</h1>
          <p className="text-xl text-slate-400 mb-8 font-medium leading-relaxed">{post.descricao}</p>

          <div className="flex items-center gap-3 border-t border-white/5 pt-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-xl">
              <User size={18} className="text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Lucas Ferrari</p>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest text-blue-500/80">@lucasferrari.pro</p>
            </div>
          </div>
        </div>

        {/* Copy Checklist Button */}
        <button
          onClick={handleCopyChecklist}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-white/[0.07] hover:border-blue-500/30 mb-16 glass shadow-2xl"
        >
          {copied ? (
            <>
              <Check size={18} className="text-emerald-400" />
              Copiado com Sucesso!
            </>
          ) : (
            <>
              <Copy size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
              Copiar Checklist para Implementação
            </>
          )}
        </button>

        {/* Content */}
        <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 glass shadow-3xl overflow-hidden mb-16">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className="text-2xl font-black text-white mt-12 mb-6 tracking-tight border-b border-white/5 pb-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-blue-400 mt-10 mb-4 tracking-tight" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-bold text-slate-200 mt-8 mb-3" {...props} />,
              p: ({ node, ...props }) => <p className="text-slate-400 mb-6 leading-relaxed font-medium text-base md:text-lg" {...props} />,
              ul: ({ node, ...props }) => <ul className="space-y-4 mb-8" {...props} />,
              li: ({ node, ...props }) => (
                <li className="flex items-start gap-4 group">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span className="text-slate-300 font-medium leading-relaxed" {...props} />
                </li>
              ),
              strong: ({ node, ...props }) => <strong className="font-bold text-white decoration-blue-500/30 underline underline-offset-4" {...props} />,
              em: ({ node, ...props }) => <em className="italic text-slate-500" {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-10 rounded-2xl border border-white/10 bg-black/20 p-1">
                  <table className="w-full text-sm text-left border-collapse" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => <thead className="bg-white/5" {...props} />,
              th: ({ node, ...props }) => <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/10" {...props} />,
              td: ({ node, ...props }) => <td className="py-4 px-6 text-slate-400 font-medium border-b border-white/5" {...props} />,
              code: ({ node, ...props }) => <code className="bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-md font-mono text-sm border border-blue-500/20" {...props} />,
            }}
          >
            {post.conteudo}
          </ReactMarkdown>
        </div>

        {/* Order Bumps */}
        <div className="mt-24 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-12 glass">
          <h3 className="text-xl font-black text-white mb-8 italic underline decoration-blue-500/30">Arsenal de Elite</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {orderBumps.map((bump, idx) => (
              <a
                key={idx}
                href={checkoutUrl}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 transition-all hover:bg-white/[0.08] hover:border-blue-500/30"
              >
                <div className="text-blue-400 bg-blue-500/10 p-2 rounded-xl border border-blue-500/10 transition-transform group-hover:scale-110">
                  {bump.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-tight text-white leading-tight mb-1">{bump.titulo}</p>
                  <p className="text-xs font-black text-blue-500">{bump.precoFinal}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-20 flex justify-between items-center border-t border-white/5 pt-12">
          {(() => {
            const currentIndex = posts.findIndex(p => p.id === post.id)
            const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
            const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

            return (
              <>
                {prevPost ? (
                  <Link
                    href={`/membros/posts/${prevPost.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                  >
                    ← Anterior
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/membros/posts/${nextPost.slug}`}
                    className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-blue-500/20 transition-all hover:to-blue-400 hover:scale-105 active:scale-95"
                  >
                    Próximo Módulo →
                  </Link>
                ) : (
                  <div />
                )}
              </>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
  )
}
