# Portfólio da Daiane

Portfólio pessoal de uma desenvolvedora full stack com foco em back-end. O site é construído com Next.js 14, React 18, TypeScript e Tailwind CSS, e está organizado como uma página única composta por seções.

## Arquitetura

```text
src/
├── app/
│   ├── layout.tsx       # Layout raiz, fontes, metadados e tema inicial
│   ├── page.tsx         # Composição e ordem das seções da página
│   └── globals.css      # Tokens de tema, estilos globais e utilitários
├── components/
│   ├── decor/           # Elementos decorativos reutilizáveis
│   ├── Navbar.tsx       # Navegação e alternância de tema
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Journey.tsx
│   ├── Technologies.tsx
│   ├── Projects.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── icons.tsx        # Ícones SVG do projeto
├── data/
│   ├── projects.ts      # Conteúdo e categorias dos projetos
│   ├── certificates.ts  # Conteúdo e categorias dos certificados
│   └── technologies.ts  # Tecnologias, categorias e ícones
└── hooks/
    └── useInView.ts     # Animações acionadas pela entrada na viewport

public/
├── images/              # Imagens gerais do portfólio
└── projects/            # Imagens e capas dos projetos
```

`src/app/page.tsx` monta as seções na ordem em que aparecem no site. Os componentes de projetos, certificados e tecnologias consomem os dados tipados de `src/data/`, mantendo conteúdo e apresentação separados. O hook `useInView` observa a entrada de elementos na tela para acionar animações.

O tema claro/escuro usa os tokens CSS de `globals.css`. A preferência escolhida é armazenada no navegador; sem uma escolha salva, o tema segue a configuração do sistema. As fontes são carregadas em `layout.tsx` com `next/font`.

## Desenvolvimento

Execute os comandos dentro de `my-portfolio/`:

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

O servidor de desenvolvimento fica disponível em [http://localhost:3000](http://localhost:3000).

## Deploy

O projeto publicado [https://dev-portfolio-murex-phi.vercel.app/](https://dev-portfolio-murex-phi.vercel.app/)