'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Copy, Check, Clock, ShieldCheck, User, Video, ExternalLink, ChevronLeft, PlayCircle } from 'lucide-react'
import { useState } from 'react'
import posts from '@/content/posts.json'

export default function PostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = (posts as any[]).find(p => p.slug === slug)
  const [copied, setCopied] = useState(false)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Aula não encontrada</h1>
          <Link href="/membros" className="text-blue-600 hover:underline font-bold text-sm">
            Voltar ao Hub
          </Link>
        </div>
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-24">
       {/* Simple Header */}
       <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
             <Link href="/membros" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm uppercase tracking-tight">
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Voltar ao Hub</span>
             </Link>
             <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Seleção IA</span>
             </div>
          </div>
       </header>

       <div className="max-w-4xl mx-auto px-6 pt-12">
          {/* Hero Section */}
          <div className="mb-12 border-b border-slate-200 pb-12">
             <div className="flex items-center gap-3 mb-6">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-600 rounded-md text-[10px] font-black uppercase tracking-widest">
                   {post.tag}
                </span>
                <div className="h-1 w-1 rounded-full bg-slate-200" />
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400">
                   <Clock size={12} />
                   {post.tempo_leitura} de leitura
                </span>
             </div>
             
             <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] capitalize">
                {post.titulo}
             </h1>
             
             <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                {post.descricao}
             </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_250px] gap-12 items-start">
             {/* Content */}
             <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
                <article className="max-w-none">
                   <ReactMarkdown
                      components={{
                        h2: ({ children }) => <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6 tracking-tight border-b border-slate-100 pb-4">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-lg font-black text-slate-800 mt-8 mb-4 tracking-tight uppercase">{children}</h3>,
                        p: ({ children }) => <p className="text-slate-600 mb-6 leading-relaxed font-medium text-base">{children}</p>,
                        ul: ({ children }) => <ul className="space-y-4 mb-8">{children}</ul>,
                        li: ({ children }) => (
                          <li className="flex items-start gap-4">
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span className="text-slate-600 font-medium text-base leading-relaxed">{children}</span>
                          </li>
                        ),
                        strong: ({ children }) => <strong className="font-black text-slate-900">{children}</strong>,
                        code: ({ inline, className, children, ...props }: any) => {
                          if (inline) return <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded font-mono text-xs">{children}</code>
                          return (
                            <div className="relative my-8 group">
                               <code className="block w-full bg-slate-900 text-blue-300 p-6 rounded-2xl font-mono text-sm border border-slate-800 overflow-x-auto whitespace-pre-wrap">
                                  {children}
                               </code>
                               <button 
                                 onClick={() => {
                                    navigator.clipboard.writeText(String(children))
                                 }}
                                 className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/50 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                               >
                                  <Copy size={14} />
                               </button>
                            </div>
                          )
                        },
                        blockquote: ({ children }) => (
                          <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-xl my-8 italic text-blue-900 font-medium">{children}</div>
                        )
                      }}
                   >
                     {post.conteudo}
                   </ReactMarkdown>
                </article>

                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <button
                      onClick={handleCopyChecklist}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
                   >
                      {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                      {copied ? 'Conteúdo Copiado!' : 'Copiar Checklist do Módulo'}
                   </button>
                   
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                      <ExternalLink size={14} />
                      Referência Técnica SXS
                   </div>
                </div>
             </div>

             {/* Sidebar Actions */}
             <aside className="sticky top-28 space-y-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Membro Pro</h4>
                   <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 p-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold">
                         <PlayCircle size={16} />
                         Acesso Completo
                      </div>
                      <Link href="/membros" className="flex items-center justify-between p-3 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">
                         Outras Aulas
                         <ChevronLeft className="rotate-180" size={14} />
                      </Link>
                   </div>
                </div>

                <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-xl shadow-blue-200">
                   <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Atenção</h4>
                   <p className="text-xs font-bold leading-relaxed mb-4">A implementação prática é o que separa lucros de farsa. Execute tudo.</p>
                   <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-1/3" />
                   </div>
                </div>
             </aside>
          </div>
       </div>
    </div>
  )
}
