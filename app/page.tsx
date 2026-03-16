'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
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
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  AlertCircle,
  Trophy,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const modulos = [
    {
      icon: <Target size={24} className="text-blue-400" />,
      titulo: 'Tráfego que se Auto-Otimiza',
      descricao:
        'Como reduzir o custo por lead em até 70% sem precisar olhar o Gerenciador de Anúncios todos os dias.',
      tempo: '5 min',
    },
    {
      icon: <Sparkles size={24} className="text-blue-400" />,
      titulo: 'Criação de Conteúdo em Escala',
      descricao:
        'Como produzir 1 mês de conteúdo estratégico em 15 minutos usando o pipeline de clonagem de voz e imagem.',
      tempo: '7 min',
    },
    {
      icon: <ShoppingCart size={24} className="text-blue-400" />,
      titulo: 'Máquina de Vendas 24/7',
      descricao:
        'Como construir um funil perpétuo que qualifica leads e fecha vendas no piloto automático enquanto você dorme.',
      tempo: '6 min',
    },
    {
      icon: <MessageSquare size={24} className="text-blue-400" />,
      titulo: 'Agente SDR no Instagram',
      descricao:
        'Como transformar suas DMs em uma máquina de agendamento sem precisar de uma equipe de vendas humana.',
      tempo: '4 min',
    },
    {
      icon: <Search size={24} className="text-blue-400" />,
      titulo: 'Analista de Oportunidades IA',
      descricao:
        'Como encontrar os nichos mais lucrativos do mês antes que seus concorrentes descubram que eles existem.',
      tempo: '5 min',
    },
    {
      icon: <LayoutDashboard size={24} className="text-blue-400" />,
      titulo: 'Landing Pages de Alta Conversão',
      descricao:
        'Como criar páginas que convertem 3x mais sem precisar gastar R$ 5k com designers ou programadores.',
      tempo: '4 min',
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      titulo: 'Exército de Multi-Agentes',
      descricao:
        'A estratégia secreta para fazer 5 IAs trabalharem juntas para resolver tarefas complexas de uma empresa inteira.',
      tempo: '8 min',
    },
    {
      icon: <Zap size={24} className="text-blue-400" />,
      titulo: 'Fluxo Único de Conversão',
      descricao:
        'Como conectar seu CRM ao WhatsApp de forma tão fluida que nenhum lead escapa sem ser qualificado.',
      tempo: '6 min',
    },
    {
      icon: <Layers size={24} className="text-blue-400" />,
      titulo: 'Stack de IA Lucrativa',
      descricao:
        'A lista restrita de ferramentas que realmente trazem dinheiro no bolso (e quais você deve ignorar).',
      tempo: '5 min',
    },
    {
      icon: <Rocket size={24} className="text-blue-400" />,
      titulo: 'Módulo Final: Dominação Local',
      descricao:
        'O passo a passo para implementar o Protocolo SXS no seu negócio e se tornar inalcançável no seu mercado.',
      tempo: '10 min',
    },
  ]

  const orderBumps = [
    {
      icon: <Bot size={24} />,
      titulo: 'Pack de Automação de DMs (+ Agente SDR)',
      descricao:
        'Copy-paste do meu sistema de vendas pelo Instagram. Importe e comece a vender hoje.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 67',
    },
    {
      icon: <Wrench size={24} />,
      titulo: 'Minha Central de Comando (Notion)',
      descricao:
        'A estrutura exata que eu uso para gerenciar 4 operações simultâneas com apenas 2 agentes de IA.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 97',
    },
    {
      icon: <Video size={24} />,
      titulo: 'Masterclass: Vídeos Virais com IA',
      descricao:
        'Como criar vídeos impossíveis de ignorar que geram tráfego gratuito qualificado 24h por dia.',
      precoOriginal: 'R$ 247',
      precoFinal: 'R$ 127',
    },
  ]

  const depoimentos = [
    {
      nome: 'Ricardo M.',
      cargo: 'Dono de Agência',
      texto: 'Economizei 20h por semana na primeira semana de implementação do Agente SDR.',
      estrelas: 5,
    },
    {
      nome: 'Julia F.',
      cargo: 'Estrategista Digital',
      texto: 'O Protocolo SXS não é teoria, é código puro que traz dinheiro. O ROI foi imediato.',
      estrelas: 5,
    },
    {
      nome: 'Carlos T.',
      cargo: 'Infoprodutor',
      texto: 'Nunca vi nada tão direto ao ponto. Os checklists valem 10x o preço.',
      estrelas: 5,
    },
  ]

  const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#'

  return (
    <div className="min-h-screen bg-[#020617] text-foreground bg-mesh selection:bg-blue-500/30 overflow-x-hidden pt-12">
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: showStickyCta ? 0 : 100 }}
        className="fixed bottom-6 left-1/2 z-[100] w-[90%] -translate-x-1/2 md:hidden"
      >
        <a 
          href={checkoutUrl}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-5 text-lg font-black text-white shadow-[0_20px_50px_rgba(37,99,235,0.4)] border border-white/10"
        >
          ATIVAR MEU EXÉRCITO — R$ 47
          <ArrowRight size={20} />
        </a>
      </motion.div>

      {/* Urgent Banner */}
      <div className="fixed top-0 z-[70] w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-4 py-1.5 text-center shadow-lg">
        <p className="flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-wider text-white sm:text-xs">
          <AlertCircle size={10} />
          LOTE 1: Últimas 14 vagas (R$ 47). Sobe em breve.
        </p>
      </div>

      {/* Header */}
      <header className="fixed top-6 z-50 w-full border-b border-white/5 glass px-6 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo-selecao-ia.png" alt="Seleção IA" className="h-8 w-8 object-contain" />
            <span className="text-base font-bold tracking-tight italic text-white/90">Seleção IA</span>
          </div>
          <a
            href={checkoutUrl}
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-[10px] font-bold text-white shadow-lg shadow-blue-500/20 border border-white/10"
          >
            Acesso
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-44 md:pt-64">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 text-center md:text-left"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-6 font-mono">
              Protocolo Agente-SXS • Ativo em 2026
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent"
          >
            Clone sua Produtividade com Agentes de IA.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mb-12 mx-auto md:mx-0 max-w-2xl text-lg md:text-2xl leading-relaxed text-slate-300 font-medium"
          >
            Aposente o trabalho manual e coloque <span className="text-white font-bold underline underline-offset-4 decoration-blue-500/50">agentes de IA para trabalhar 24/7</span> por você — sem custos de funcionário e com escala infinita.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-6 sm:flex-row sm:items-center justify-center md:justify-start"
          >
            <a
              href={checkoutUrl}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-black text-white transition-all hover:to-blue-400 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] active:scale-95 border border-white/10"
            >
              ATIVAR MEU EXÉRCITO — R$ 47
              <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                <Trophy size={16} />
                Lote 1: 14 Vagas Restantes
              </span>
              <span className="text-xs text-slate-500">
                Pagamento único • Acesso Vitalício
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Glow Background */}
        <div className="absolute left-1/2 top-40 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] md:right-0 md:top-1/2 md:h-[500px] md:w-[500px] md:-translate-y-1/2" />
      </section>

      {/* Social Proof (Rápido p/ Mobile) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-8 font-mono">Empresários que já clonaram sua produtividade</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {depoimentos.map((dep, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 glass shadow-xl">
              <div className="flex gap-1 mb-3">
                {[...Array(dep.estrelas)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-sm font-medium text-slate-300 mb-4 italic">"{dep.texto}"</p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-8 w-8 rounded-full bg-slate-800" />
                <div>
                  <p className="text-xs font-bold text-white">{dep.nome}</p>
                  <p className="text-[10px] text-slate-500 uppercase">{dep.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Proof Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-slate-950 p-1 shadow-2xl overflow-hidden glass">
           <div className="p-6 md:p-12">
             <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">agente_sdr_v2.log</div>
             </div>
             <div className="font-mono text-[10px] md:text-sm space-y-3 text-blue-300">
                <p> <span className="text-slate-500">02:14:01</span> • Agente iniciado em background...</p>
                <p> <span className="text-slate-500">02:14:05</span> • 47 Conversas ativas detectadas.</p>
                <p> <span className="text-slate-500">02:14:12</span> • [FECHAMENTO] Lead @negocios_abc qualificado.</p>
                <p className="font-bold text-emerald-400"> <span className="text-slate-500">02:14:15</span> • Venda de R$ 997 convertida com IA.</p>
                <div className="h-3 w-1 bg-white animate-pulse inline-block" />
             </div>
           </div>
        </div>
      </section>

      {/* Protocolo Section */}
      <section className="mx-auto max-w-6xl px-6 py-32" id="protocolo">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block font-mono">A Nova Ordem</span>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
             O Beco de Saída para o <span className="text-blue-400 italic">Negócio Blindado.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Esqueça cursos teóricos. O Seleção IA entrega a estrutura pronta que permite uma pessoa fazer o trabalho de dez.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((modulo, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-indigo-500/50 hover:bg-white/[0.05]"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    {modulo.icon}
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[9px] font-black uppercase text-slate-500">
                    <Clock size={10} />
                    {modulo.tempo}
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                  {modulo.titulo}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-400">
                  {modulo.descricao}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Módulo Prático</span>
                <ChevronRight size={18} className="text-slate-700 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrades Section */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white mb-4 italic underline decoration-blue-500/30">Arsenal de Elite</h2>
          <p className="text-slate-500 font-medium text-sm">Acesso imediato para quem tem pressa.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
          {orderBumps.map((bump, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
            >
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mx-auto md:mx-0 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)] border border-blue-500/10">
                  {bump.icon}
                </div>
                <h3 className="mb-4 text-xl font-black leading-tight">
                  {bump.titulo}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-400 font-medium">
                  {bump.descricao}
                </p>
                <div className="mb-8 flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-600 line-through">
                    De {bump.precoOriginal}
                  </span>
                  <span className="text-4xl font-black text-white">
                    {bump.precoFinal}
                  </span>
                </div>
              </div>
              <a
                href={checkoutUrl}
                className="group block rounded-xl bg-white p-4 text-center text-sm font-black text-black transition-all hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95"
              >
                ADICIONAR AGORA
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final Guarantee */}
      <section className="mx-auto max-w-5xl px-6 py-40 text-center">
        <div className="relative rounded-[3rem] border border-blue-500/30 bg-blue-500/5 p-12 md:p-32 overflow-hidden shadow-2xl glass">
          <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12">
            <ShieldCheck size={200} className="text-blue-500" />
          </div>
          
          <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-10 border border-emerald-500/30">
             Garantia Blindada de 7 Dias
          </span>
          
          <h2 className="mb-10 text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">
            Risco Zero <br />
            Para Você Empreender.
          </h2>
          
          <p className="mx-auto mb-16 max-w-xl text-lg text-slate-400 leading-relaxed font-medium">
             Se em 7 dias você não sentir que os Agentes de IA valem pelo menos <span className="text-white underline decoration-emerald-500">10x o valor cobrado</span>, devolvo cada centavo.
          </p>
          
          <a
            href={checkoutUrl}
            className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-6 text-xl font-black text-white transition-all hover:to-blue-400 hover:shadow-[0_0_80px_rgba(37,99,235,0.5)] active:scale-95 border border-white/10"
          >
            QUERO O ACESSO AGORA
            <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
          </a>
          
          <p className="mt-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
             Preço Promocional do Lote 1.
          </p>
        </div>
      </section>

      {/* Bio Section - Lucas Ferrari */}
      <section className="mx-auto max-w-6xl px-6 py-32 border-t border-white/5">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-sky-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform group-hover:scale-[1.02]">
              <img 
                src="/images/lucas-ferrari.webp" 
                alt="Lucas Ferrari" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs font-mono">O Estrategista por trás</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Lucas Ferrari</h2>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Especialista em automação e escala com Inteligência Artificial. Já ajudou centenas de empresários a saírem do operacional e focarem no que realmente importa: <span className="text-white">o lucro e a liberdade.</span>
            </p>
            <div className="grid gap-4">
              {[
                "Criador do Protocolo Agente-SXS",
                "Especialista em Automações de Alta Escala",
                "Focado em IA Aplicada a Negócios Reais"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <span className="font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a 
                href={checkoutUrl}
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest text-xs group"
              >
                Ativar meu exército agora
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 text-center md:text-left">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex items-center gap-3">
              <img src="/images/logo-selecao-ia.png" alt="Seleção IA" className="h-8 w-8 object-contain" />
              <span className="text-xl font-black tracking-tighter italic text-white">Seleção IA</span>
            </div>
            
            <p className="text-xs font-medium text-slate-500">
              © 2026 Lucas Ferrari. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition">Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
