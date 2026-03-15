'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookOpen, LogIn } from 'lucide-react'

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
      // Simples validação de email
      if (!email || !email.includes('@')) {
        setError('Digite um email válido')
        return
      }

      // Armazena auth em localStorage (placeholder - integrar com Supabase depois)
      localStorage.setItem(
        'selecao-ia-auth',
        JSON.stringify({
          email,
          token: Math.random().toString(36).substr(2),
          timestamp: new Date().toISOString(),
        })
      )

      // TODO: Implementar verificação real com Supabase/Hotmart
      // Por enquanto, apenas redireciona se tiver "comprado"

      router.push('/membros')
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <BookOpen className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-900">IA Prática</h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Acesso ao Hub</h2>
        <p className="text-gray-600 text-center mb-8">Faça login para acessar seus módulos</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
              disabled={loading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? 'Conectando...' : (
              <>
                <LogIn size={20} />
                Acessar Hub
              </>
            )}
          </button>
        </form>

        {/* Info Text */}
        <p className="text-sm text-gray-500 text-center mt-8">
          ⚠️ Este é um sistema de demonstração. <br />
          Para ativar acesso real, integre com Hotmart/Supabase.
        </p>

        {/* Back Link */}
        <a
          href="/"
          className="block text-center text-blue-600 hover:text-blue-700 font-semibold mt-8 transition"
        >
          ← Voltar para a home
        </a>
      </div>
    </div>
  )
}
