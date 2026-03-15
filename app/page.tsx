import { ArrowRight, CheckCircle, Zap } from 'lucide-react'

export default function Home() {
  const modulos = [
    'Gerencie seu Tráfego Automaticamente',
    'Crie Conteúdo Automaticamente',
    'Sistema de Vendas Automático',
    'Atendimento Automático no Instagram',
    'Analise Oportunidades com IA',
    'Landing Pages Rápidas',
    'Sistema com Vários Agentes',
    'Fluxo Automático de Vendas',
    'Stack Integrado de Marketing',
    'Compilação: Do Zero ao Automático'
  ]

  const beneficios = [
    'Implementação prática em menos de 2 horas',
    'Checklist passo-a-passo para cada módulo',
    'Exemplos reais de empresários que aplicam',
    'Suporte da comunidade de empreendedores',
    'Acesso vitalício ao conteúdo atualizado'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">IA Prática para Negócios</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#modulos" className="text-gray-600 hover:text-gray-900 transition">Módulos</a>
            <a href="#beneficios" className="text-gray-600 hover:text-gray-900 transition">Benefícios</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Implementar IA em seu Negócio em Poucas Horas
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            De zero conhecimento técnico até sistemas automáticos que geram renda enquanto você dorme. Aprenda IA prática, sem hype nem teoria complexa.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#checkout'}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 w-fit"
          >
            QUERO ACESSO AGORA <ArrowRight size={20} />
          </a>
          <p className="text-sm text-gray-500 mt-4">R$ 47 • Acesso vitalício • Sem contrato</p>
        </div>
      </section>

      {/* SEÇÃO 2: PROBLEMA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">O Problema Real</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">✗ Você sabe que IA é importante, mas não sabe por onde começar</p>
              <p className="text-lg text-gray-700">✗ Assistiu 10 vídeos no YouTube e ainda não aplicou nada</p>
              <p className="text-lg text-gray-700">✗ Fica "para trás" vendo concorrentes com sistemas automáticos</p>
              <p className="text-lg text-gray-700">✗ Medo de errar ou investir em ferramentas que não funcionam</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                &quot;Sentia que todo mundo tava ganhando dinheiro com IA menos eu. Agora entendo que era só falta de um passo-a-passo simples.&quot;
              </p>
              <p className="text-sm text-gray-500 mt-4">— Lucas (Empreendedor Digital)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SOLUÇÃO (10 Roteiros) */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="modulos">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">10 Módulos Práticos de IA</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {modulos.map((modulo, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition hover:shadow-lg">
              <div className="flex items-start gap-4">
                <Zap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">{modulo}</h4>
                  <p className="text-sm text-gray-500 mt-2">Com checklist prático para implementar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 4: PROVA SOCIAL */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quem Está Usando</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { numero: '500+', tipo: 'Agentes de Viagem' },
              { numero: '320+', tipo: 'Criadores de Conteúdo' },
              { numero: '480+', tipo: 'Consultores' },
              { numero: '650+', tipo: 'E-commerce' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.numero}</div>
                <p className="text-gray-600">{item.tipo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: CHECKLIST */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="beneficios">
        <h3 className="text-3xl font-bold text-gray-900 mb-12">O Que Você Vai Aprender</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {beneficios.map((beneficio, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <span className="text-lg text-gray-700">{beneficio}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 6: FAQ */}
      <section className="bg-gray-50 py-16" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Dúvidas Frequentes</h3>
          <div className="space-y-6">
            {[
              {
                q: 'Preciso saber programar?',
                a: 'Não! O curso é 100% prático e para iniciantes. Não tem código complexo.'
              },
              {
                q: 'Quanto de ferramentas preciso pagar?',
                a: 'Você consegue começar com ferramentas gratuitas. A maioria das soluções usa IA disponível e barata.'
              },
              {
                q: 'Quanto tempo leva pra ver resultados?',
                a: 'Alguns módulos dão resultado em horas. Outros em dias. Tudo depende do seu negócio.'
              },
              {
                q: 'Posso acessar de qualquer lugar?',
                a: 'Sim! Acesso 100% online, 24/7. Na sua conta. De qualquer dispositivo.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA Final */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Pronto para Automatizar seu Negócio?
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          Acesso vitalício por apenas <span className="font-bold">R$ 47</span>
        </p>
        <a
          href={process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#checkout'}
          className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
        >
          QUERO ACESSO AGORA
        </a>
      </section>

      {/* SEÇÃO 8: FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p>IA Prática para Negócios © 2024. Todos os direitos reservados.</p>
          <p className="mt-4 space-x-4">
            <a href="#privacy" className="hover:text-gray-900">Privacidade</a> •
            <a href="#terms" className="hover:text-gray-900">Termos</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
