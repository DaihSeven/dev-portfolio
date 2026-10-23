# Histórico de respostas do Claude

Registro de cada resposta dada durante as sessões de trabalho neste projeto (a mais recente fica no final).

---

## 2026-10-14 — Análise da arquitetura do projeto

**Pedido:** analisar a arquitetura sem alterar arquivos: estrutura de pastas, papel de cada arquivo, como os projetos e certificados são carregados e exibidos, e quais bibliotecas de UI, animação e ícones são usadas.

### 1. Estrutura de pastas e arquivos

```
dev-portfolio/                  (raiz do repositório git)
├── LICENSE
├── README.md
└── my-portfolio/               (app Next.js)
    ├── .eslintrc.json
    ├── .gitignore
    ├── eslint.config.mjs
    ├── next.config.js
    ├── package.json / package-lock.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── README.md
    ├── public/
    │   ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg
    │   └── projects/           (16 prints .png dos projetos)
    └── src/
        ├── app/
        │   ├── favicon.ico
        │   ├── globals.css
        │   ├── layout.tsx
        │   └── page.tsx
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── About.tsx
        │   ├── Projects.tsx
        │   ├── Certificates.tsx
        │   ├── Contact.tsx
        │   └── Footer.tsx
        └── data/
            ├── projects.ts
            └── certificates.ts
```

### 2. O que cada arquivo importante faz

**Páginas (App Router)**
- `src/app/layout.tsx`: layout raiz; carrega a fonte Inter (`next/font/google`), define `lang="pt-BR"` e os metadados (título e descrição) e importa o `globals.css`.
- `src/app/page.tsx`: única página (one-page); empilha as seções Navbar → Hero → About → Projects → Certificates → Contact → Footer.
- `src/app/globals.css`: diretivas do Tailwind, `scroll-behavior: smooth` e as cores base do `body`.

**Componentes**
- `Navbar.tsx` (client): menu fixo que muda de estilo depois de 50px de scroll, com links âncora (`#inicio`, `#sobre`, `#projetos`, `#certificados`, `#contato`) e menu hambúrguer no mobile.
- `Hero.tsx` (client): seção de abertura animada, com linhas deslizando, 20 partículas flutuantes, um brilho que segue o mouse, botões de CTA e links sociais.
- `About.tsx`: texto "Sobre mim" e uma grade de tecnologias montada a partir de um array local (nome, emoji e cor).
- `Projects.tsx` (client): carrossel de projetos com busca, filtro por categoria, navegação anterior/próximo, indicadores em pontos, imagem com spinner de carregamento e fallback de erro.
- `Certificates.tsx` (client): grade de certificados com busca, filtro por categoria e contadores por categoria no rodapé da seção.
- `Contact.tsx`: cards de contato (e-mail, LinkedIn, GitHub e telefone).
- `Footer.tsx`: rodapé simples com o ícone de coração.

**Dados**
- `src/data/projects.ts`: interface `Project` e um array estático com 15 projetos (7 Frontend, 5 Backend, 2 DevOps e 1 Full Stack; nenhum Mobile).
- `src/data/certificates.ts`: interface `Certificate` e um array estático com 23 itens (9 Certificação, 10 Curso e 4 Formação).
- Os dois arquivos têm o comentário "Futuramente num neon PostgreSQL", ou seja, há planos de migrar os dados para um banco.

**Configurações**
- `package.json`: Next 14, React 18, TypeScript e Tailwind 3, com os scripts `dev`, `build`, `start` e `lint`.
- `next.config.js`: só liga o `reactStrictMode`.
- `tailwind.config.js`: paletas personalizadas `butter` e `rose`, além das animações customizadas (`slide-*`, `float`, `fade-in`, `fade-in-up`, `spin-slow`, `spin-slower`, `shine` e `scroll`).
- `postcss.config.js`: Tailwind + Autoprefixer.
- `tsconfig.json`: cria o alias `@/*` → `./src/*`.
- `.eslintrc.json` e `eslint.config.mjs`: duas configurações de ESLint convivendo (formato legado e flat config).
- `public/projects/*.png`: imagens que o campo `image` dos projetos referencia.

### 3. Como projetos e certificados são carregados e exibidos

- **Origem dos dados:** arrays TypeScript estáticos em `src/data/`. Não há API, banco ou fetch; os dados entram no bundle no momento do build.
- **Importação:** `Projects.tsx` faz `import { projects } from '@/data/projects'` e `Certificates.tsx` faz `import { certificates } from '@/data/certificates'`.
- **Filtragem (no cliente, com `useState`):**
  - Projetos: a busca olha título, descrição e tecnologias, e há filtro de categoria (`all`, Frontend, Backend, Full Stack, Mobile, DevOps).
  - Certificados: a busca olha título, instituição e descrição, e há filtro de categoria (`all`, Certificação, Formação, Curso).
- **Exibição dos projetos:** mostra **um projeto por vez** (carrossel). O índice `currentProject` aponta para um item de `filteredProjects`. A imagem usa `next/image` (`fill`, `priority`, e uma `key` única para forçar a recriação). Também exibe o selo "featured", as tecnologias e os botões GitHub / Demo / Link, nesta ordem: `demoUrl` tem prioridade e `link` só aparece quando não existe `demoUrl`.
- **Exibição dos certificados:** lista todos os filtrados em cards, com ícone emoji, ícone e cor por categoria (`getCategoryIcon` e `getCategoryColor`) e totais por categoria.
- **Pontos de atenção observados (sem alteração feita):**
  - No projeto id 0, `github: "Privado do cliente"` é usado como `href`, o que gera um link quebrado.
  - Ao digitar na busca de projetos, o índice `currentProject` não volta para 0. Hoje isso é compensado pelo fallback `|| filteredProjects[0]`.
  - Existem duas configurações de ESLint. O `eslint.config.mjs` (flat config) usa `eslint/config`, que é do ESLint 9, mas o projeto instala ESLint 8.
  - O `README.md` do app ainda é o padrão do `create-next-app`.

### 4. Bibliotecas de UI, animação e ícones

- **UI/estilo:** Tailwind CSS 3 (com PostCSS e Autoprefixer). Não há biblioteca de componentes (como shadcn ou MUI); todos os componentes são feitos à mão.
- **Fonte:** Inter, via `next/font/google`.
- **Imagens:** `next/image`.
- **Animação:** nenhuma biblioteca (não há Framer Motion, por exemplo). Tudo é feito com keyframes e animações do Tailwind em `tailwind.config.js`, classes `transition`/`hover:` e `animate-spin`/`animate-ping`, além de estado React para o efeito que segue o mouse no Hero.
- **Ícones:** `lucide-react` (Menu, X, Search, Github, Linkedin, Mail, Phone, Award, GraduationCap, BookOpen, Sparkles, Calendar, ExternalLink, Chevron*, ArrowRight e Heart), além de **emojis** nos dados (tecnologias do About e ícones dos certificados).

---

## 2026-10-14 — Ajustes em `src/components/Projects.tsx`

**Pedido:** (1) card em duas colunas no desktop, com a imagem 16:9 em `object-cover` à esquerda e o conteúdo à direita, empilhando no mobile; (2) só mostrar o botão GitHub quando o valor for uma URL válida; (3) voltar `currentProject` para 0 ao mudar a busca ou o filtro. Sem mexer nas cores nem no carrossel.

**O que foi feito:**
1. **Layout:** o card virou `grid grid-cols-1 lg:grid-cols-2 lg:items-center`. A imagem trocou a altura fixa `h-96` por `w-full aspect-video` e continua com `object-cover`. O `sizes` do `next/image` foi ajustado para `(max-width: 1024px) 100vw, 640px`. Ajustes pequenos de espaçamento: o título sobre a imagem passou a `text-2xl md:text-3xl` e o padding do conteúdo a `p-6 md:p-8`. No mobile (abaixo de `lg`), a imagem fica em cima e o conteúdo embaixo.
2. **GitHub:** criei o helper `isValidUrl`, que usa `new URL()` e aceita só `http:` e `https:`. O botão GitHub agora só aparece quando `isValidUrl(displayedProject.github)` é verdadeiro, então o projeto "SkyHawk" (`"Privado do cliente"`) fica sem o botão.
3. **Reset do índice:** já estava implementado. O `onChange` da busca e o `handleCategoryChange` já chamavam `setCurrentProject(0)`, então não precisei mudar nada.

Nenhuma cor nem lógica do carrossel foi alterada.

**Verificação:** `tsc --noEmit` e `next build` passaram sem erros. O layout não foi conferido visualmente no navegador.

---

## 2026-10-14 — Tecnologias em `src/data/technologies.ts` + refatoração do `About.tsx`

**Pedido:** levar as tecnologias de `About.tsx` para `src/data/technologies.ts`, agrupadas em Backend, Frontend, Dados e Infra/Cloud, com `name`, `category` e `icon` (react-icons, de preferência Simple Icons). Mostrar cada categoria como um bloco compacto, com cards pequenos de ícone + nome, sem emojis, mantendo as cores do tema e sem aumentar a altura da seção mais que o necessário.

**O que foi feito:**
- `npm install react-icons` (versão `^5.7.0` adicionada em `package.json`).
- **`src/data/technologies.ts`** (novo): tipo `TechnologyCategory`, interface `Technology { name, category, icon: IconType }`, a lista `technologyCategories` (que define a ordem dos blocos) e o array `technologies` com os 27 itens.
  - **Backend (8):** Java, Spring Boot, Node.js, Express, Python, JWT, bcrypt, Swagger
  - **Frontend (7):** React, Next.js, TypeScript, Tailwind, HTML5, CSS3, Framer Motion
  - **Dados (3):** PostgreSQL, MongoDB, Prisma
  - **Infra/Cloud (9):** AWS, Google Cloud, Docker, Linux, Git, GitHub, Prometheus, Grafana, Google Workspace
- **Ícones:** Simple Icons (`react-icons/si`) sempre que existe. As exceções vieram do Font Awesome: `FaJava` (Java não existe no Simple Icons), `FaAws` (a AWS foi removida do Simple Icons) e `FaLock` (para o bcrypt). Usei `SiCss` para CSS3, porque `SiCss3` não existe na v5. Também usei `SiFramer` para Framer Motion e `SiGoogle` para Google Workspace, porque não há ícone específico para eles.
- **`About.tsx`:** removi o array local com emojis e importei os dados de `@/data/technologies`. A seção "Tecnologias" agora tem uma grade de blocos (`grid-cols-1 md:grid-cols-2`). Cada bloco é branco, com borda `rose-100`, título da categoria em `rose-600` e uma grade interna `grid-cols-2 sm:grid-cols-3` de cards pequenos (`bg-rose-50`, ícone `rose-500` de 18px, nome `text-sm`). Os cards antigos (`p-6`, emoji `text-4xl`, 4 colunas) eram bem mais altos.
- Os emojis do restante do About (hobbies, voluntariado etc.) continuam, porque o pedido era sobre a parte de tecnologias.

**Verificação:** `tsc --noEmit` e `next build` passaram. O resultado não foi conferido visualmente no navegador.

---

## 2026-10-14 — Correção do truncamento dos nomes em Tecnologias (`About.tsx`)

**Pedido:** remover as classes que cortam texto; trocar a grade interna por `flex flex-wrap gap-2`, com chips de ícone `w-4 h-4` + nome, `px-3 py-2` e `leading-tight`; container `max-w-5xl` com 2 colunas no md/lg, empilhando no mobile; manter as cores e não mexer no resto da página. Depois, rodar `npm run dev` e verificar se algum nome continua cortado.

**O que foi feito:**
- Removi o `truncate` (e o `title`) do nome. Não havia `overflow-hidden`, `text-ellipsis` nem `whitespace-nowrap` nessa seção.
- A grade interna `grid grid-cols-2 sm:grid-cols-3` virou `flex flex-wrap gap-2`. Os chips mantêm `px-3 py-2`, o ícone passou a `w-4 h-4` (antes era `size={18}`) e o nome ganhou `leading-tight`, podendo quebrar linha.
- **Container:** para não alargar o texto e os cards do "Sobre Mim" (o "resto da página"), fechei o `max-w-4xl` antes de Tecnologias e coloquei o bloco Tecnologias num container próprio, `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12`. As categorias usam `grid-cols-1 md:grid-cols-2`, ou seja, ficam lado a lado no md/lg e empilhadas no mobile.
- Nenhuma cor foi alterada.

**Verificação:**
- `tsc --noEmit` passou.
- `npm run dev` deu `EADDRINUSE` porque a porta 3000 já estava ocupada por um `next dev` em execução. O processo não foi encerrado: esse servidor já tinha recarregado o código novo e foi usado para os testes.
- Com o Chromium headless (Playwright, instalado só no scratchpad e fora do projeto), medi os 27 chips em 360px, 768px e 1280px: **nenhum nome cortado** e nenhum quebrou linha. Os prints de 360px e 1280px confirmaram isso visualmente.
- Os `whitespace-nowrap` que ainda existem na página são dos selos de categoria em `Certificates.tsx`, fora do escopo.

---

## 2026-10-14 — Tecnologias em um único card, ordenadas (`About.tsx`)

**Pedido:** juntar as 4 categorias num único card, sem títulos de categoria; ordem Backend → Infra/Cloud → Frontend → Dados, usando a ordem do array de `technologies.ts`; chips em `flex flex-wrap gap-2`, mantendo o tamanho (ícone `w-4 h-4`, `px-3 py-2`, `leading-tight`); cores e resto da página sem alteração; rodar `npm run dev` e conferir a ordem e o layout.

**O que foi feito:**
- No topo do `About.tsx`: `displayOrder: TechnologyCategory[] = ['Backend', 'Infra/Cloud', 'Frontend', 'Dados']` e `orderedTechnologies = displayOrder.flatMap(c => technologies.filter(t => t.category === c))`. A ordem dentro de cada categoria segue o array de `src/data/technologies.ts`.
- A grade de 4 cards com `<h4>` virou **um único card** (`bg-white rounded-xl shadow-md p-4 border border-rose-100`) com `flex flex-wrap gap-2` e os chips no mesmo estilo de antes.
- O import de `technologyCategories` saiu do `About.tsx`. O export continua em `technologies.ts`, sem alteração.
- O container `max-w-5xl` e o título "Tecnologias" continuam. As cores e o resto da página não mudaram.

**Verificação:**
- `tsc --noEmit` passou.
- `npm run dev`: o `next dev` do usuário continuava rodando na porta 3000 (com hot reload), então os testes foram feitos nele, sem abrir um segundo servidor.
- Playwright (Chromium headless) em 360px, 768px e 1280px: 1 card, 0 títulos de categoria, 27 chips, **ordem idêntica à esperada**, nenhum nome cortado e todos os ícones com 16×16px. Os prints de 360px e 1280px confirmam o layout.
- **Achado fora do escopo (não corrigido):** em 360px a página tem rolagem horizontal (`scrollWidth` 413px), causada pelas linhas animadas e pelos anéis do **Hero** (`#inicio`) e pelos cards de **Certificados** (`#certificados`). Nada da seção Sobre/Tecnologias ultrapassa a largura da tela.

---

## 2026-10-14 — Hook `useInView` + animação de entrada no About

**Pedido:** criar `src/hooks/useInView.ts` com IntersectionObserver (dispara uma vez, ao entrar na tela) e usá-lo no `About.tsx` para animar a coluna de texto e a foto subindo com fade-in, e os hobbies entrando em sequência com atraso crescente. Respeitar `prefers-reduced-motion` e não adicionar bibliotecas de animação.

**Observação:** o About **não tem foto**. A linha de cima tem a coluna de texto e, ao lado, o card "Meus Hobbies". Por isso o fade-in subindo foi aplicado às duas colunas, e os hobbies entram em sequência dentro do card. Nenhuma foto foi adicionada.

**O que foi feito:**
- **`src/hooks/useInView.ts`** (novo): `useInView<T>(options = { threshold: 0.2 })` retorna `{ ref, inView }`. Quando o elemento entra na tela, faz `setInView(true)` e chama `observer.disconnect()`, ou seja, dispara uma vez só. Se o navegador não tiver IntersectionObserver, o conteúdo aparece direto.
- **`About.tsx`:**
  - Ganhou `'use client'`, porque agora usa hook.
  - O `ref` fica na linha texto + hobbies, e um único observer controla tudo.
  - As funções `reveal()` (700ms, sobe 24px) e `revealItem()` (500ms, sobe 16px) usam só classes Tailwind `motion-safe:*`: opacidade 0 e translate antes de entrar na tela, e opacidade 100 e translate 0 depois.
  - Atrasos: texto 0ms, card 150ms, hobbies 400 / 520 / 640 / 760 / 880ms (+120ms cada).
  - Os 5 hobbies viraram um array `hobbies` (emoji, gradiente, texto) renderizado com `.map`, para o atraso sair do índice. O visual continua idêntico.
- **`prefers-reduced-motion`:** com `reduce`, as classes `motion-safe:` não se aplicam. O conteúdo já nasce visível, sem transição nem deslocamento.
- Nenhuma biblioteca nova: só IntersectionObserver e Tailwind.

**Verificação:**
- `tsc --noEmit` e `next lint` nos dois arquivos passaram sem erros.
- Playwright (Chromium headless, 1280px) no `next dev` que já estava rodando:
  - **Sem redução de movimento:** antes de rolar, tudo com opacidade 0. 150ms depois de entrar na tela, o texto estava em 0.29 e o card e os hobbies ainda em 0 (o atraso funcionou). 2s depois, tudo em 1, com transform zerado. Delays medidos: 0.15s e 0.4s, 0.52s, 0.64s, 0.76s, 0.88s.
  - **Com `reducedMotion: reduce`:** tudo com opacidade 1 desde o início e duração de transição 0s.
- O print final mostra o layout igual ao de antes.

---

## 2026-10-14 — Decorações SVG (`src/components/decor/`) + troca de emojis

**Pedido:** criar 6 decorações SVG reutilizáveis (`className` opcional, `stroke="currentColor"`, sem bibliotecas novas) e aplicá-las no Hero (em volta da foto), sob os títulos de seção e ao lado de subtítulos; trocar os emojis dos hobbies e dos certificados por ícones Lucide; respeitar `prefers-reduced-motion`; rodar `npm run dev` e listar os arquivos alterados.

**Componentes criados (`src/components/decor/`):**
- `SquiggleUnderline.tsx`: traço ondulado (viewBox 120×12, traço de 3).
- `CurlArrow.tsx`: seta curvada com laço e ponta, estilo feito à mão.
- `HandNote.tsx`: recebe `text` e renderiza em **Caveat** (`next/font/google`, peso 600), levemente inclinado, com um `CurlArrow` pequeno.
- `HeartOutline.tsx`: coração em contorno fino (traço de 1.25).
- `Sparkle.tsx`: asterisco de 6 raios finos a cada 60°.
- `ArcFrame.tsx`: arco aberto embaixo, mais um arco menor, com `vector-effect: non-scaling-stroke` para continuar fino em qualquer tamanho.
- Todos usam `fill="none"`, `stroke="currentColor"` e `aria-hidden`. A cor vem de `text-rose-500` ou `text-butter-400` (paletas do `tailwind.config.js`).

**Aplicação:**
1. **Hero:** em volta da foto atual (`avatar_games.png`, sem mudança), entraram `ArcFrame` (rose-500, `-inset-3 sm:-inset-6`), `HeartOutline` no canto superior direito (rose-500), dois `Sparkle` (butter-400; um em cima, outro embaixo à direita) e `HandNote "sempre criando"` acima da foto (butter-400). Todos são `absolute` e `pointer-events-none`. Nenhuma cor de fundo, texto ou botão foi alterada.
2. **Títulos** (About, Projects, Certificates, Contact): a barrinha de gradiente `w-24 h-1` abaixo do `h2` foi **substituída** por `<SquiggleUnderline className="block w-28 h-3 mx-auto mb-12 text-rose-500" />`, para não ficarem dois sublinhados.
3. **Subtítulos:** `CurlArrow` à esquerda da frase "Estou sempre aberta a novas oportunidades…" no **Contact**, só a partir do `md`. Testei também no `h3` do About, mas a seta caía sozinha numa linha e não se tratava de uma frase de apoio, então removi. Projects e Certificates não têm frase de apoio.
4. **Emojis:**
   - Hobbies: o campo `emoji` virou `icon` (Trophy, Tv, BookOpen, Cake, Sprout), renderizado em 18px branco dentro dos mesmos círculos com gradiente.
   - Certificados: removi o campo `icon` da interface `Certificate` e dos 23 itens em `src/data/certificates.ts`. Em `Certificates.tsx`, `getCategoryIcon(category, size = 20)` ganhou o parâmetro `size`, e o ícone grande do card usa `getCategoryIcon(cert.category, 44)`: Award, GraduationCap ou BookOpen.
   - Ficaram fora do pedido: o 🌟 de "Meus Hobbies", o 🔍 do estado vazio dos certificados e os emojis do voluntariado/freelancer.
5. **Reduced motion:** nenhuma animação de desenho foi criada (os traços são estáticos), então não há nada novo a desligar. As animações que já existiam no Hero não foram tocadas.

**Verificação:**
- `tsc --noEmit` passou. `next lint` só mostra o aviso que já existia sobre `<img>` no Hero.
- O `next dev` anterior tinha sido encerrado, então subi o `npm run dev` (porta 3000, compilou sem erros).
- Playwright em 360px e 1280px: a fonte Caveat foi aplicada, os 4 squiggles estão logo depois dos `h2`, não há emoji nos hobbies, os 23 cards de certificado têm SVG e nenhum emoji, e o console está sem erros. Os prints do Hero, do About, do Contact e do card de certificado confirmam o layout.
- A rolagem horizontal no mobile, que já existia, continua (`scrollWidth` 397px; antes 413px) e não piorou.

**Arquivos alterados nesta etapa:**
- Novos: `src/components/decor/{ArcFrame,CurlArrow,HandNote,HeartOutline,Sparkle,SquiggleUnderline}.tsx`
- Modificados: `src/components/Hero.tsx`, `About.tsx`, `Projects.tsx`, `Certificates.tsx`, `Contact.tsx`, `src/data/certificates.ts`

---

## 2026-10-14 — Emojis de Voluntariado e Freelancer → ícones Lucide

**Pedido:** trocar os emojis dos blocos Voluntariado/Escola da Nuvem (por `HeartHandshake`, ou `Users` como alternativa) e Freelancer/Dev FullStack/HypeCode/SkyHawk (por `Briefcase`), sem mudar texto nem cores; se algum emoji estiver em `src/data/`, remover o campo e renderizar o ícone no componente; listar os arquivos alterados e rodar `npm run dev`.

**Busca em `src/`:**
- A versão instalada do `lucide-react` é a **0.563.0** (não a 0.383.0). `HeartHandshake` existe nela, então não precisei do `Users`.
- Os emojis estavam **só em `About.tsx`**, em 4 lugares: 💙 Voluntariado na Escola da Nuvem, 🧑‍💻 Freelancer de Desenvolvimento Web, 👾 HypeCode SoftwareHouse e 🎦 SkyHawk Drones.
- Não há emoji desses blocos em `src/data/`. "Escola da Nuvem" e "SkyHawk" aparecem em `certificates.ts` e `projects.ts`, mas sem emoji. O selo "Freelancer / Dev FullStack" do Hero também não tem emoji.

**O que foi feito (`About.tsx`):**
- `HeartHandshake` e `Briefcase` entraram no import do `lucide-react` que já existia.
- 💙 virou `<HeartHandshake size={18} />`, 🧑‍💻 virou `<Briefcase size={18} />`, e 👾 e 🎦 viraram `<Briefcase size={16} />`. Todos com `inline-block align-text-bottom mr-1`, no mesmo lugar onde ficava o emoji.
- O ícone herda a cor do texto (`currentColor`): rose-600, violet-600 e gray-700. Nenhuma classe de cor nem texto mudou.
- Ficaram fora do pedido os emojis ☁️ (Google Cloud Arcade), 🌟 (Meus Hobbies) e 🚀 (Aberta a oportunidades).

**Verificação:**
- `tsc --noEmit` passou.
- `npm run dev`: o servidor que eu subi na etapa anterior continua na porta 3000 e recompilou sem erros. Há também um segundo `next dev` na porta 3001, iniciado depois (provavelmente pelo usuário), que não foi tocado.
- Playwright em 1280px: HTTP 200, sem erros no console. Os 4 textos foram encontrados com o SVG certo (`lucide-heart-handshake` e 3× `lucide-briefcase`), sem emoji, e a cor do ícone é igual à do texto. O print confirma o alinhamento.

**Arquivos alterados nesta etapa:** `src/components/About.tsx`.

---

## 2026-10-14 — Últimos emojis do About → Lucide (Sparkles, Cloud, Rocket)

**Pedido:** em `About.tsx`, trocar 🌟 (Meus Hobbies) por `Sparkles`, ☁️ (Facilitadora Google Cloud Arcade) por `Cloud` e 🚀 (Aberta a oportunidades) por `Rocket`, todos com size 18, `inline-block align-text-bottom mr-1` e `aria-hidden`; remover o `Briefcase` dos parágrafos de HypeCode e SkyHawk, mantendo só o do título "Freelancer de Desenvolvimento Web"; adicionar os ícones ao import existente; não mudar cores, textos, ordem nem o resto; confirmar que não sobrou emoji e rodar `npm run dev`.

**O que foi feito (`src/components/About.tsx`):**
- Import: `{ Trophy, Tv, BookOpen, Cake, Sprout, HeartHandshake, Briefcase, Sparkles, Cloud, Rocket } from 'lucide-react'`. Nenhum pacote novo.
- 🌟 virou `<Sparkles size={18} … />`, ☁️ virou `<Cloud size={18} … />` (mesmo estilo do Briefcase do título) e 🚀 virou `<Rocket size={18} … />`.
- Os `<Briefcase size={16} … />` saíram dos parágrafos de HypeCode e SkyHawk. O do título continua.
- Cores, textos, ordem dos blocos e o resto do arquivo não mudaram. Os ícones herdam a cor do texto.

**Verificação:**
- **Nenhum emoji restante no arquivo** (busca por `\p{Extended_Pictographic}` e pelas faixas Unicode de emoji, incluindo o seletor U+FE0F e o ZWJ U+200D: 0 ocorrências).
- `tsc --noEmit` passou.
- `npm run dev`: o servidor da porta 3000 recompilou sem erros. No navegador (Playwright), as portas 3000 e 3001 responderam HTTP 200, sem erros no console e sem emoji na seção Sobre. Ícones: Meus Hobbies → sparkles, Google Cloud → cloud, Freelancer → briefcase, HypeCode/SkyHawk → sem ícone, Aberta a oportunidades → rocket.
- O log mostrou um aviso de cache do webpack (`ENOENT … 0.pack.gz_`), efeito de dois `next dev` (3000 e 3001) compartilharem a mesma pasta `.next`. Não afeta o resultado.

**Arquivos alterados nesta etapa:** `src/components/About.tsx`.

---

## 2026-10-22 — Redesign, etapa 1: fontes, tokens de tema, Navbar e Footer

**Pedido:** portar por etapas o design de `design/portfolio-daiane.html` (Next.js 14, TypeScript, Tailwind 3). Etapa 1: (1) fontes Cormorant Garamond, Karla e Caveat via `next/font/google`, como variáveis CSS; (2) tokens de cor do `:root` (claro), `:root[data-theme="dark"]` e `@media (prefers-color-scheme: dark)`, registrados no Tailwind com `var(--…)`; (3) nova Navbar (logo com tulipa, 6 links e botão "Noite no Bósforo" / "Manhã no jardim" que grava `data-theme` no `<html>` e respeita o sistema); (4) novo Footer (gatinho SVG, "Vai, Corinthians!", nome completo, ano); (5) ícones Lucide ou SVG inline, sem emojis. Sem mexer em Hero, About, Projects, Certificates e Contact. Rodar `npm run lint` e `npm run build`.

**Leitura do design:** o arquivo inteiro foi lido (CSS, HTML, símbolos SVG e script). Só o conteúdo base64 das 3 fotos JPEG embutidas foi omitido.

**O que foi feito:**
- **`src/app/layout.tsx`:**
  - Fontes: `Cormorant_Garamond` (400/500/600, normal + itálico, `--font-cormorant`), `Karla` (400–700, `--font-karla`) e `Caveat` (500/600, `--font-caveat`), todas com `display: 'swap'` e com as classes de variável no `<html>`.
  - A Inter continua no `<body>` até as seções antigas serem portadas.
  - Um script inline no `<head>` lê `localStorage.theme` e aplica `data-theme` antes da primeira pintura, para não piscar o tema errado. `suppressHydrationWarning` no `<html>`.
- **`src/app/globals.css`:**
  - Tokens `--ground`, `--surface`, `--surface-2`, `--ink`, `--body`, `--muted`, `--tulip`, `--rose`, `--gold`, `--leaf`, `--line`, `--line-soft`, `--shadow`, `--tile` e `--arc`, mais `color-scheme`, copiados do design.
  - O escuro vale em `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` e em `:root[data-theme="dark"]`.
  - `scroll-padding-top` para compensar a barra.
  - O `body` **manteve** `#fff` / `#000` para não alterar as seções que ainda não foram portadas.
- **`tailwind.config.js`:**
  - Cores `ground`, `surface` (+ `surface-2`), `ink`, `body`, `muted`, `tulip`, `gold`, `leaf`, `line` (+ `line-soft`).
  - **`rose` virou `DEFAULT: 'var(--rose)'` dentro da escala existente**, então `text-rose` / `border-rose` usam o token e `rose-50…600` continua funcionando nas seções antigas.
  - `fontFamily`: `font-display` (Cormorant), `font-karla` e `font-hand` (Caveat). Também `shadow-soft` e `bg-tile`.
- **`src/components/icons.tsx`** (novo): `TulipIcon`, `CatIcon`, `SunIcon` e `MoonIcon`, com os mesmos paths SVG do design, `currentColor` e `aria-hidden`.
- **`src/components/Navbar.tsx`** (reescrito):
  - Barra `sticky`, 72px, fundo `color-mix(var(--ground) 88%)` com `backdrop-blur`, borda `line-soft` e largura `min(1120px, 100% - 2.5rem)`.
  - Logo "Daiane" em Cormorant com a tulipa (`text-tulip`). Links Sobre, Jornada, Tecnologias, Projetos, Certificados e Contato, com hover em ink e borda rose.
  - Botão de tema com lua ("Noite no Bósforo") ou sol ("Manhã no jardim") e `aria-pressed`. Ele grava `data-theme` + `localStorage`. Sem escolha salva, segue o sistema e escuta a mudança de `prefers-color-scheme`.
  - Foco visível dourado. Como no design, os links somem até 900px (sem menu hambúrguer).
- **`src/components/Footer.tsx`** (reescrito): borda `line-soft`, fundo `ground`, gatinho de 70px (`text-muted`, opacidade 75%), "Vai, Corinthians!" em Caveat (`text-ink`), "Daiane das Graças Barbosa Koslowski · desenvolvedora full stack" e "© {ano atual}".

**Resultado:**
- `npm run lint`: **passou** (exit 0). Só aparece o aviso que já existia de `<img>` no `Hero.tsx`.
- `npm run build`: **passou** (exit 0). Rota `/` estática, 39.9 kB (127 kB First Load).
- Teste com `next start` + Playwright: com o sistema claro e com o escuro, o tema inicial segue o sistema. O clique alterna `data-theme`, o rótulo, o ícone e o `aria-pressed`. A escolha **persiste ao recarregar**. Sem escolha, uma mudança no tema do sistema é seguida na hora. Em 375px o menu fica oculto. As fontes Cormorant e Caveat foram aplicadas e não houve erros no console. Os prints da Navbar e do Footer (claro e escuro) conferem com o design.

**Observações:**
- `#jornada` e `#tecnologias` ainda não existem na página (virão nas próximas etapas), então esses dois links ainda não levam a lugar nenhum.
- No escuro, a barra aparece um pouco acinzentada no topo porque é translúcida sobre o `body` branco antigo. Isso some quando o `body` passar a usar `bg-ground`.
- O `HandNote.tsx` (decoração do Hero) ainda carrega a Caveat por conta própria. Dá para trocar por `font-hand` quando o Hero for portado.
- Fora do que eu alterei, o `git status` mostra mudanças do usuário: `src/app/favicon.ico` e os SVGs de `public/` foram apagados, há novas imagens em `public/`, `src/app/pink-tulip.png` e a pasta `design/`.

**Arquivos alterados nesta etapa:** `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.js`, `src/components/Navbar.tsx`, `src/components/Footer.tsx` e o novo `src/components/icons.tsx`.

---

## 2026-10-22 — Redesign, etapa 2: Hero, flores, ícone da aba, divisão circular, Sobre mim e Jornada

**Pedido:** (1) reescrever o Hero conforme o design (título, subtítulo itálico, texto, botões, sociais, foto `/images/perfil2.jpg` na janela em arco com `next/image`, cards "Mentora AWS" e "3 certificações AWS", gaivota e chá em SVG; remover as animações antigas); (2) flores `lily-flowering-tulips.png` (esquerda, "Tulipas") e `white-carnation-flower.png` (direita, "Cravo branco") nas posições de `.tulip-left` e `.tulip-right`, escondidas abaixo de 480px; (3) confirmar `src/app/icon.png` e remover `favicon.ico`; (4) `.dome` e `.band` como utilitários no `globals.css`; (5) reescrever o "Sobre mim" mantendo o `useInView`; (6) mover Voluntariado, Freelancer e Facilitadora para `src/components/Journey.tsx` (linha do tempo), adicioná-lo após o About e limpar o que sobrou. Rodar `npm run lint` e `npm run build`.

**Verificação das imagens (dimensões reais, lidas com sharp):**
- `perfil2.jpg`: gravada como 2293×1720 com **EXIF orientation 6** (rotação 90°), **exibida como 1720×2293**. Foi passado `width={1720} height={2293}`. O otimizador do Next aplica a rotação, e a imagem servida veio em retrato (340×453).
- `lily-flowering-tulips.png` e `white-carnation-flower.png`: 360×360, com fundo transparente (conteúdo visível de 302×320 e 318×337).
- **O cravo estava em `public/projects/`, não em `public/images/`.** Movi com `git mv` para `public/images/` (não havia referência ao caminho antigo).

**O que foi feito:**
1. **`Hero.tsx`** (reescrito, agora sem `'use client'`):
   - `.dome` com o fundo de estrelas `--tile` e a mesma máscara radial do design.
   - Grade `1.05fr .85fr`, que vira 1 coluna até 900px com a foto em cima.
   - "Olá, eu sou" em Caveat, "Daiane" em Cormorant, subtítulo em itálico tulip, texto com `max-w-[46ch]`, botões "Ver projetos" / "Vamos conversar" e sociais redondos de 42px com os SVGs do design.
   - Janela em arco: `rounded-[170px_170px_10px_10px]`, filete dourado interno e foto `aspect-[3/4] object-cover object-[50%_22%]` com `priority`.
   - Gaivota e copo de chá em SVG. Os dois cards ficam nas posições do design (com ajuste até 900px) e somem abaixo de 480px.
   - Removidos: linhas deslizando, partículas, brilho que seguia o mouse, círculos girando, indicador de scroll e as decorações `ArcFrame`, `HeartOutline`, `Sparkle` e `HandNote`.
   - **Diferença proposital:** no HTML, o `.hero` zera o `padding-bottom` do `.dome` e a curva **corta os ícones sociais** (dá para ver no print de referência). Aqui o `padding-bottom` do `.dome` foi mantido, então a curva fica abaixo dos ícones.
2. **Flores:** `next/image` com 360×360, largura de 120px e altura automática (mantém a proporção). Como os espaços do design têm 92px e as imagens são quadradas com margem transparente, 92px deixava as flores pequenas demais. O deslocamento lateral soma os 28px extras (`left-[-84px]` / `right-[-76px]`, e `-58px` / `-54px` até 900px), para a parte visível ficar igual à do HTML. Rotação de −6° e 5°. Elas vêm antes da moldura no DOM, como no HTML, e ficam atrás dela. Escondidas abaixo de 480px. Sem constantes de "ready" e sem espaços tracejados.
3. **Ícone da aba:** `src/app/icon.png` existe e o `favicon.ico` **já tinha sido removido** no commit da etapa 1 (7dfb9f7). O build gera a rota `/icon.png` e o HTML recebe `<link rel="icon" href="/icon.png" type="image/png" sizes="860x1280">`. **Atenção:** o arquivo é na verdade **WebP** (com extensão .png) e **não é quadrado** (860×1280). Ele é servido como `image/png`. O Chrome exibe, mas outros navegadores podem não exibir, e ícones não quadrados ficam distorcidos ou com faixas. Recomendo exportar como PNG quadrado de verdade (ex.: 512×512). Não alterei o arquivo.
4. **`globals.css`:** em `@layer components`, ficaram `.sec` (padding `clamp(4.5rem,9vw,7rem) 0`), `.dome` (relative, z-1, fundo `--ground`, `border-radius: 0 0 50% 50% / 0 0 var(--arc) var(--arc)`, `padding-bottom: calc(var(--arc) + 1rem)`, `margin-bottom: calc(var(--arc) * -1)`) e `.band` (fundo `--surface-2`, `padding-top: calc(var(--arc) + clamp(3.5rem,7vw,5.5rem))`), na mesma ordem do HTML. Por estarem em `components`, as utilidades do Tailwind conseguem sobrescrevê-los.
5. **`About.tsx`:**
   - Seção `.sec.band`. Cabeçalho "Sobre mim" + tulipa + "Engenharia de Software, 8° período" (como no design; o texto antigo dizia 7°).
   - Dois parágrafos, citação em Cormorant itálico com borda rose e lista de 6 gostos com os SVGs do design: escudo, chá, livro, bolo, raminho e pata (o design acrescenta "Gatos e cachorros, sempre").
   - `useInView` aplicado só na entrada do bloco (fade-in subindo, `motion-safe`).
   - O bloco "Tecnologias" continua no fim da seção, sem mudanças, exceto o título, que passou de `text-gray-800` para `text-ink`, porque ficava invisível no tema escuro sobre o novo fundo.
6. **`Journey.tsx`** (novo): `.sec.dome` com `id="jornada"`, cabeçalho "Jornada" + tulipa + "Onde venho aprendendo e ensinando", e linha do tempo vertical (`border-l`, ponto de 12px com borda rose e o atual preenchido em tulip).
   - A ordem segue **o comentário que está no HTML** ("colocar o voluntariado da escola da nuvem por primeiro, seguido dos freelancers e depois o do google"): Escola da Nuvem (atual) → SkyHawk → HypeCode → Google Cloud Arcade. Os textos e datas são os do design (ex.: SkyHawk "Março a Junho de 2026", HypeCode "Março a Setembro de 2026").
   - Adicionado em `page.tsx` logo após `<About />`.
   - Limpeza no `About.tsx`: saíram os blocos de Voluntariado, Facilitadora e Freelancer, o "Aberta a oportunidades", o array `hobbies`, `revealItem`, os ícones Lucide e o `SquiggleUnderline`.
- **`icons.tsx`:** novos `GullIcon`, `TeaIcon`, `SprigIcon`, `ShieldIcon`, `BookIcon`, `CakeIcon`, `PawIcon`, `GithubIcon`, `LinkedinIcon` e `MailIcon` (paths do design).

**Resultado:**
- `npm run lint`: **passou**, "No ESLint warnings or errors" (o aviso antigo de `<img>` no Hero sumiu).
- `npm run build`: **passou** (exit 0). Rotas `/` (35.9 kB, 123 kB First Load), `/_not-found` e `/icon.png`, todas estáticas.
  - O build foi rodado **numa cópia do projeto no scratchpad**, porque havia um `next dev` do usuário ativo na porta 3000 e o build reescreveria a `.next` que ele usa. O resultado é o mesmo, e o servidor do usuário não foi afetado.
- Teste visual (`next start` da cópia + Playwright em 1280, 768, 470 e 375px, claro e escuro): foto em retrato com `object-position: 50% 22%`, flores visíveis em 768px ou mais e ocultas em 470px ou menos, cards ocultos abaixo de 480px, Jornada na ordem esperada, header colado no topo e nenhum erro no console. Os prints conferem com o design.

**Pendências / observações:**
- `ArcFrame`, `HeartOutline`, `Sparkle` e `HandNote` (em `src/components/decor/`) ficaram sem uso. `CurlArrow` e `SquiggleUnderline` ainda são usados em Projects, Certificates e Contact. Não apaguei nada.
- O link "Tecnologias" da barra ainda não leva a lugar nenhum: o bloco não tem `id="tecnologias"` e continua dentro do About até ser portado.
- Até 900px, o card "Mentora AWS" cobre parte do rosto na foto, porque segue a posição do design (`left: -18px`). Pode valer revisar quando for mexer no mobile.
- No escuro, a barra ainda fica levemente acinzentada sobre o `body` branco antigo (já anotado na etapa 1).
- Em 375px, a rolagem horizontal que já existia continua (vem de Certificates).

**Arquivos alterados nesta etapa:** `src/app/globals.css`, `src/app/page.tsx`, `src/components/Hero.tsx`, `src/components/About.tsx`, `src/components/icons.tsx`, o novo `src/components/Journey.tsx` e `public/images/white-carnation-flower.png` (movido de `public/projects/`).

---

## 2026-10-22 — `src/app/icon.png` convertido para PNG 512×512

**Pedido:** converter `src/app/icon.png` em PNG de verdade, quadrado de 512×512, com fundo transparente e a tulipa centralizada sem cortar nem distorcer (fit contain, margem pequena), usando sharp; substituir o arquivo, rodar `npm run build` e confirmar com sharp o formato e o tamanho.

**Antes de converter:**
- **O sharp não vem com o projeto:** não há `node_modules/sharp`, e o Next 14.2.35 não o traz como dependência. Usei o sharp 0.33.5 já instalado no scratchpad (fora do projeto). Nada foi adicionado ao `package.json`.
- O arquivo original era WebP 860×1280, **sem canal alfa**. Não é uma tulipa sobre fundo liso, e sim **uma foto com fundo desfocado** (rosa/dourado com bokeh): só 9,7% dos pixels têm a cor do canto, e o `trim` não encontra bordas. Por isso, a transparência só pode ficar **ao redor** da foto. O fundo desfocado da própria foto continua: removê-lo exigiria recortar a flor (segmentação), o que o sharp não faz.

**O que foi feito:**
- Cópia do original em `scratchpad/icon/original.webp`.
- `sharp(original).resize({ width: 480, height: 480, fit: 'contain', background: transparente }).extend(16px em cada lado, transparente).png({ compressionLevel: 9 })` gera 512×512. A foto inteira fica com 322×480, centralizada, sem corte nem distorção, com 16px de margem e laterais transparentes.
- O resultado substituiu `src/app/icon.png` (254 KB).

**Verificação:**
- `npm run build`: **passou** (exit 0), com as rotas `/`, `/_not-found` e `/icon.png` estáticas. O build foi rodado numa cópia no scratchpad, porque o `next dev` do usuário continuava ativo na porta 3000. O HTML gerado passou a ter `<link rel="icon" href="/icon.png?…" type="image/png" sizes="512x512">` (antes era `sizes="860x1280"`).
- sharp no arquivo do projeto: `format: 'png'`, `width: 512`, `height: 512`, `hasAlpha: true`, alfa 0 nos 4 cantos e 255 no centro. A assinatura do arquivo é `89504e470d0a1a0a` (PNG real).

**Observações:**
- Em tamanho de favicon (16–32px), a foto vertical ocupa só cerca de 63% da largura e o fundo desfocado compete com a flor. Se ficar pouco legível na aba, a alternativa é recortar um quadrado em volta do botão da tulipa (`fit: 'cover'`), mas isso corta parte da foto, o que o pedido não queria.
- 254 KB é pesado para um favicon. Dá para reduzir com quantização (`png({ palette: true })`) se quiser.

**Arquivos alterados nesta etapa:** `src/app/icon.png`.

---

## 2026-10-23 — Redesign, etapa 3: seção Tecnologias ("O que planto no dia a dia")

**Pedido:** (1) criar `src/components/Technologies.tsx` como seção própria (`.sec.band`, `id="tecnologias"`), com o cabeçalho "O que planto no dia a dia", a tulipa e a nota em Caveat "do back-end à nuvem, da tela ao banco"; (2) o "canteiro": card único com os chips como plaquinhas (haste embaixo) e linha pontilhada na base, na ordem Backend, Infra, Frontend e Dados a partir de `src/data/technologies.ts`, só texto; (3) entrada escalonada com `useInView`, respeitando `prefers-reduced-motion`; (4) tirar o bloco do About e pôr `<Technologies />` depois de `<Journey />`. Rodar `npm run lint` e `npm run build`.

**O que foi feito:**
- **`src/components/Technologies.tsx`** (novo, client):
  - `.sec.band` com `id="tecnologias"`. O cabeçalho segue o padrão das outras seções (h2 Cormorant + `TulipIcon` + nota `font-hand` `text-rose` de 1.35rem).
  - Canteiro: `rounded-[18px] border-line bg-surface shadow-soft` com padding `2.2rem 1.8rem 2.6rem`. A linha pontilhada é um `<span>` absoluto com `repeating-linear-gradient(90deg, var(--line) 0 7px, transparent 7px 14px)`, a 1.5rem da base e 1.6rem das laterais.
  - Plaquinhas: `<li>` com `bg-surface-2 border-line rounded-[7px]`, `px .85rem / py .48rem`, `.92rem`, peso 500, `text-ink`, e hover com borda rose e texto tulip. A haste é um `<span>` de 1×9px em `bg-line`, centralizado embaixo. O espaçamento é `gap .95rem 1rem`.
  - Ordem: `['Backend', 'Infra/Cloud', 'Frontend', 'Dados'].flatMap(...)` sobre o array de dados, só com `name` (sem os ícones `react-icons`).
  - Entrada: `useInView` no canteiro. Antes de entrar: `motion-safe:opacity-0 translate-y-[9px] scale-[.97]`. Depois: transição de 500ms em `opacity`/`transform` com `cubic-bezier(.2,.9,.3,1)` e `transition-delay` de `index × 28ms`, como no HTML.
  - A transição cobre **só opacidade e transform**, como no HTML. Assim o atraso escalonado não deixa o hover lento: a cor muda na hora.
  - Com `prefers-reduced-motion: reduce`, as classes `motion-safe:` não se aplicam e os chips já aparecem visíveis, sem transição.
- **`About.tsx`:** removi o bloco "Tecnologias", o import de `@/data/technologies`, `displayOrder` e `orderedTechnologies`.
- **`page.tsx`:** `<Technologies />` entrou logo após `<Journey />`.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0). `/` com 36.4 kB (124 kB First Load), além de `/_not-found` e `/icon.png`, todas estáticas. Desta vez rodei direto no projeto, porque não havia nenhum `next dev` ativo.
- Teste no navegador (`next start` + Playwright):
  - Ordem das seções: **header → inicio → sobre → jornada → tecnologias → projetos → certificados → contato**.
  - `#tecnologias` com as classes `sec band`, título e nota corretos (Caveat). São 27 plaquinhas, 27 hastes e nenhum SVG nos chips, de Java, Spring Boot, Node.js… até PostgreSQL, MongoDB, Prisma. O About não tem mais Tecnologias.
  - Escalonamento medido por amostragem: o observer dispara ~93ms depois do scroll, os chips começam um a um (1 → 5 → 9 → 12 → 17 → 20 → 24 → 27 em ~730ms) e todos terminam em ~1,1s. Os delays computados vão de 0s, 0.028s até 0.728s.
  - O hover do 4º chip muda a cor em 50ms (sem atraso).
  - Com `reducedMotion: reduce`, os 27 chips ficam visíveis desde o início.
  - Sem erros no console. Os prints em 1280px (claro) e 375px (escuro) conferem com o design.

**Observações:**
- O design também lista **Flask, MySQL e Redis**, que não existem em `src/data/technologies.ts`. Como a fonte pedida é o arquivo de dados, eles não aparecem. Para incluí-los é preciso adicioná-los ao array, e o campo `icon` é obrigatório no tipo.
- O campo `icon` de `technologies.ts` (e com ele o `react-icons`) ficou **sem uso** na interface. Dá para remover o campo e a dependência numa limpeza futura.
- O link "Tecnologias" da barra agora leva à seção.

**Arquivos alterados nesta etapa:** o novo `src/components/Technologies.tsx`, `src/components/About.tsx` e `src/app/page.tsx`.

---

## 2026-10-23 — Tecnologias: logos nos chips + Flask, MySQL e Redis

**Pedido:** correção do pedido anterior: cada plaquinha deve ter o logo da tecnologia (campo `icon` via react-icons) à esquerda do nome, com `w-4 h-4`, `flex-shrink-0`, `aria-hidden` e gap de 0.5rem, e o chip em `flex items-center`. A cor deve ser monocromática (`text-rose`, e `text-tulip` no hover do chip), sem as cores das marcas. Adicionar Flask (Backend, depois de Python) e MySQL e Redis (Dados, depois de PostgreSQL e MongoDB) com `SiFlask`, `SiMysql` e `SiRedis`. Manter a ordem, as hastes, a linha pontilhada e a entrada escalonada. Confirmar que nenhum nome é truncado. Rodar `npm run lint` e `npm run build`.

**O que foi feito:**
- **`src/data/technologies.ts`:** `SiFlask`, `SiMysql` e `SiRedis` **existem** no react-icons 5.7.0 instalado, então não precisei de equivalentes. Flask entrou logo depois de Python. MySQL e Redis entraram depois de MongoDB e antes de Prisma. O total passou de 27 para 30.
- **`src/components/Technologies.tsx`:**
  - O `<li>` ganhou `group flex items-center gap-2` (gap de 0.5rem).
  - Antes do nome entra `<Icon className="h-4 w-4 flex-shrink-0 text-rose group-hover:text-tulip" aria-hidden="true" />`, e o nome foi para um `<span>`.
  - Nada mais mudou: ordem, haste, linha pontilhada, `useInView`, delays de 28ms e `motion-safe`.
  - Não há `truncate`, `overflow-hidden`, `text-ellipsis` nem `whitespace-nowrap`.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0). `/` com 38.7 kB (126 kB First Load), além de `/_not-found` e `/icon.png`, todas estáticas. Rodei numa cópia no scratchpad, porque havia um `next dev` do usuário ativo na porta 3000 (iniciado às 12:53).
- Teste no navegador (`next start` da cópia + Playwright, em 1280px claro, 320px escuro e 1280px com `reducedMotion: reduce`):
  - 30 chips, todos com SVG como primeiro filho, de 16×16px e `aria-hidden="true"`. O chip é `display: flex`, `align-items: center`, com `gap: 8px`.
  - A cor dos ícones é exatamente o token `--rose` (`#dd7c8c` no claro, `#e8909c` no escuro). No hover, texto e ícone ficam em `--tulip` (`#c8453c`).
  - A ordem vai de Java, Spring Boot, Node.js, Express, Python, **Flask**, JWT, bcrypt e Swagger, passa por AWS…, React… e termina em PostgreSQL, MongoDB, **MySQL**, **Redis** e Prisma.
  - 30 hastes e a linha pontilhada presentes.
  - Entrada escalonada: 0/30 visíveis antes do scroll e 30/30 depois. Com `reduce`, 30/30 desde o início.
  - **Truncamento:** nenhum nome cortado e nenhum `white-space: nowrap`, inclusive em 320px. Num teste forçando o canteiro a 110px, "Spring Boot", "Google Cloud", "Google Workspace" e "Framer Motion" **quebram em 2 linhas**, sem reticências.
  - Sem erros no console. Os prints conferem.

**Observações:**
- O `SiMysql` é o logotipo com a palavra "MySQL" escrita, então em 16px fica pouco legível. Se quiser, dá para trocar por `SiMysql` num tamanho maior ou por outro ícone de banco (ex.: `GrMysql` ou `TbBrandMysql`, se existirem na versão instalada).
- No teste de 110px, "Google Workspace" ultrapassa um pouco a borda, porque a palavra "Workspace" sozinha não cabe. Isso só acontece em larguras artificiais: de 320px para cima, tudo cabe.
- Fora desta seção: em 320px, o botão de tema da Navbar quebra em duas linhas ("Manhã no / jardim").
- Com os ícones de volta, o campo `icon` e o `react-icons` voltaram a ser usados (a nota da etapa anterior sobre removê-los não vale mais).

**Arquivos alterados nesta etapa:** `src/data/technologies.ts` e `src/components/Technologies.tsx`.

---

## 2026-10-23 — Redesign, etapa 4: Projetos (dados, lista alternada, filtros, capas)

**Pedido:** seguindo `design/portfolio-daiane.html` e `design/dados-portfolio.md` (seção PROJETOS e "Regras das capas em SVG"): (1) atualizar `src/data/projects.ts` com todos os projetos do arquivo, com as categorias `frontend`, `backend`, `fullstack`, `devops` e `dados-ia`, sem "mobile", e com os links `github`, `githubBack`, `demoUrl` e `docsUrl`; não apagar os projetos antigos que não estão no arquivo, e listá-los; (2) reescrever `Projects.tsx`: lista vertical alternada, imagem em arco 4:3 com `next/image`, selo "Destaque", busca e filtros com contador, sem setas ou pontos, e "Nada plantado nessa categoria ainda." quando vazio; (3) botões "Ver online", "Documentação", "GitHub" / "GitHub front" + "GitHub back", só com https válido, abrindo em nova aba com `noopener noreferrer`, e "Projeto em equipe" no Food-Rescue; (4) capas: print com Playwright (1200×900, 30s, jpg < 200 KB) com fallback em SVG, e SVGs pelas regras do arquivo; (5) stack real do MLOps mais as próximas etapas. Rodar lint e build.

**1. `src/data/projects.ts`** (reescrito):
- Tipos novos: `ProjectCategory` (`frontend | backend | fullstack | devops | dados-ia`, **sem mobile**) e `ProjectKind` (`pessoal | freelance | equipe`, que aparece na linha "Freelance · Front-end").
- `Project` passou a ter `id: string` (slug do arquivo), `image`, `technologies`, `nextTechnologies?`, `category`, `kind`, `featured?`, `github?`, `githubBack?`, `demoUrl?` e `docsUrl?`. Saíram `link` e `status`, que não eram exibidos.
- Novo `projectCategories` (valor + rótulo), usado nos filtros e nos rótulos.
- **16 projetos do arquivo**, na ordem dele: SkyHawk, Watchtower, Finance Reminder API, Finance Reminder Frontend, AjudaSocial API, Client Social Connect, MLOps, Observabilidade, Food-Rescue, Project Azimuth, Assistente Virtual com IA, Detecção de Anomalias, DockedItems, Landing ADAC, Dev Portfolio e HypeCode.
  - SkyHawk: mantive a imagem atual (`skyhawksite.png`) e o link `skyhawkdrones.com.br` como "Ver online". O "Privado do cliente" não é URL e saiu.
  - Watchtower: `github` (front) + `githubBack` (back) + `demoUrl`.
  - Food-Rescue: `kind: 'equipe'` + `docsUrl`.
  - HypeCode: sem links (projeto de cliente).
  - **MLOps:** stack `Python, scikit-learn, FastAPI, Prometheus, Grafana, Alertmanager, Docker, Docker Compose` e `nextTechnologies: GitHub Actions, Terraform, Bash, Kubernetes (kind), Helm, MLflow`, exibidas como "Próximas etapas: …".
- **5 projetos do site antigo que não estão no arquivo, mantidos** no fim da lista com os dados e imagens de antes (só adaptados ao tipo novo):
  1. **Nexus Dev Portfolio** (frontend, destaque)
  2. **Study Manager API** (backend)
  3. **AWS EC2 Storage Project** (devops)
  4. **BreakFree - Final Project** (frontend, com "Ver online" no GitHub Pages)
  5. **Máquina de Turing** (frontend)
- **Atenção, fusão:** o antigo card **"Watchtower Backend API"** não virou card próprio. O arquivo trata o Watchtower como um projeto só, com "GitHub back", então o repositório do back-end está no botão "GitHub back" do Watchtower. O link da documentação antiga (`watchtower-backend.onrender.com/api-docs/`) não está no arquivo e ficou de fora. Se quiser o card separado de volta, é só pedir.
- **Links do site antigo que não estão no arquivo** (o arquivo é a fonte de verdade, então não foram incluídos): Finance Reminder Frontend (`finance-reminder.netlify.app`), Client Social Connect (`client-social-connect.vercel.app`), Landing ADAC (`test-adac-softwares.vercel.app`) e AjudaSocial (a documentação antiga `ajudasocialapi.onrender.com/api-docs/` foi substituída pelo link do arquivo, `ajudasocial-api-yxbj.onrender.com`).

**2. `src/components/Projects.tsx`** (reescrito):
- `.sec` com `bg-ground` explícito (veja a correção abaixo). Cabeçalho "Projetos" + tulipa + "Todos abertos na mesma página, sem setas", como no design.
- Busca em pílula (com o ícone de lupa do design) por título, descrição e tecnologia, combinada com o filtro.
- Filtros Todos, Front-end, Back-end, Full stack, DevOps e Dados e IA, com `aria-pressed`, ativo em `bg-tulip`, e contadores fixos (totais por categoria).
- Lista vertical: grade `.95fr 1.05fr`, com a imagem alternando de lado pelo índice **dentro da lista filtrada** (no HTML, o `:nth-of-type` conta também os itens escondidos). Até 860px, vira 1 coluna.
- Capa em `aspect-[4/3]` com `rounded-[120px_120px_10px_10px]`, borda `line` e `next/image fill object-cover`. Os SVGs locais são servidos como estão pelo próprio Next (sem `dangerouslyAllowSVG`), sem mexer no `next.config.js`.
- Selo "Destaque", linha "Tipo • Categoria" com o ponto dourado, título em Cormorant, descrição com `max-w-[54ch]` e chips de stack.
- Botões na ordem Ver online → Documentação → GitHub (ou GitHub front + GitHub back), filtrados por `isHttpsUrl`, todos com `target="_blank" rel="noopener noreferrer"`.
- Sem setas, sem pontos de navegação e sem carrossel. Lista vazia mostra "Nada plantado nessa categoria ainda." em Caveat.
- O `SquiggleUnderline` saiu desta seção.

**3. Capas:**
- **Prints (Playwright, 1200×900, timeout de 30s, mozjpeg):**
  - ✅ `public/projects/watchtower.jpg`: 1200×900, 114 KB
  - ✅ `public/projects/dev-portfolio.jpg`: 1200×900, 57 KB (versão anterior do portfólio, como histórico)
  - ❌ **Food-Rescue falhou**: `https://food-rescue-1-16nz.onrender.com/api-docs` respondeu **HTTP 503** (o `curl` anterior também estourou 35s; é o Render dormindo). Ele recebeu a capa SVG de fallback.
- **SVG em `public/projects/covers/`** (13): viewBox 800×600, fundo `#F2EADC`, traço 3 em `#1E3A45`, acentos `#C8453C`/`#DD7C8C`/`#C08318`, um broto com botão de tulipa em cada uma, sem texto e sem logos:
  `finance-reminder-api` (calendário, sino e moedas), `finance-reminder-frontend` (painel com barras e lista), `ajudasocial-api` (casa com coração e mãos), `client-social-connect` (celular e navegador ligados à casinha), `mlops-anomalias` (ciclo com modelo, medidor e sino), `observabilidade` (medidor, gráfico de linha e sino), `food-rescue` (cesta com folha e frutas; fallback), `project-azimuth` (bússola com pontos de dados), `assistente-virtual-ia` (balões com faíscas), `deteccao-anomalias` (série temporal com ponto em destaque), `dockeditems` (contêiner com caixas), `landing-adac` (wireframes de desktop e celular) e `hypecode-automacoes` (engrenagens ligadas a balões).
- O campo `image` de cada projeto aponta para o arquivo criado.

**Correção feita durante o teste:** no tema escuro, o texto dos Projetos ficava **quase invisível**. A seção não tinha fundo próprio (no design ela usa o do `body`) e aparecia sobre o `body` branco antigo, com o texto claro do tema escuro. Com `bg-ground`, o contraste ficou em 14,3:1 (título) e 9,0:1 (descrição) no escuro, e 11,2:1 e 7,4:1 no claro.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0). `/` com 38.4 kB (126 kB First Load), além de `/_not-found` e `/icon.png`, todas estáticas. Rodei direto no projeto, porque não havia `next dev` ativo.
- Teste no navegador (`next start` + Playwright):
  - Contadores: Todos (21), Front-end (8), Back-end (5), Full stack (2), DevOps (2), Dados e IA (4). Cada filtro mostra os projetos certos.
  - Busca: "fastapi" encontra o MLOps, "Swagger" encontra Watchtower, AjudaSocial e Food-Rescue, e "desaparecidas" encontra o Watchtower. Um termo inexistente mostra a mensagem de vazio.
  - **21/21 imagens carregadas**, todas com proporção 4:3. As 13 capas SVG são servidas sem otimizador.
  - Lados alternando (esq, dir, esq, dir). 0 setas ou pontos. Todos os links são https, com `_blank` e `noopener noreferrer`.
  - Sem erros no console nem respostas HTTP ≥ 400.

**Observações:**
- Imagens antigas em `public/projects/` que **ficaram sem uso** (não apaguei): `AjudaSocial-API.png`, `AjudaSocial.png`, `adac-softwares.png`, `avatar_games.png` (sem uso desde a etapa 2), `finance-reminder-api.png`, `finance-reminder-frontend.png`, `foodrescure-api.png`, `observability.png`, `watchtower.png` e `watchtower.-api.png`.
- Para tentar de novo o print do Food-Rescue quando o Render estiver acordado, basta rodar a captura outra vez e trocar o `image` para `/projects/food-rescue.jpg`.
- A mensagem de vazio diz "nessa categoria" também quando a busca é que zera o resultado (texto pedido).
- Em 375px, a rolagem horizontal que já existia (de Certificates) continua (`scrollWidth` 397).

**Arquivos alterados nesta etapa:** `src/data/projects.ts`, `src/components/Projects.tsx`, os novos `public/projects/watchtower.jpg` e `public/projects/dev-portfolio.jpg`, e os 13 novos `public/projects/covers/*.svg`.

---

## 2026-10-23 — Reconciliação da etapa 4 (projetos antigos, duplicatas e imagens originais)

**Pedido:** o `design/dados-portfolio.md` mudou. A seção "Projetos do site atual que NÃO estão nesta lista" agora diz: **manter** (confirmado pela Daiane); (a) duplicata (mesmo repositório ou título parecido) fica com UMA entrada, com os dados do arquivo; (b) se já existe print em `public/projects/`, usá-lo e não criar capa nova; (c) os demais ficam como estão, com a categoria mapeada. Comparar pelo git o `projects.ts` de antes da etapa 4, restaurar o que foi removido, associar as imagens originais, apagar capas e capturas da etapa 4 que ficarem sem uso, garantir só as 5 categorias e contadores corretos, sem mexer no layout. Rodar lint e build.

**1. Comparação pelo git** (`git show HEAD:my-portfolio/src/data/projects.ts`, último commit do arquivo: dd599f4, com 15 projetos; `git diff HEAD`):
- **Antigos que continuam existindo (12):** SkyHawk Drone Systems, Ajuda Social API → `ajudasocial-api`, Social Connect Client → `client-social-connect`, Food Rescue API → `food-rescue`, Study Manager API, Observability Challenge → `observabilidade`, AWS EC2 Storage Project, BreakFree, Finance Reminder Frontend, Finance Reminder API, Landing Page ADAC → `landing-adac` e Máquina de Turing.
- **Antigos removidos na etapa 4:** só o **Watchtower Backend API**, que foi fundido no `watchtower`. Como é duplicata pela regra (a), **continua fundido** (o repositório `watchtower-backend` é o botão "GitHub back"). Nenhum outro projeto antigo tinha sumido, então não houve nada a restaurar.
- **Duplicatas (fica uma entrada, com os dados do arquivo):**
  1. **Watchtower Platform + Watchtower Backend API → `watchtower`** (mesmos repositórios, `watchtower-frontend` e `watchtower-backend`).
  2. **Nexus Dev Portfolio → `dev-portfolio`** (título parecido). Além disso, o print original `nexus-dev.png` mostra **o portfólio antigo da Daiane** (o mesmo hero que a captura de `dev-portfolio-murex-phi.vercel.app`), e o repositório `DaihSeven/Nexus-Dev` responde **404** na API do GitHub (privado ou apagado; renomeado daria redirecionamento). A entrada "Nexus Dev Portfolio", que a etapa 4 tinha mantido, foi removida e o `dev-portfolio` ficou com o print dela.
  - Não considerei duplicata "Detecção de Anomalias" × "Detecção de Anomalias como Serviço (MLOps)": os dois estão no arquivo como itens separados, com repositórios diferentes.

**2–3. Imagens originais** (abri as 16 PNGs de `public/projects/` numa prancha com os nomes e associei cada uma pelo conteúdo):
- Agora usam print original: `watchtower` → `watchtower.png`, `finance-reminder-api` → `finance-reminder-api.png`, `finance-reminder-frontend` → `finance-reminder-frontend.png`, `ajudasocial-api` → `AjudaSocial-API.png` (Swagger), `client-social-connect` → `AjudaSocial.png` (front "Ajuda Social – Conectando"), `observabilidade` → `observability.png`, `food-rescue` → `foodrescure-api.png` (Swagger "Sistema de Doações e Impacto"), `landing-adac` → `adac-softwares.png` e `dev-portfolio` → `nexus-dev.png`.
- **Apagados por terem ficado sem uso** (criados na etapa 4 e sem referência em `src/`): `public/projects/watchtower.jpg`, `public/projects/dev-portfolio.jpg` e `public/projects/covers/{finance-reminder-api, finance-reminder-frontend, ajudasocial-api, client-social-connect, observabilidade, food-rescue, landing-adac}.svg`.
- **Capas SVG que continuam** (projetos sem print original): `mlops-anomalias`, `project-azimuth`, `assistente-virtual-ia`, `deteccao-anomalias`, `dockeditems` e `hypecode-automacoes`.
- **Originais sem uso (não apagados):** `avatar_games.png` (avatar do Hero antigo) e `watchtower.-api.png` (Swagger da API do Watchtower; o card único usa o print do front).

**4. Categorias:** só `frontend`, `backend`, `fullstack`, `devops` e `dados-ia`, sem "mobile". Mapeamento dos antigos mantidos: Study Manager API (Backend → `backend`), AWS EC2 Storage (DevOps → `devops`), BreakFree (Frontend → `frontend`) e Máquina de Turing (Frontend → `frontend`).

**5. Contadores:** são calculados a partir da lista (`projects.reduce`), então refletem a lista final. `Projects.tsx` não foi alterado.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0), `/` com 38.3 kB (126 kB First Load). Rodei numa cópia no scratchpad, porque havia um `next dev` do usuário ativo na porta 3000.
- Validação: 20 projetos, todas as imagens existem, nenhuma imagem repetida e nenhuma categoria inválida.
- No navegador: Todos (20), Front-end (7), Back-end (5), Full stack (2), DevOps (2), Dados e IA (4). O número de itens bate com cada contador. 20/20 imagens carregadas, sem erros no console nem respostas HTTP ≥ 400.

**Tabela final:**

| id | origem | imagem usada |
|---|---|---|
| skyhawk-drone-systems | ambos | /projects/skyhawksite.png |
| watchtower | ambos (2 antigos fundidos) | /projects/watchtower.png |
| finance-reminder-api | ambos | /projects/finance-reminder-api.png |
| finance-reminder-frontend | ambos | /projects/finance-reminder-frontend.png |
| ajudasocial-api | ambos | /projects/AjudaSocial-API.png |
| client-social-connect | ambos | /projects/AjudaSocial.png |
| mlops-anomalias | arquivo | /projects/covers/mlops-anomalias.svg |
| observabilidade | ambos | /projects/observability.png |
| food-rescue | ambos | /projects/foodrescure-api.png |
| project-azimuth | arquivo | /projects/covers/project-azimuth.svg |
| assistente-virtual-ia | arquivo | /projects/covers/assistente-virtual-ia.svg |
| deteccao-anomalias | arquivo | /projects/covers/deteccao-anomalias.svg |
| dockeditems | arquivo | /projects/covers/dockeditems.svg |
| landing-adac | ambos | /projects/adac-softwares.png |
| dev-portfolio | ambos (Nexus Dev Portfolio fundido) | /projects/nexus-dev.png |
| hypecode-automacoes | arquivo | /projects/covers/hypecode-automacoes.svg |
| study-manager-api | antigo | /projects/study-manager.png |
| aws-ec2-storage | antigo | /projects/aws-storage.png |
| breakfree | antigo | /projects/breakfree.png |
| maquina-de-turing | antigo | /projects/maquina-de-turing.png |

**Observações:**
- `maquina-de-turing.png` tem só 400×160 (muito larga). Na capa 4:3 com `object-cover`, ela é bastante cortada e ampliada. Não mexi no layout, como pedido. Vale trocar por um print maior.
- Se o Nexus Dev Portfolio for de fato outro projeto (com outro repositório), dá para restaurá-lo com o print `nexus-dev.png` e devolver o `dev-portfolio.jpg`, recapturando o site.

**Arquivos alterados nesta etapa:** `src/data/projects.ts`. Os 2 `.jpg` e as 7 capas SVG listados acima foram apagados.

---
