'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Lock,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  AlertCircle,
  MessageSquare,
  Cpu,
  Play,
  Trophy,
  ChevronRight,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

// ─── Notification Toast ──────────────────────────────────────────────────────
const nomes = [
  { nome: 'Carla de Belo Horizonte', tempo: '2 minutos' },
  { nome: 'Rodrigo de São Paulo', tempo: '5 minutos' },
  { nome: 'Fernanda do Recife', tempo: '8 minutos' },
  { nome: 'André de Curitiba', tempo: '11 minutos' },
  { nome: 'Patricia de Fortaleza', tempo: '14 minutos' },
]

function NotificationToast() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const idx = useRef(0)

  useEffect(() => {
    const show = () => {
      setCurrent(idx.current % nomes.length)
      setVisible(true)
      setTimeout(() => setVisible(false), 4000)
      idx.current++
    }
    const timer = setTimeout(show, 3000)
    const interval = setInterval(show, 12000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

  if (!visible) return null
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="fixed bottom-24 left-4 z-50 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-2xl backdrop-blur-md md:bottom-10 md:left-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
        <Users size={16} />
      </div>
      <div>
        <p className="text-[11px] font-black text-white">{nomes[current].nome}</p>
        <p className="text-[10px] text-slate-500">garantiu sua vaga há {nomes[current].tempo}</p>
      </div>
    </motion.div>
  )
}

// ─── Lead Form ────────────────────────────────────────────────────────────────
const WHATSAPP_GROUP_URL = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || 'https://wa.me/5511999999999?text=Quero+entrar+na+imersão'

function LeadForm() {
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [tel, setTel] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simula envio (integrar webhook/API depois)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setDone(true)
    setTimeout(() => {
      window.open(WHATSAPP_GROUP_URL, '_blank')
    }, 800)
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <p className="text-2xl font-black text-white">Perfeito! Abrindo o grupo agora...</p>
        <p className="text-slate-400 text-sm">Você será direcionado para o grupo VIP em instantes.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Seu nome completo"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium transition-all"
      />
      <input
        type="tel"
        placeholder="Seu WhatsApp (com DDD)"
        value={whats}
        onChange={e => setWhats(e.target.value)}
        required
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium transition-all"
      />
      <input
        type="tel"
        placeholder="Telefone (opcional)"
        value={tel}
        onChange={e => setTel(e.target.value)}
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-5 text-lg font-black text-white shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] hover:shadow-blue-500/50 disabled:opacity-60 active:scale-95 border border-white/20"
      >
        {loading ? 'Enviando...' : 'QUERO ENTRAR NA IMERSÃO →'}
      </button>
      <p className="text-center text-[11px] text-slate-600 font-bold uppercase tracking-widest">
        🔒 Seus dados estão seguros. Sem spam.
      </p>
    </form>
  )
}

export default function Home() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const entregaveis = [
    { num: '01', titulo: 'Raio-X do seu negócio com IA', desc: 'A IA analisa seus anúncios, suas campanhas e te mostra onde o dinheiro está escapando — em minutos.' },
    { num: '02', titulo: 'Mapa de conteúdo que vende', desc: 'Roteiro completo de Reels, Stories e posts para atrair clientes que já querem comprar o que você vende.' },
    { num: '03', titulo: 'Automação de atendimento no WhatsApp', desc: 'Nunca mais perca um cliente por demora no atendimento. Configure a IA para responder e qualificar em tempo real.' },
    { num: '04', titulo: 'Campanha de anúncios pronta para publicar', desc: 'Sai da imersão com a próxima campanha estruturada: público, criativo e verba definidos pela IA com os seus dados.' },
    { num: '05', titulo: 'Sua IA pessoal de negócios', desc: 'Uma IA treinada com o contexto do seu negócio para te dar estratégias todos os dias — sem depender de agência.' },
    { num: '06', titulo: '2 dias ao vivo, com execução real', desc: 'Você executa comigo, na tela, com os dados do seu próprio negócio. Não é teoria — é resultado em tempo real.' },
  ]

  const depoimentos = [
    { nome: 'Mariana S.', cargo: 'Empreendedora Digital', texto: 'Em 2 dias eu entendi o que estava errando nos meus anúncios. Reduzi o custo por lead em 60% na semana seguinte.' },
    { nome: 'Felipe R.', cargo: 'Dono de Agência', texto: 'A IA encontrou R$ 12 mil desperdiçados nas minhas campanhas. Paguei R$ 147 e economizei mais de R$ 10 mil em 30 dias.' },
    { nome: 'Tatiane L.', cargo: 'Vendedora Online', texto: 'Saí da imersão com meu atendimento automatizado. Hoje vendo sem precisar ficar colada no celular o dia inteiro.' },
  ]

  const CHECKOUT_URL = process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || WHATSAPP_GROUP_URL

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <NotificationToast />

      {/* Sticky CTA Mobile */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-4 left-1/2 z-[100] w-[92%] -translate-x-1/2 md:hidden"
      >
        <a
          href="#formulario"
          className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-5 text-base font-black text-white shadow-[0_20px_50px_rgba(37,99,235,0.45)] border border-white/20"
        >
          GARANTIR MINHA VAGA — R$ 147
          <ArrowRight size={18} />
        </a>
      </motion.div>

      {/* Banner urgência */}
      <div className="fixed top-0 z-[70] w-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 px-4 py-2 text-center">
        <p className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
          <Zap size={12} className="text-blue-300 animate-pulse" />
          🔥 IMERSÃO AO VIVO • Últimas vagas por R$ 147 • Não fica gravado
        </p>
      </div>

      {/* Header */}
      <header className="fixed top-8 z-50 w-full px-6 py-4 backdrop-blur-md border-b border-white/5 bg-[#020617]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-600/20 border border-blue-500/20">
              <Cpu size={20} className="text-blue-400" />
            </div>
            <span className="text-base font-black tracking-tighter uppercase italic text-white">Seleção IA</span>
          </div>
          <a
            href="#formulario"
            className="hidden md:flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-black text-white hover:bg-blue-500 transition-all"
          >
            GARANTIR MINHA VAGA
            <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* ─── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-44 md:pt-60 text-center">
        <motion.div initial="initial" animate="animate" variants={stagger} className="relative z-10">
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-8">
              <Zap size={11} className="animate-pulse" />
              Imersão ao vivo • Zoom • 2 dias
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 mx-auto max-w-5xl text-4xl font-black leading-[1.05] tracking-tighter sm:text-6xl lg:text-8xl bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent"
          >
            IA se conecta no seu negócio,{' '}
            <span className="text-blue-500">analisa tudo</span> e te entrega o que fazer — em 2 dias.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-8 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400 font-medium"
          >
            Empresário que não programa usa IA para fazer mais grana — sem agência, sem freelancer, sem depender de ninguém.{' '}
            <span className="text-white font-bold">Ao vivo, do zero ao resultado, com os dados do seu negócio.</span>
          </motion.p>

          {/* Prova rápida */}
          <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap justify-center gap-8 text-center">
            {[
              { num: '3.800+', label: 'já participaram' },
              { num: 'R$ 47K', label: 'verba desperdiçada encontrada' },
              { num: '2 dias', label: 'ao vivo e executando' },
              { num: '4.9/5', label: 'satisfação' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-black text-white">{s.num}</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#formulario"
              className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-10 py-6 text-xl md:text-2xl font-black text-white shadow-[0_0_80px_rgba(37,99,235,0.4)] hover:scale-105 hover:shadow-blue-500/60 active:scale-95 border border-white/20 transition-all"
            >
              QUERO AUTOMATIZAR COM IA
              <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 flex items-center justify-center gap-3">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Garantia de 7 dias • Risco zero • Menos de 2% pedem reembolso</span>
          </motion.div>
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </section>

      {/* ─── PROVA SOCIAL RÁPIDA ───────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-6 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, r) =>
            ['✅ Mapa de públicos que convertem', '✅ Ranking de criativos campeões', '✅ Campanha pronta para publicar', '✅ IA conectada na SUA conta', '✅ Simulação financeira completa', '✅ Dashboard personalizado'].map((item, i) => (
              <span key={`${r}-${i}`} className="text-xs font-black text-slate-400 uppercase tracking-widest">{item}</span>
            ))
          )}
        </div>
      </section>

      {/* ─── A DOR (O ABISMO DO TRÁFEGO) ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center md:text-left">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-blue-500">Antes de tudo, preciso te contar uma coisa</div>
        <h2 className="mb-8 text-3xl md:text-5xl font-black leading-tight text-white">
          Você já sabe que precisa anunciar.<br />
          <span className="text-slate-500">Mas entre saber e fazer, tem um abismo.</span>
        </h2>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-lg text-slate-400 leading-relaxed italic">
          "Tem o gestor de tráfego que cobra R$ 3.000+ e não explica nada. Tem a Meta que muda as regras toda semana. Tem as campanhas que você cria com cuidado… e morrem em 48 horas sem uma única venda."
        </div>

        <p className="mb-8 text-slate-400 text-lg leading-relaxed">
          E tem você, tentando aprender sozinho, assistindo vídeo no YouTube, testando ferramenta nova todo mês, gastando dinheiro em curso que ensina teoria mas não mostra como <strong className="text-white">FAZER</strong>.
        </p>

        <p className="mb-8 text-slate-400 text-lg leading-relaxed">
          Eu sei exatamente como isso é. Porque eu estava nesse ciclo. Não sou programador — sou empresário. Comecei usando IA para marketing porque precisava fazer mais grana sem aumentar os custos. E funcionou.
        </p>

        <div className="rounded-3xl border border-blue-500/30 bg-blue-600/5 p-8">
          <p className="text-xl md:text-2xl font-black text-white leading-relaxed">
            Eu descobri que a IA não é uma ferramenta — é uma <span className="text-blue-400">equipe inteira.</span>
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Não estou falando de ChatGPT escrevendo textinho de post. Estou falando de agentes de IA especializados que se conectam nos seus dados reais e fazem o trabalho de um time inteiro. E o melhor: você não precisa saber programar para usar.
          </p>
        </div>
      </section>

      {/* ─── NARRATIVA DO LUCAS ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-10 pb-28">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Criei mais de <strong className="text-white">40 automações de IA</strong> para o meu negócio descrevendo em português o que eu queria. Sem código. Sem DevOps. Sem agência.
            </p>
            <p>
              Cancelei ferramentas caras que eu pagava por meses sem resultado. Ganhei autonomia total para testar campanhas, produzir conteúdo e atender clientes — com a IA trabalhando enquanto eu durmo.
            </p>
            <p className="text-white font-bold text-xl">
              Se eu consegui sem programar, você também consegue. E em 2 dias, eu te mostro como.
            </p>
          </div>
          <div className="w-full md:w-56 shrink-0 rounded-3xl border border-white/10 overflow-hidden bg-slate-900">
            <img
              src="/images/lucas-ferrari.webp"
              alt="Lucas Ferrari"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* ─── ENTREGÁVEIS ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
        <div className="mb-16 text-center">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-4 block">O que você leva</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            6 Entregáveis Concretos em 2 Dias
          </h2>
          <p className="mt-4 text-slate-500 font-bold text-sm md:text-base uppercase tracking-widest">
            Você não sai "sabendo" — você sai com tudo funcionando na sua conta.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entregaveis.map((e, i) => (
            <div key={i} className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-blue-500/40 hover:bg-white/[0.06] hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-5xl font-black text-blue-600/40">{e.num}</span>
                <ChevronRight size={20} className="text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mb-3 text-xl font-black text-white group-hover:text-blue-400 transition-colors leading-tight">{e.titulo}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-500/20 bg-blue-600/5 p-8 text-center">
          <div className="text-slate-500 line-through text-sm mb-2 font-bold">Valor real desses entregáveis: R$ 9.991</div>
          <div className="text-2xl font-black text-white mb-1">Você leva tudo por apenas</div>
          <div className="text-6xl font-black text-blue-400">R$ 147</div>
          <div className="text-xs text-slate-600 font-bold uppercase tracking-widest mt-2">ou 12x de R$ 15,20</div>
        </div>
      </section>

      {/* ─── CRONOGRAMA ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20 border-t border-white/5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white">O que acontece em cada dia</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              dia: 'Dia 1',
              titulo: 'Do Zero ao Raio-X Completo',
              itens: [
                'Por que 99% usa IA errado (e como mudar isso)',
                'IA instalada e conectada no seu negócio',
                'Raio-X de todas as suas campanhas e publicações',
                'Simulação financeira: quanto você está perdendo',
              ],
            },
            {
              dia: 'Dia 2',
              titulo: 'Da Análise à Ação',
              itens: [
                'Quais criativos realmente vendem (com dados seus)',
                'IA gerando cópias e roteiros com seus dados reais',
                'Sua próxima campanha criada pela IA',
                'Automação de atendimento configurada e rodando',
              ],
            },
          ].map((dia, i) => (
            <div key={i} className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-4 inline-flex rounded-full bg-blue-600/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-300">
                {dia.dia}
              </div>
              <h3 className="mb-6 text-2xl font-black text-white">{dia.titulo}</h3>
              <ul className="space-y-3">
                {dia.itens.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── QUALIFICAÇÃO ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20 border-t border-white/5">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <h3 className="mb-6 text-xl font-black text-emerald-400">✅ É pra você se...</h3>
            <ul className="space-y-3">
              {[
                'Você investe em anúncios mas não sabe o que está dando resultado',
                'Quer dominar seu tráfego sem depender de gestor ou agência',
                'Perde horas em tarefas que a IA poderia fazer em minutos',
                'Quer sair com ferramentas funcionando — não com teoria',
                'É empresário e quer usar IA para vender mais sem aumentar custos',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="mb-6 text-xl font-black text-red-400">❌ Não é pra você se...</h3>
            <ul className="space-y-3">
              {[
                'Quer resultado sem nenhum esforço',
                'Acha que a IA faz tudo sozinha sem estratégia',
                'Não quer aprender coisas novas',
                'Prefere continuar no manual e torcer para melhorar',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white">O que dizem os alunos</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((dep, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-blue-500 text-blue-500" />)}
              </div>
              <p className="mb-6 text-base font-bold text-white leading-relaxed">"{dep.texto}"</p>
              <div className="border-t border-white/5 pt-5">
                <p className="text-sm font-black text-white uppercase">{dep.nome}</p>
                <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">{dep.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GARANTIA ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="relative rounded-[3rem] border border-blue-500/30 bg-blue-500/5 p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12 pointer-events-none">
            <ShieldCheck size={250} className="text-blue-400" />
          </div>
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-5 py-2 text-xs font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/30">
              <Lock size={12} />
              Garantia de 7 dias — Risco Zero
            </div>
            <h2 className="mb-6 text-4xl md:text-6xl font-black text-white tracking-tighter">
              É resultado ou<br /><span className="text-blue-400 italic">dinheiro de volta.</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-400 leading-relaxed">
              Se em 7 dias você não sentir que valeu cada centavo, eu devolvo tudo. Sem perguntas, sem burocracia. O único risco é você continuar fazendo tudo no braço enquanto seus concorrentes usam IA.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FORMULÁRIO FINAL ─────────────────────────────────────────────────── */}
      <section id="formulario" className="mx-auto max-w-2xl px-6 py-20 border-t border-white/5 text-center">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-blue-500">Quase lá</div>
        <h2 className="mb-4 text-3xl md:text-5xl font-black text-white leading-tight">
          A IA encontrou R$ 47 mil desperdiçados na conta de um aluno.{' '}
          <span className="text-blue-400">Quanto ela vai encontrar na sua?</span>
        </h2>
        <p className="mb-12 text-slate-400 text-lg leading-relaxed">
          Deixe seu contato e eu te mando pessoalmente os detalhes da imersão + uma surpresa antes de começar.
        </p>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <LeadForm />
        </div>

        <div className="mt-8 flex flex-col gap-3 items-center text-xs text-slate-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2"><ShieldCheck size={12} className="text-emerald-500" /> Ambiente seguro e criptografado</div>
          <div className="flex items-center gap-2"><Lock size={12} className="text-blue-500" /> Seus dados não são compartilhados</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Cpu size={24} className="text-blue-500" />
            <span className="text-xl font-black italic uppercase text-white">Seleção IA</span>
          </div>
          <div className="flex gap-8 text-xs font-black text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
          </div>
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.5em]">
            © 2026 Lucas Ferrari • Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}
