# Blanc Odontologia - Projeto Phoenix

Site odontológico premium para a clínica Blanc Odontologia em Florianópolis - SC.

## Visão Geral

- **Lead**: Blanc Odontologia
- **Localização**: Centro de Florianópolis, SC
- **Subnicho**: Premium/Estética (Implantes, Lentes de Contato, HOF)
- **Stack**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

## Estrutura do Projeto

```
blanc-odontologia/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── globals.css        # Estilos globais
│   ├── favicon.ico        # Favicon
│   └── opengraph-image.tsx
├── components/            # Componentes React
│   └── sections/          # Seções do site
│       ├── header.tsx
│       ├── hero.tsx
│       ├── services.tsx
│       ├── about.tsx
│       ├── insurance.tsx
│       └── footer.tsx
├── lib/                   # Dados e configurações
│   ├── content.ts         # Conteúdo do site
│   ├── brand.ts           # Tokens de marca
│   └── utils.ts           # Utilitários
├── public/
│   └── lead-assets/       # Imagens reais do lead
├── docs/                  # Documentação
│   ├── qa-checklist.html
│   ├── antes-depois.html
│   ├── relatorio-tecnico.html
│   └── argumento-comercial.html
└── _phoenix/              # Dados do pipeline Phoenix
    └── build-packet.json
```

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## Cores da Marca

- Primary: `#C0AF7F` (Dourado)
- Secondary: `#54595F`
- Background: `#FAFAFA`
- Surface: `#FFFEFA`
- Text: `#333333`

## Contato

- Telefone: (48) 3030-4600
- WhatsApp: (48) 99108-6854
- Endereço: R. Bento Gonçalves, 183 - Sala 401 - Centro, Florianópolis - SC

---

Desenvolvido com o Projeto Phoenix.