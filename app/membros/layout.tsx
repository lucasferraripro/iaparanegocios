'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogOut, BookOpen } from 'lucide-react'

export default function MembrosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    // Simples autenticação via localStorage
    const auth = localStorage.getItem('selecao-ia-auth')
    if (!auth) {
      router.push('/login')
    } else {
      const parsed = JSON.parse(auth)
      setUserEmail(parsed.email)
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('selecao-ia-auth')
    router.push('/')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" size={28} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">IA Prática para Negócios</h1>
              <p className="text-sm text-gray-500">Seu Hub de Conteúdo</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-gray-600">Olá,</p>
              <p className="font-semibold text-gray-900">{userEmail}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition"
            >
              <LogOut size={20} />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  )
}
