'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogOut, Settings } from 'lucide-react'

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
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-gray-600">
        Carregando...
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings size={20} className="text-gray-600" />
            <span className="text-lg font-semibold tracking-tight">Seleção IA</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-600">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
            >
              <LogOut size={16} />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  )
}
