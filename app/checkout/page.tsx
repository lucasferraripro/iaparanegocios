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
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-[#f8fafc] overflow-hidden relative">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <div className="relative text-center z-10 glass p-12 rounded-[3rem] border border-white/10 shadow-3xl">
        <div className="relative mb-8">
          <Loader className="animate-spin text-blue-500 mx-auto" size={64} />
          <div className="absolute inset-0 blur-xl bg-blue-500/20 rounded-full animate-pulse" />
        </div>
        <h1 className="text-3xl font-black text-white mb-4 tracking-tighter">Redirecionando para <span className="text-blue-500 italic">Checkout</span>...</h1>
        <p className="text-slate-400 font-medium">Você será conectado ao ambiente seguro da Hotmart.</p>
        
        <div className="mt-12 flex items-center justify-center gap-2">
           <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
           <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
           <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce" />
        </div>
      </div>
    </div>
  )
}
