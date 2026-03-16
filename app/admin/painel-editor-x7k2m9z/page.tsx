'use client'

import { useState, useEffect } from 'react'
import { Edit2, Save, X, Eye } from 'lucide-react'
import posts from '@/content/posts.json'

interface Post {
  id: number | string
  titulo: string
  slug: string
  descricao: string
  tempo_leitura: string
  tag: string
  conteudo: string
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [editingId, setEditingId] = useState<number | string | null>(null)
  const [editData, setEditData] = useState<Post | null>(null)
  const [allPosts, setAllPosts] = useState<Post[]>(posts)
  const [tictoProducts, setTictoProducts] = useState<any[]>([])
  const [loadingTicto, setLoadingTicto] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [monetizzeProducts, setMonetizzeProducts] = useState<any[]>([])
  const [loadingMonetizze, setLoadingMonetizze] = useState(false)
  const [monetizzeError, setMonetizzeError] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [creatingProduct, setCreatingProduct] = useState(false)
  const [createMessage, setCreateMessage] = useState('')
  const [newProduct, setNewProduct] = useState({ nome: '', descricao: '', preco: '', tipo: 'I' })

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'senha123'

  const fetchMonetizzeProducts = async () => {
    setLoadingMonetizze(true)
    setMonetizzeError('')
    try {
      const res = await fetch('/api/monetizze/products')
      const data = await res.json()
      if (data.success) {
        setMonetizzeProducts(data.data || [])
      } else {
        setMonetizzeError(data.error || 'Erro ao carregar produtos')
      }
    } catch (err) {
      setMonetizzeError('Falha de conexão com a Monetizze')
    } finally {
      setLoadingMonetizze(false)
    }
  }

  const handleCreateMonetizzeProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreatingProduct(true)
    setCreateMessage('')
    try {
      const res = await fetch('/api/monetizze/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: newProduct.nome,
          descricao: newProduct.descricao,
          preco: parseFloat(newProduct.preco),
          tipo: newProduct.tipo,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setCreateMessage('✓ Produto publicado com sucesso!')
        setNewProduct({ nome: '', descricao: '', preco: '', tipo: 'I' })
        setShowCreateForm(false)
        fetchMonetizzeProducts()
      } else {
        setCreateMessage(`✗ ${data.error}`)
      }
    } catch {
      setCreateMessage('✗ Erro ao publicar produto')
    } finally {
      setCreatingProduct(false)
      setTimeout(() => setCreateMessage(''), 4000)
    }
  }

  const fetchTictoProducts = async () => {
    setLoadingTicto(true)
    try {
      const res = await fetch('/api/admin/ticto')
      if (res.ok) {
        const data = await res.json()
        setTictoProducts(data.data || [])
      }
    } catch (err) {
      console.error('Failed to fetch Ticto products', err)
    } finally {
      setLoadingTicto(false)
    }
  }

  useEffect(() => {
    if (authenticated) {
      fetchTictoProducts()
      fetchMonetizzeProducts()
    }
  }, [authenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setPasswordError('')
    } else {
      setPasswordError('Senha incorreta')
      setPassword('')
    }
  }

  const startEdit = (post: Post) => {
    setEditingId(post.id)
    setEditData(post)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditData(null)
  }

  const handleSave = async () => {
    if (!editData) return

    setSaving(true)
    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      })

      if (response.ok) {
        setAllPosts(allPosts.map(p => p.id === editData.id ? editData : p))
        setSaveMessage('✓ Salvo com sucesso!')
        setTimeout(() => {
          setSaveMessage('')
          setEditingId(null)
          setEditData(null)
        }, 2000)
      }
    } catch (error) {
      setSaveMessage('✗ Erro ao salvar')
    } finally {
      setSaving(false)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="w-full max-w-md border border-white/10 rounded-[2.5rem] p-10 glass shadow-3xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">Painel <span className="text-blue-500 italic">Admin</span></h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Editor de Conteúdos Premium</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder:text-slate-700 font-mono"
                autoFocus
              />
            </div>

            {passwordError && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-bold flex items-center gap-2">
                <X size={14} />
                {passwordError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:to-blue-400 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95"
            >
              Autenticar Criptografia
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-[#f8fafc] p-6 lg:p-12 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter">Painel <span className="text-blue-500 italic">Admin</span></h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Central de Controle de Conteúdo</p>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="px-6 py-3 border border-white/10 rounded-xl text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 hover:text-white transition-all transition"
          >
            Sair do Sistema
          </button>
        </div>

        {/* Ticto Products Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white italic underline decoration-blue-500/30">Produtos Ticto</h2>
            <button 
              onClick={fetchTictoProducts}
              className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400"
            >
              Atualizar Lista
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {loadingTicto ? (
              <div className="col-span-full py-12 text-center text-slate-500 font-mono text-xs animate-pulse">
                Sincronizando com Glados API...
              </div>
            ) : tictoProducts.length === 0 ? (
              <div className="col-span-full py-12 text-center border border-white/5 bg-white/[0.02] rounded-3xl text-slate-500 text-sm">
                Nenhum produto encontrado na Ticto.
              </div>
            ) : (
              tictoProducts.map((prod: any) => (
                <div key={prod.id} className="border border-white/5 bg-white/[0.02] rounded-3xl p-6 glass">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                      {prod.image_url && <img src={prod.image_url} alt={prod.name} className="w-full h-full object-cover" />}
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-white font-bold text-sm truncate">{prod.name}</h3>
                      <p className="text-blue-500 font-black text-xs">R$ {prod.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className={`text-[9px] font-black uppercase tracking-widest ${prod.status === 'active' ? 'text-emerald-500' : 'text-slate-500'}`}>
                      {prod.status}
                    </span>
                    <button className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors">
                      Configurar na Ticto ↗
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Monetizze Products Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-white italic underline decoration-blue-500/30">Produtos Monetizze</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400"
              >
                {showCreateForm ? '— Fechar Formulário' : '+ Publicar Produto'}
              </button>
              <button
                onClick={fetchMonetizzeProducts}
                className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400"
              >
                Atualizar Lista
              </button>
            </div>
          </div>

          {showCreateForm && (
            <form onSubmit={handleCreateMonetizzeProduct} className="mb-8 border border-emerald-500/20 bg-emerald-500/5 rounded-3xl p-8 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400">Novo Produto Monetizze</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Nome do Produto</label>
                  <input
                    type="text"
                    required
                    value={newProduct.nome}
                    onChange={(e) => setNewProduct({ ...newProduct, nome: e.target.value })}
                    className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white text-sm font-bold"
                    placeholder="Ex: Seleção IA Pro"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Preço (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={newProduct.preco}
                    onChange={(e) => setNewProduct({ ...newProduct, preco: e.target.value })}
                    className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white text-sm font-mono"
                    placeholder="47.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Descrição</label>
                <input
                  type="text"
                  value={newProduct.descricao}
                  onChange={(e) => setNewProduct({ ...newProduct, descricao: e.target.value })}
                  className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white text-sm"
                  placeholder="Breve descrição do produto"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Tipo</label>
                <select
                  value={newProduct.tipo}
                  onChange={(e) => setNewProduct({ ...newProduct, tipo: e.target.value })}
                  className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white text-sm"
                >
                  <option value="I" className="bg-slate-900">Infoproduto (I)</option>
                  <option value="F" className="bg-slate-900">Físico (F)</option>
                  <option value="S" className="bg-slate-900">Serviço (S)</option>
                </select>
              </div>
              {createMessage && (
                <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-widest ${
                  createMessage.includes('✓')
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {createMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={creatingProduct}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:to-emerald-400 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
              >
                {creatingProduct ? 'Publicando...' : '↑ Publicar na Monetizze'}
              </button>
            </form>
          )}

          {monetizzeError && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs font-bold">
              {monetizzeError}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {loadingMonetizze ? (
              <div className="col-span-full py-12 text-center text-slate-500 font-mono text-xs animate-pulse">
                Sincronizando com Monetizze API...
              </div>
            ) : monetizzeProducts.length === 0 ? (
              <div className="col-span-full py-12 text-center border border-white/5 bg-white/[0.02] rounded-3xl text-slate-500 text-sm">
                Nenhum produto encontrado na Monetizze.
              </div>
            ) : (
              monetizzeProducts.map((prod: any) => (
                <div key={prod.id} className="border border-white/5 bg-white/[0.02] rounded-3xl p-6 glass">
                  <h3 className="text-white font-bold text-sm mb-2 truncate">{prod.nome || prod.name}</h3>
                  {(prod.preco || prod.price) && (
                    <p className="text-emerald-400 font-black text-xs mb-4">R$ {prod.preco || prod.price}</p>
                  )}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                      ID: {prod.id}
                    </span>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${prod.status === 'A' || prod.status === 'active' ? 'text-emerald-500' : 'text-slate-500'}`}>
                      {prod.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Posts List Section */}
        <div className="space-y-6">
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="border border-white/5 bg-white/[0.02] rounded-[2rem] p-8 hover:border-blue-500/30 transition-all glass"
            >
              {editingId === post.id ? (
                /* Edit Mode */
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">
                        Título do Módulo
                      </label>
                      <input
                        type="text"
                        value={editData?.titulo || ''}
                        onChange={(e) =>
                          setEditData({ ...editData!, titulo: e.target.value })
                        }
                        className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">
                        Tag / Categoria
                      </label>
                      <input
                        type="text"
                        value={editData?.tag || ''}
                        onChange={(e) =>
                          setEditData({ ...editData!, tag: e.target.value })
                        }
                        className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white text-sm font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">
                      Descrição Curta
                    </label>
                    <input
                      type="text"
                      value={editData?.descricao || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, descricao: e.target.value })
                      }
                      className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">
                      Tempo de Leitura Estimado
                    </label>
                    <input
                      type="text"
                      value={editData?.tempo_leitura || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, tempo_leitura: e.target.value })
                      }
                      placeholder="Ex: 5 min"
                      className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 ml-1 flex justify-between">
                      Conteúdo Estratégico (Markdown)
                      <span className="text-blue-500/50">Suporta Checklist [ ]</span>
                    </label>
                    <textarea
                      value={editData?.conteudo || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, conteudo: e.target.value })
                      }
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-slate-300 text-sm font-mono leading-relaxed"
                      rows={15}
                    />
                  </div>

                  {saveMessage && (
                    <div className={`p-4 rounded-xl text-xs font-black uppercase tracking-widest ${
                      saveMessage.includes('✓')
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {saveMessage}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                      <Save size={16} />
                      {saving ? 'Criptografando...' : 'Salvar Alterações'}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex items-center gap-2 px-8 py-4 border border-white/10 text-slate-400 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
                    >
                      <X size={16} />
                      Descartar
                    </button>
                  </div>
                </div>
              ) : (
                /* View Mode */
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">{post.titulo}</h3>
                      <span className="inline-block bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/10">
                        {post.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{post.descricao}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-700 mt-4 uppercase tracking-widest font-mono">
                      <span className="text-blue-900">ID: {post.id}</span>
                      <span>{post.tempo_leitura}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={() => startEdit(post)}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-500/20 transition-all"
                    >
                      <Edit2 size={14} />
                      Editar Módulo
                    </button>
                    <a
                      href={`/membros/posts/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-white/10 text-slate-500 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/5 hover:text-slate-300 transition-all"
                    >
                      <Eye size={14} />
                      Visualizar
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
