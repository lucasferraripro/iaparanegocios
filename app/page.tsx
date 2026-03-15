import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Clock,
  ExternalLink,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Sparkles,
  Target,
  User,
  Users,
  Video,
  Wrench,
  Zap,
} from 'lucide-react'

export default function Home() {
  const modulos = [
    {
      icon: <Target size={24} />,
      titulo: 'Gerencie seu Tráfego Automaticamente',
      descricao:
        'Configure campanhas que se otimizam sozinhas com IA. Reduza custo por lead sem ficar o dia todo no gerenciador.',
      tempo: '5 min',
    },
    {
      icon: <Sparkles size={24} />,
      titulo: 'Crie Conteúdo Automaticamente',
      descricao:
        'Pipeline completo de criação de conteúdo com IA: do briefing ao post publicado.',
      tempo: '7 min',
    },
    {
      icon: <ShoppingCart size={24} />,
      titulo: 'Sistema de Vendas Automático',
      descricao:
        'Funil de vendas que roda 24h. Da captação ao fechamento, com follow-up automatizado.',
      tempo: '6 min',
    },
    {
      icon: <MessageSquare size={24} />,
      titulo: 'Atendimento Automático no Instagram',
      descricao:
        'Responda DMs, qualifique leads e agende reuniões no piloto automático.',
      tempo: '4 min',
    },
    {
      icon: <Search size={24} />,
      titulo: 'Analise Oportunidades com IA',
      descricao:
        'Use IA para identificar tendências, analisar concorrentes e encontrar gaps de mercado.',
      tempo: '5 min',
    },
    {
      icon: <LayoutDashboard size={24} />,
      titulo: 'Landing Pages Rápidas',
      descricao:
        'Crie páginas de alta conversão em minutos usando IA. Sem precisar de designer ou dev.',
      tempo: '4 min',
    },
    {
      icon: <BrainCircuit size={24} />,
      titulo: 'Sistema com Vários Agentes',
      descricao:
        'Monte uma equipe de agentes de IA que trabalham juntos para resolver tarefas complexas.',
      tempo: '8 min',
    },
    {
      icon: <Zap size={24} />,
      titulo: 'Fluxo Automático de Vendas',
      descricao:
        'Automações que conectam CRM, e-mail e WhatsApp num fluxo único de conversão.',
      tempo: '6 min',
    },
    {
      icon: <Layers size={24} />,
      titulo: 'Stack Integrado de Marketing',
      descricao:
        'As ferramentas certas conectadas. Sem redundância, sem gasto desnecessário.',
      tempo: '5 min',
    },
    {
      icon: <Rocket size={24} />,
      titulo: 'Compilação: Do Zero ao Automático',
      descricao:
        'Guia final que conecta todos os módulos num sistema completo para o seu negócio.',
      tempo: '10 min',
    },
  ]

  const orderBumps = [
    {
      icon: <Bot size={24} />,
      titulo: 'Automação de IA + Agente SDR no seu DM',
      descricao:
        'Um agente de IA treinado para qualificar e converter leads direto no seu Instagram. Inclui template de automação pronto para usar.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 67',
    },
    {
      icon: <Wrench size={24} />,
      titulo: 'Stack de IA — O que eu uso hoje',
      descricao:
        'Lista completa das ferramentas de IA que uso no dia a dia, com tutorial de configuração e integração entre elas.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 97',
    },
    {
      icon: <Video size={24} />,
      titulo: 'Fluxo de Trabalho — Vídeo com IA em escala',
      descricao:
        'Processo completo para produzir vídeos com IA: roteiro, edição, legendas e publicação em escala.',
      precoOriginal: 'R$ 247',
      precoFinal: 'R$ 127',
    },
  ]

  const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#'

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Settings size={20} className="text-gray-400" />
            <span className="text-lg font-semibold tracking-tight text-white">
              Seleção IA
            </span>
          </div>
          <a
            href="/login"
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Acessar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
            Hub de conteúdo por Lucas Ferrari
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            IA aplicada a negócio, automação e resultado real.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            Checklists, ferramentas e estruturas que eu estou testando e usando
            para escalar negócios com IA.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={checkoutUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-gray-950 transition hover:bg-gray-200"
            >
              Quero acesso — R$ 47
              <ArrowRight size={18} />
            </a>
            <span className="text-sm text-gray-500">
              Acesso vitalício · Sem assinatura
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-gray-800/60" />
      </div>

      {/* Conteúdos Exclusivos */}
      <section className="mx-auto max-w-6xl px-4 py-20" id="modulos">
        <div className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Conteúdos exclusivos
          </h2>
          <p className="text-gray-500">
            10 módulos práticos para aplicar IA no seu negócio hoje.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((modulo, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-md bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-400">
                    Módulo
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-600">
                    <Clock size={12} />
                    {modulo.tempo}
                  </span>
                </div>
                <div className="mb-3 text-gray-400">{modulo.icon}</div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {modulo.titulo}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {modulo.descricao}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
                    <User size={12} className="text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-500">Lucas Ferrari</span>
                </div>
                <span className="text-xs font-medium text-gray-500 transition group-hover:text-white">
                  Ver módulo →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-gray-800/60" />
      </div>

      {/* Quem é Lucas Ferrari */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
            Quem é Lucas Ferrari
          </h2>
          <div className="rounded-xl border border-gray-800/60 bg-gray-900/50 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
                <User size={28} className="text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Lucas Ferrari</p>
                <p className="text-sm text-gray-500">@lucasferrari.pro</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-gray-400">
              Empreendedor digital focado em IA aplicada a negócios. Testo
              ferramentas, monto automações e documento tudo o que funciona de
              verdade para escalar operações com inteligência artificial.
            </p>
            <p className="leading-relaxed text-gray-400">
              Não vendo teoria. Compartilho o que estou usando agora — as
              ferramentas, os fluxos, os erros e os resultados reais. Se
              funciona, entra no hub. Se não funciona, descarto.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-gray-800/60" />
      </div>

      {/* Order Bumps */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Acelere seus resultados
          </h2>
          <p className="text-gray-500">
            Produtos complementares com condição especial para membros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {orderBumps.map((bump, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-gray-800/60 bg-gray-900/50 p-6 transition hover:border-gray-700"
            >
              <div>
                <div className="mb-4 text-gray-400">{bump.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {bump.titulo}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {bump.descricao}
                </p>
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="text-sm text-gray-600 line-through">
                    {bump.precoOriginal}
                  </span>
                  <span className="text-2xl font-bold text-white">
                    {bump.precoFinal}
                  </span>
                </div>
              </div>
              <a
                href={checkoutUrl}
                className="block rounded-lg bg-white py-3 text-center text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                QUERO AGORA
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-gray-800/60" />
      </div>

      {/* Links Úteis */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            Links úteis
          </h2>
          <p className="text-gray-500">Comunidade e canais de contato.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: 'Comunidade no WhatsApp',
              href: '#',
              icon: <Users size={18} />,
            },
            {
              label: 'Instagram @lucasferrari.pro',
              href: 'https://instagram.com/lucasferrari.pro',
              icon: <ExternalLink size={18} />,
            },
            {
              label: 'Suporte por e-mail',
              href: 'mailto:contato@lucasferrari.pro',
              icon: <MessageSquare size={18} />,
            },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-gray-800/60 bg-gray-900/50 px-5 py-4 text-sm text-gray-400 transition hover:border-gray-700 hover:text-white"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Settings size={16} className="text-gray-600" />
              <span className="text-sm text-gray-600">Seleção IA</span>
            </div>
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} Lucas Ferrari. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-4 text-xs text-gray-600">
              <a href="#" className="transition hover:text-gray-400">
                Privacidade
              </a>
              <a href="#" className="transition hover:text-gray-400">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
