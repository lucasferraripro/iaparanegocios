'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Settings, LogIn } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!email || !email.includes('@')) {
        setError('Digite um email válido')
        return
      }

      localStorage.setItem(
        'selecao-ia-auth',
        JSON.stringify({
          email,
          token: Math.random().toString(36).substr(2),
          timestamp: new Date().toISOString(),
        })
      )

      router.push('/membros')
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Settings className="text-gray-600" size={24} />
          <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Seleção IA</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Acesso ao Hub</h2>
        <p className="text-gray-600 text-center mb-8 text-sm">Faça login para acessar seus módulos</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? 'Conectando...' : (
              <>
                <LogIn size={18} />
                Acessar Hub
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <a
          href="/"
          className="block text-center text-sm text-gray-600 hover:text-gray-900 font-medium mt-8 transition"
        >
          ← Voltar para a home
        </a>
      </div>
    </div>
  )
}
