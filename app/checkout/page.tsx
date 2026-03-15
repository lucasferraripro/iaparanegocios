'use client'

import { useEffect } from 'react'
import { Loader } from 'lucide-react'

export default function CheckoutPage() {
  useEffect(() => {
    // Redireciona para Hotmart automaticamente
    const hotmartUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL

    if (hotmartUrl) {
      window.location.href = hotmartUrl
    } else {
      // Se não tiver URL, mostra instruções
      setTimeout(() => {
        document.body.innerHTML = `
          <div style="text-align: center; padding: 40px; font-family: system-ui;">
            <h1>Checkout</h1>
            <p>Configure NEXT_PUBLIC_HOTMART_CHECKOUT_URL no .env.local</p>
            <a href="/" style="color: #2563eb;">Voltar</a>
          </div>
        `
      }, 1000)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Loader className="animate-spin text-blue-600 mx-auto mb-4" size={48} />
        <h1 className="text-2xl font-bold text-gray-900">Redirecionando para checkout...</h1>
        <p className="text-gray-600 mt-2">Você será redirecionado para Hotmart</p>
      </div>
    </div>
  )
}
