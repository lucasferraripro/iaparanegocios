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
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'senha123'

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
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md border border-gray-200 rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Painel Admin</h1>
          <p className="text-gray-600 text-center mb-8 text-sm">Editor de Conteúdos</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900"
                autoFocus
              />
            </div>

            {passwordError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {passwordError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Painel Admin</h1>
            <p className="text-gray-600 text-sm mt-1">Editar Conteúdos dos Posts</p>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Sair
          </button>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
            >
              {editingId === post.id ? (
                /* Edit Mode */
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título
                      </label>
                      <input
                        type="text"
                        value={editData?.titulo || ''}
                        onChange={(e) =>
                          setEditData({ ...editData!, titulo: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tag
                      </label>
                      <input
                        type="text"
                        value={editData?.tag || ''}
                        onChange={(e) =>
                          setEditData({ ...editData!, tag: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição
                    </label>
                    <input
                      type="text"
                      value={editData?.descricao || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, descricao: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tempo de Leitura
                    </label>
                    <input
                      type="text"
                      value={editData?.tempo_leitura || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, tempo_leitura: e.target.value })
                      }
                      placeholder="Ex: 5 min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Conteúdo (Markdown)
                    </label>
                    <textarea
                      value={editData?.conteudo || ''}
                      onChange={(e) =>
                        setEditData({ ...editData!, conteudo: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm font-mono"
                      rows={12}
                    />
                  </div>

                  {saveMessage && (
                    <div className={`p-3 rounded-lg text-sm font-medium ${
                      saveMessage.includes('✓')
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {saveMessage}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      <Save size={18} />
                      {saving ? 'Salvando...' : 'Salvar'}
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                    >
                      <X size={18} />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                /* View Mode */
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{post.titulo}</h3>
                      <p className="text-sm text-gray-600 mt-1">{post.descricao}</p>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded ml-4">
                      {post.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span>ID: {post.id}</span>
                    <span>{post.tempo_leitura}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(post)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition"
                    >
                      <Edit2 size={16} />
                      Editar
                    </button>
                    <a
                      href={`/membros/posts/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                    >
                      <Eye size={16} />
                      Ver
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
