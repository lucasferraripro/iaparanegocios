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
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-3 sm:text-4xl">
          Bem-vindo ao Hub
        </h2>
        <p className="text-lg text-gray-400">
          10 módulos práticos de IA para implementar no seu negócio. Cada módulo tem checklist passo-a-passo.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="rounded-xl border border-gray-800/60 bg-gray-900/50 p-6">
          <div className="text-3xl font-bold text-white mb-1">{posts.length}</div>
          <p className="text-sm text-gray-500">Módulos de conteúdo</p>
        </div>
        <div className="rounded-xl border border-gray-800/60 bg-gray-900/50 p-6">
          <div className="text-3xl font-bold text-white mb-1">∞</div>
          <p className="text-sm text-gray-500">Acesso vitalício</p>
        </div>
        <div className="rounded-xl border border-gray-800/60 bg-gray-900/50 p-6">
          <div className="text-3xl font-bold text-white mb-1">24/7</div>
          <p className="text-sm text-gray-500">Sempre disponível</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link
            key={post.id}
            href={`/membros/posts/${post.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-400">
                  {post.tag || 'Módulo'}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-600">
                  <Clock size={12} />
                  {post.tempo_leitura || '5 min'}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {post.titulo}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">
                {post.descricao}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
                  <User size={12} className="text-gray-400" />
                </div>
                <span className="text-xs text-gray-500">Lucas Ferrari</span>
              </div>
              <span className="text-xs font-medium text-gray-500 transition group-hover:text-white">
                Ver módulo →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Order Bumps */}
      <div className="mt-20">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Acelere seus resultados
          </h2>
          <p className="text-gray-500">
            Produtos complementares com condição especial para membros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {orderBumps.map((bump, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition hover:border-gray-700"
            >
              <div>
                <div className="mb-4 text-gray-400">{bump.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {bump.titulo}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {bump.descricao}
                </p>
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="text-sm text-gray-600 line-through">
                    {bump.precoOriginal}
                  </span>
                  <span className="text-2xl font-bold text-white">
                    {bump.precoFinal}
                  </span>
                </div>
              </div>
              <a
                href={checkoutUrl}
                className="block rounded-lg bg-white py-3 text-center text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                QUERO AGORA
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
