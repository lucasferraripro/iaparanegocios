# 🚀 Deployment - IA Prática para Negócios

## Link Local para Testar (Desenvolvimento)

```
http://localhost:3000
```

### Iniciar servidor local:
```bash
npm run dev
```

O servidor vai rodar em: **http://localhost:3000**

---

## Deploy no Vercel (Produção)

### Opção 1: Deploy automático (Recomendado)

```bash
# Fazer login no Vercel (primeira vez apenas)
npm install -g vercel
vercel login

# Deploy em produção
cd "C:\Users\win 10\Downloads\seleçao IA - low ticket\selecao-ia-hub"
vercel deploy --prod
```

### Opção 2: Deploy via GitHub (Mais fácil)

1. **Criar repositório no GitHub:**
   - Criar novo repo em https://github.com/new
   - Nome: `selecao-ia-hub`
   - Copiar o código local para lá

2. **Conectar ao Vercel:**
   - Ir em https://vercel.com/import
   - Selecionar o repo do GitHub
   - Clicar "Deploy"
   - Vercel vai criar automaticamente!

3. **URL será gerada automaticamente** (exemplo: `https://selecao-ia-hub-7s2k9.vercel.app`)

---

## Variáveis de Ambiente (Importante!)

Criar arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_KEY
NEXT_PUBLIC_HOTMART_CHECKOUT_URL=https://pay.hotmart.com/YOUR_PRODUCT_ID
```

### No Vercel:
1. Ir em Project Settings
2. Environment Variables
3. Adicionar cada variável

---

## Integrações Necessárias

### 1. Hotmart (Pagamento) - PRÓXIMO PASSO
- [ ] Criar produto no Hotmart
- [ ] Pegar URL de checkout
- [ ] Colocar em `NEXT_PUBLIC_HOTMART_CHECKOUT_URL`

### 2. Supabase (Banco + Autenticação) - PRÓXIMO PASSO
- [ ] Criar conta em https://supabase.com
- [ ] Criar novo projeto
- [ ] Pegar chaves de API
- [ ] Adicionar como environment variables

### 3. Email (Resend) - PRÓXIMO PASSO
- [ ] Criar conta em https://resend.com
- [ ] Gerar API key
- [ ] Implementar envio de email automático

---

## Estrutura do Projeto

```
selecao-ia-hub/
├── app/
│   ├── page.tsx                    → Landing page (home)
│   ├── login/page.tsx              → Login dos membros
│   ├── checkout/page.tsx           → Redireciona para Hotmart
│   ├── membros/
│   │   ├── layout.tsx              → Layout protegido
│   │   ├── page.tsx                → Dashboard com 10 módulos
│   │   └── posts/[slug]/page.tsx    → Cada módulo individual
│   └── layout.tsx
├── lib/
│   └── supabase.ts                 → Cliente Supabase
├── content/
│   └── posts.json                  → 10 módulos de conteúdo
├── .env.local                      → Variáveis (não commit!)
└── package.json
```

---

## Checklist de Próximos Passos

- [ ] **Teste Local:** `npm run dev` → http://localhost:3000
- [ ] **Clonar Landing:** Verificar 8 seções aparecem
- [ ] **Testar Login:** Email qualquer → Dashboard
- [ ] **Ver Módulos:** 10 posts com checklists aparecem
- [ ] **Hotmart:** Criar produto e colocar URL no .env.local
- [ ] **Deploy:** `vercel deploy --prod`
- [ ] **Configurar Domínio:** Após deploy, apontar domínio no Vercel
- [ ] **Supabase:** Integrar autenticação real
- [ ] **Email:** Configurar Resend para confirmação de compra

---

## Dúvidas Comuns

**P: Posso testar sem Hotmart?**
R: Sim! Login funciona com qualquer email. Botão checkout redireciona com warning.

**P: Como adicionar mais posts/módulos?**
R: Editar `content/posts.json` e adicionar novo objeto. Páginas são geradas automaticamente.

**P: Posso trocar cores/design?**
R: Sim! Tailwind CSS está configurado. Editar as classes nas páginas.

**P: Quando suportar autenticação real?**
R: Após integrar Supabase (ver guia acima)

---

## Suporte

Para dúvidas sobre Vercel: https://vercel.com/docs
Para dúvidas sobre Next.js: https://nextjs.org/docs
