'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  LogOut, 
  Search, 
  Clock, 
  ChevronRight, 
  CheckCircle,
  PlayCircle,
  TrendingUp,
  Settings,
  ShieldCheck
} from 'lucide-react'
import posts from '@/content/posts.json'

export default function MembrosPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('user_email')
    if (user) setUserEmail(user)
  }, [])

  const filteredPosts = posts.filter(post =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tag.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogout = () => {
    localStorage.removeItem('user_email')
    window.location.href = '/login'
  }

  const advancedPosts = filteredPosts.filter(p => p.tag === 'AVANÇADO')
  const basePosts = filteredPosts.filter(p => p.tag !== 'AVANÇADO')

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/membros" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <ShieldCheck size={18} />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">SELEÇÃO <span className="text-blue-600">IA</span></span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs font-bold text-slate-900 leading-none">{userEmail?.split('@')[0]}</span>
              <span className="text-[10px] font-medium text-slate-400 capitalize">Assinante Premium</span>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg"
              title="Sair"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-2">Bem-vindo ao Hub, {userEmail?.split('@')[0]}!</h1>
          <p className="text-slate-500 font-medium">Selecione um módulo para iniciar sua implementação prática.</p>
        </div>

        {/* Search */}
        <div className="relative mb-12 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Buscar aula ou ferramenta..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-sm font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Advanced Section (New Content) */}
        {advancedPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Protocolos Avançados SXS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedPosts.map((post) => (
                <PostCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </section>
        )}

        {/* Base Section (Original Content) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <PlayCircle size={20} />
            </div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Aulas Base</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Seleção IA © 2026 • Suporte Prioritário</p>
        </div>
      </footer>
    </div>
  )
}

function PostCard({ post, featured = false }: { post: any, featured?: boolean }) {
  return (
    <Link href={`/membros/posts/${post.slug}`}>
      <div className={`
        group relative h-full bg-white border rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1
        ${featured ? 'border-blue-200 bg-blue-50/10' : 'border-slate-200'}
      `}>
        <div className="flex items-start justify-between mb-4">
          <span className={`
            px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
            ${featured ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}
          `}>
            {post.tag}
          </span>
          <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
            <ChevronRight size={20} />
          </div>
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors capitalize">
          {post.titulo}
        </h3>
        
        <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2">
          {post.descricao}
        </p>

        <div className="flex items-center gap-3 text-slate-400">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase">
            <Clock size={12} />
            {post.tempo_leitura}
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-200" />
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-emerald-500">
            <CheckCircle size={12} />
            Acesso Liberado
          </div>
        </div>

        {featured && (
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-2xl pointer-events-none transition-all" />
        )}
      </div>
    </Link>
  )
}
