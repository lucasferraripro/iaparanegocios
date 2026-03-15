'use client'

import Link from 'next/link'
import { BookOpen, CheckCircle, Zap, Video } from 'lucide-react'
import posts from '@/content/posts.json'

export default function MembrosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo ao Seu Hub!</h2>
        <p className="text-xl text-gray-600">
          10 módulos práticos de IA para você implementar em seu negócio. Cada módulo tem checklist passo-a-passo.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-3xl font-bold text-blue-600 mb-2">{posts.length}</div>
          <p className="text-gray-600">Módulos de conteúdo</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
          <p className="text-gray-600">Acesso vitalício</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
          <p className="text-gray-600">Sempre disponível</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/membros/posts/${post.slug}`}
            className="group bg-white rounded-lg border border-gray-200 p-8 hover:border-blue-600 hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition">
                <Zap className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {post.titulo}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{post.descricao}</p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition">
              Acessar módulo
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Webinar CTA */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-white text-center">
        <Video size={32} className="mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-4">Webinar ao Vivo</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Assista ao webinar exclusivo onde demonstramos tudo funcionando na prática. Link compartilhado por email.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Ver Link do Webinar
        </button>
      </div>
    </div>
  )
}
