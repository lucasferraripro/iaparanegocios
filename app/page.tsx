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
  Lock,
  Cpu,
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
      setShowStickyCta(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const modulos = [
    {
      icon: <Cpu size={24} className="text-blue-400" />,
      titulo: 'Cérebro Central Agente-SXS',
      descricao:
        'A estrutura exata para treinar sua IA com seus dados e transformá-la no funcionário mais inteligente da empresa.',
      tempo: 'Pronto p/ Uso',
    },
    {
      icon: <Target size={24} className="text-blue-400" />,
      titulo: 'Tráfego de Guerra (Meta Ads)',
      descricao:
        'O sistema de auto-otimização que reduz o CPL em até 70% e encontra os compradores prontos para pagar.',
      tempo: 'Estratégico',
    },
    {
      icon: <Bot size={24} className="text-blue-400" />,
      titulo: 'Agente SDR High-Ticket',
      descricao:
        'O robô que aborda, qualifica e agenda vendas nas suas DMs. Trabalha 24h sem pedir comissão ou feriado.',
      tempo: 'Ouro Puro',
    },
    {
      icon: <Sparkles size={24} className="text-blue-400" />,
      titulo: 'Fábrica de Conteúdo Viral',
      descricao:
        'Gere 30 dias de anúncios e reels em 15 minutos com clonagem de voz e avatares hiper-realistas.',
      tempo: 'Escala',
    },
    {
      icon: <ShoppingCart size={24} className="text-blue-400" />,
      titulo: 'Funis Perpétuos Blindados',
      descricao:
        'Como construir páginas que não apenas informam, mas forçam o cliente a tomar uma decisão de compra imediata.',
      tempo: 'Conversão',
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      titulo: 'Multi-Agentes em Cascata',
      descricao:
        'Faça 5 IAs conversarem entre si para gerenciar todo o seu pós-venda e suporte sem interferência humana.',
      tempo: 'Avançado',
    },
  ]

  const orderBumps = [
    {
      icon: <Bot size={24} />,
      titulo: 'Pipeline de Automação SDR',
      descricao:
        'O workflow completo para importar no Manychat/Vapi e começar a agendar hoje.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 67',
    },
    {
      icon: <Wrench size={24} />,
      titulo: 'OS de Negócios (Notion)',
      descricao:
        'A Central de Comando que eu uso para gerenciar 4 projetos simultâneos com apenas 2 agentes de IA.',
      precoOriginal: 'R$ 197',
      precoFinal: 'R$ 97',
    },
    {
      icon: <Video size={24} />,
      titulo: 'Masterclass: Vídeos Impossíveis',
      descricao:
        'A técnica proibida de vídeos virais que geram tráfego qualificado de graça 24h por dia.',
      precoOriginal: 'R$ 247',
      precoFinal: 'R$ 127',
    },
  ]

  const depoimentos = [
    {
      nome: 'Ricardo M.',
      cargo: 'Dono de Agência',
      texto: 'O Agente SDR agendou 12 reuniões pra mim enquanto eu dormia. Recuperei os R$ 47 no primeiro lead.',
      estrelas: 5,
    },
    {
      nome: 'Julia F.',
      cargo: 'Estrategista Digital',
      texto: 'Saí do operacional de conteúdo em 3 dias. O pipeline de clonagem de voz é assustadoramente bom.',
      estrelas: 5,
    },
    {
      nome: 'Carlos T.',
      cargo: 'Infoprodutor',
      texto: 'O Protocolo SXS não é curso, é um manual de guerra. Direto, bruto e com ROI imediato.',
      estrelas: 5,
    },
  ]

  const checkoutUrl = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#'

  return (
    <div className="min-h-screen bg-[#020617] text-foreground bg-mesh selection:bg-blue-500/30 overflow-x-hidden">
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: showStickyCta ? 0 : 100 }}
        className="fixed bottom-6 left-1/2 z-[100] w-[90%] -translate-x-1/2 md:hidden"
      >
        <a 
          href={checkoutUrl}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-5 text-lg font-black text-white shadow-[0_20px_50px_rgba(37,99,235,0.4)] border border-white/20 animate-pulse"
        >
          ATIVAR MEU EXÉRCITO — R$ 47
          <ArrowRight size={20} />
        </a>
      </motion.div>

      {/* Urgent Banner */}
      <div className="fixed top-0 z-[70] w-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 px-4 py-2 text-center shadow-lg border-b border-white/10">
        <p className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
          <AlertCircle size={14} className="text-blue-300" />
          Protocolo SXS Ativado: Lote 1 Finalizando com 14 Vagas Restantes (R$ 47)
        </p>
      </div>

      {/* Header */}
      <header className="fixed top-10 z-50 w-full glass px-6 py-4 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="p-1.5 rounded-lg bg-blue-600/20 border border-blue-500/20">
               <Cpu size={20} className="text-blue-400" />
             </div>
            <span className="text-lg font-black tracking-tighter italic text-white uppercase">Seleção IA</span>
          </div>
          <a
            href={checkoutUrl}
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Lock size={12} />
            Portal de Membros
          </a>
        </div>
      </header>

      {/* Hero: O Beco de Saída */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-48 md:pt-64">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-10 font-mono">
              <Zap size={12} className="animate-pulse" />
              Operação Blindada • 2026 Ready
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="mb-8 mx-auto max-w-5xl text-5xl font-black leading-[1] tracking-tighter sm:text-7xl lg:text-9xl bg-gradient-to-b from-white via-white to-slate-600 bg-clip-text text-transparent"
          >
            Aposente o Trabalho Manual.<br />
            <span className="text-blue-500">Ative seus Agentes.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mb-14 mx-auto max-w-2xl text-lg md:text-2xl leading-relaxed text-slate-400 font-medium"
          >
            A ciência de colocar <span className="text-white font-bold underline underline-offset-4 decoration-blue-500">IAs para trabalharem 24/7</span> como um exército disciplinado. Vendas, Tráfego e Conteúdo no piloto automático — sem folgas, sem erros e com escala infinita.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-8 items-center justify-center"
          >
            <a
              href={checkoutUrl}
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-12 py-7 md:px-16 md:py-8 text-xl md:text-3xl font-black text-white shadow-[0_0_80px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-blue-500/60 active:scale-95 border border-white/20"
            >
              ATIVAR MEU EXÉRCITO — R$ 47
              <ArrowRight size={28} className="transition-transform group-hover:translate-x-2" />
            </a>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-widest">
                <CheckCircle2 size={16} />
                Lote 1: Restam apenas 14 acessos (Valor Promocional)
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800" />
                ))}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#020617] bg-blue-600 text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Aprovado por 2.487+ empresários e agências de elite</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Glow Particles */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </section>

      {/* A Ferida (Pain Section) */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center md:text-left border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/5">
         <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
                  Até quando você será o <span className="text-red-500">escravo</span> da sua própria empresa?
               </h2>
               <p className="text-lg text-slate-400 font-medium">
                  Se você para, o dinheiro para. Se você dorme, os leads morrem. Se você viaja, a operação quebra. Isso não é liberdade, é uma prisão digital luxuosa.
               </p>
            </div>
            <div className="grid gap-4">
               {[
                 "DMs lotadas mas sem fechamento real",
                 "Tráfego caro e leads desqualificados",
                 "Gargalo na criação de conteúdo estratégico",
                 "Custos exorbitantes com freelancers medianos"
               ].map((dor, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <AlertCircle size={20} className="text-red-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-300">{dor}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Terminal Proof Section (Onde o Jogo Muda) */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
           <h3 className="text-xl md:text-3xl font-black text-white italic">"Isso é o que acontece quando o Agente SXS assume sua DM..."</h3>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950 p-2 shadow-2xl overflow-hidden glass">
           <div className="bg-slate-900/50 p-6 md:p-12">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                   </div>
                   <div className="text-xs font-mono text-slate-500 uppercase tracking-widest leading-none">protocolo_sxs_v9.8.log</div>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-mono text-emerald-500 font-bold">LINK ATIVO</span>
                </div>
             </div>
             <div className="font-mono text-xs md:text-base space-y-4 text-blue-300">
                <p> <span className="text-slate-600">[21:40:02]</span> • Inicializando rede de multi-agentes...</p>
                <p> <span className="text-slate-600">[21:40:05]</span> • Sincronizando com Base de Conhecimento do Lucas.</p>
                <p> <span className="text-slate-600">[21:40:12]</span> • <span className="text-amber-400">Lead @tiago_digital:</span> "Quanto custa o serviço?"</p>
                <p> <span className="text-slate-600">[21:40:14]</span> • <span className="text-blue-400">Agente SDR:</span> [ANALISANDO OBJEÇÃO DE PREÇO]</p>
                <p> <span className="text-slate-600">[21:40:18]</span> • <span className="text-blue-400">Agente SDR:</span> [RESPOSTA ENVIADA: VALOR AGREGADO + ANCORAGEM]</p>
                <p className="font-bold text-emerald-400"> <span className="text-slate-600">[21:40:22]</span> • VENDA CONFIRMADA: R$ 1.997,00 (Link de Pagamento Enviado).</p>
                <div className="h-4 w-2 bg-white animate-pulse inline-block" />
             </div>
           </div>
        </div>
      </section>

      {/* Protocolo Section: O Arsenal */}
      <section className="mx-auto max-w-6xl px-6 py-32" id="protocolo">
        <div className="mb-24 text-center">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-6 block font-mono">Entrega de Elite</span>
          <h2 className="mb-8 text-5xl font-black tracking-tight sm:text-7xl text-white">
             Sua Operação <span className="text-blue-400 italic">Inalcançável.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            Esqueça cursos que ensinam a conversar com o ChatGPT. O Seleção IA entrega a **estrutura de automação** pronta para quem não tem tempo a perder.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((modulo, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 transition-all hover:border-blue-500/50 hover:bg-white/[0.06] hover:-translate-y-2 shadow-xl shadow-black/20"
            >
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/10 group-hover:scale-110 transition-transform">
                    {modulo.icon}
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-blue-600/20 px-4 py-1.5 text-[10px] font-black uppercase text-blue-300">
                    <Trophy size={12} />
                    {modulo.tempo}
                  </div>
                </div>
                <h3 className="mb-5 text-2xl font-black text-white group-hover:text-blue-400 transition-colors leading-[1.2]">
                  {modulo.titulo}
                </h3>
                <p className="mb-10 text-sm md:text-base leading-relaxed text-slate-400 font-medium">
                  {modulo.descricao}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Protocolo Ativado</span>
                <ChevronRight size={20} className="text-slate-700 transition-transform group-hover:translate-x-2 group-hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Real: ROI de Quem Aplicou */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-y border-white/5 bg-blue-600/[0.02]">
        <div className="grid gap-8 md:grid-cols-3">
          {depoimentos.map((dep, idx) => (
            <div key={idx} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 glass hover:bg-white/[0.04] transition-all">
              <div className="flex gap-1 mb-5">
                {[...Array(dep.estrelas)].map((_, i) => <Star key={i} size={14} className="fill-blue-500 text-blue-500" />)}
              </div>
              <p className="text-lg font-bold text-white mb-6 leading-relaxed">"{dep.texto}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full bg-blue-900/50 border border-blue-500/20" />
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-tighter">{dep.nome}</p>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{dep.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arsenal de Elite (Upsells/Bumps) */}
      <section className="mx-auto max-w-6xl px-6 py-40">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 italic underline decoration-blue-500/30">Arsenal de Elite</h2>
          <p className="text-slate-500 font-bold text-sm md:text-lg uppercase tracking-widest">Aceleração máxima para quem não quer apenas aprender, mas EXECUTAR.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {orderBumps.map((bump, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.05] hover:border-blue-500/30 group shadow-2xl"
            >
              <div>
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mx-auto md:mx-0 shadow-[inset_0_0_30px_rgba(37,99,235,0.15)] border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {bump.icon}
                </div>
                <h3 className="mb-5 text-2xl font-black leading-tight text-white">
                  {bump.titulo}
                </h3>
                <p className="mb-10 text-sm md:text-base leading-relaxed text-slate-400 font-medium italic">
                  {bump.descricao}
                </p>
                <div className="mb-10 flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-600 line-through tracking-widest">
                    VALOR NORMAL: {bump.precoOriginal}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-blue-400 uppercase">Apenas</span>
                    <span className="text-5xl font-black text-white tracking-tighter">
                      {bump.precoFinal}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href={checkoutUrl}
                className="group block rounded-2xl bg-white/5 border border-white/10 p-5 text-center text-xs font-black text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 uppercase tracking-widest"
              >
                ADICIONAR AO MEU ARSENAL
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Risco Zero - Garantia Real */}
      <section className="mx-auto max-w-5xl px-6 py-40">
        <div className="relative rounded-[4rem] border border-blue-500/40 bg-blue-500/5 p-16 md:p-32 overflow-hidden shadow-2xl glass text-center">
          <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 pointer-events-none">
            <ShieldCheck size={300} className="text-blue-500" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-emerald-400 mb-12 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
              <Lock size={14} />
              Garantia de Infiltrado XS (7 Dias)
            </div>
            
            <h2 className="mb-12 text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              É Lucro ou <br />
              <span className="text-blue-500 italic">Desistência.</span>
            </h2>
            
            <p className="mx-auto mb-16 max-w-2xl text-lg md:text-2xl text-slate-400 leading-relaxed font-medium">
               Se em 7 dias você não provar o gosto da liberdade que as automações trazem, eu devolvo cada centavo. **Sem perguntas, sem burocracia, sem ressentimentos.** O único risco é você continuar fazendo tudo sozinho.
            </p>
            
            <a
              href={checkoutUrl}
              className="group relative inline-flex items-center gap-6 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-16 py-8 text-2xl md:text-4xl font-black text-white transition-all hover:scale-110 hover:shadow-[0_0_100px_rgba(37,99,235,0.6)] active:scale-95 border border-white/20 shadow-2xl shadow-blue-500/30"
            >
              ATIVAR MEU EXÉRCITO — R$ 47
              <ArrowRight size={38} className="transition-transform group-hover:translate-x-3" />
            </a>
            
            <div className="mt-12 flex items-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-[0.4em]">
               <span>Ambiente Seguro</span>
               <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
               <span>Acesso Vitalício</span>
               <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
               <span>Risco Zero</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio: O Arquiteto do Protocolo */}
      <section className="mx-auto max-w-6xl px-6 py-40 border-t border-white/5">
        <div className="grid gap-20 md:grid-cols-2 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-blue-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-[1.01]">
              <img 
                src="/images/lucas-ferrari.webp" 
                alt="Lucas Ferrari" 
                className="w-full h-auto object-cover aspect-[4/5] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs font-mono">O Estrategista</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">Lucas Ferrari</h2>
              <div className="w-20 h-1 bg-blue-600" />
            </div>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
               Não sou um "guru" de IA. Sou um empresário obcecado por **sistemas que escalam**. O Protocolo SXS foi desenvolvido no campo de batalha para salvar minha própria liberdade — e agora ele está disponível para você.
            </p>
            <div className="grid gap-6">
              {[
                "Criador da Metodologia Agente-SXS",
                "Estrategista de Escala para Negócios de Elite",
                "Arquiteto de Sistemas de Automação IA"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-slate-200">
                  <div className="h-6 w-6 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-blue-400" />
                  </div>
                  <span className="font-bold text-lg tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a 
                href={checkoutUrl}
                className="inline-flex items-center gap-3 text-white font-black hover:text-blue-400 transition-colors uppercase tracking-[0.2em] text-sm group border-b-2 border-white/10 pb-2"
              >
                QUERO O ACESSO AGORA
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: O Fim da Espera */}
      <footer className="border-t border-white/5 py-32 bg-black/40 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-blue-900/10 blur-[150px] -z-10" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="text-center md:text-left space-y-4">
               <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <Cpu size={32} className="text-blue-500" />
                  <span className="text-3xl font-black tracking-tighter italic text-white uppercase">Seleção IA</span>
               </div>
               <p className="text-sm font-medium text-slate-500 max-w-xs leading-relaxed">
                 O benchmark definitivo para empresários que entenderam que a IA é a única forma de sobreviver em 2026.
               </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
              <div className="flex gap-12 text-xs font-black text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
              </div>
              <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.5em]">
                © 2026 Lucas Ferrari • Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
