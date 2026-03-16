'use client'

import Link from 'next/link'
import { Clock, User, Bot, Wrench, Video } from 'lucide-react'
import posts from '@/content/posts.json'

export default function MembrosPage() {
  const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#'

  const orderBumps = [
    {
      icon: <Bot size={24} />,
      titulo: 'Automação de IA + Agente SDR no seu DM',
      descricao:
        'Um agente de IA treinado para qualificar e converter leads direto no seu Instagram. Inclui template de automação pronto para usar.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 67',
    },
    {
      icon: <Wrench size={24} />,
      titulo: 'Stack de IA — O que eu uso hoje',
      descricao:
        'Lista completa das ferramentas de IA que uso no dia a dia, com tutorial de configuração e integração entre elas.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 97',
    },
    {
      icon: <Video size={24} />,
      titulo: 'Fluxo de Trabalho — Vídeo com IA em escala',
      descricao:
        'Processo completo para produzir vídeos com IA: roteiro, edição, legendas e publicação em escala.',
      precoOriginal: 'R$ 247',
      precoFinal: 'R$ 127',
    },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] p-6 lg:p-12">
      {/* Hero */}
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter sm:text-5xl">
          Bem-vindo ao <span className="text-blue-500 italic">Hub Seleção IA</span>
        </h2>
        <p className="text-lg text-slate-400 font-medium">
          10 módulos práticos de IA para implementar no seu negócio. Cada módulo tem checklist passo-a-passo.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 glass">
          <div className="text-4xl font-black text-white mb-1">{posts.length}</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Módulos de conteúdo</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 glass">
          <div className="text-4xl font-black text-white mb-1">∞</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Acesso vitalício</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 glass">
          <div className="text-4xl font-black text-white mb-1">24/7</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Sempre disponível</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link
            key={post.id}
            href={`/membros/posts/${post.slug}`}
            className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-blue-500/50 hover:bg-white/[0.05] glass"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  {post.tag || 'Módulo'}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-500">
                  <Clock size={12} />
                  {post.tempo_leitura || '5 min'}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                {post.titulo}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-400 font-medium">
                {post.descricao}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <User size={14} className="text-slate-400" />
                </div>
                <span className="text-xs font-bold text-slate-500">Lucas Ferrari</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 transition-transform group-hover:translate-x-1">
                Ver módulo →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Order Bumps */}
      <div className="mt-32">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white mb-3 italic underline decoration-blue-500/30 tracking-tight">
            Arsenal de Elite
          </h2>
          <p className="text-slate-500 font-medium font-sm">
            Produtos complementares com condição especial para membros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {orderBumps.map((bump, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] glass"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)] border border-blue-500/10">
                  {bump.icon}
                </div>
                <h3 className="mb-4 text-xl font-black text-white leading-tight">
                  {bump.titulo}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-400 font-medium">
                  {bump.descricao}
                </p>
                <div className="mb-8 flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-600 line-through">
                    {bump.precoOriginal}
                  </span>
                  <span className="text-3xl font-black text-white">
                    {bump.precoFinal}
                  </span>
                </div>
              </div>
              <a
                href={checkoutUrl}
                className="block rounded-xl bg-white p-4 text-center text-sm font-black text-black transition-all hover:bg-blue-500 hover:text-white active:scale-95"
              >
                ADICIONAR AGORA
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
