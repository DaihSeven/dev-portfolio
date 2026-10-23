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

## 2026-10-23 — Redesign, etapa 5: Certificados, formações e cursos

**Pedido:** seguindo o design e `design/dados-portfolio.md` (seção CERTIFICAÇÕES, mais pendências e ressalvas): (1) ampliar `Certificate` (`workload`, `technologies`, `certificateUrl`, `badgeUrl`, `verification`, `disciplines`), importar todos os itens do arquivo, ordenar por `sort` (mais recente primeiro, sem data no fim), manter os itens só do site, deduplicar e não inventar dados; (2) reescrever `Certificates.tsx` (cabeçalho, totais, busca, filtros com contador, cards com tag, instituição, data, carga, descrição, disciplinas e tecnologias), com totais calculados e sem somar carga; (3) botões "Ver certificado" e "Ver badge" só com https, verificação discreta, links externos seguros e ícones Lucide; (4) mostrar 8 itens + "Ver mais certificados" (+10), resetando ao mudar filtro ou busca, e sem esconder itens na busca; (5) corrigir a rolagem horizontal em 375px. Rodar lint e build.

**1. `src/data/certificates.ts`** (reescrito):
- `Certificate`: `id: string`, `title`, `institution`, `date?` (texto exibido), `sort?` (AAAA-MM), `description?`, `category: 'certificacao' | 'formacao' | 'curso'`, `featured?`, `softSkill?`, `workload?`, `technologies?`, `certificateUrl?`, `badgeUrl?`, `verification?` e `disciplines?`. Novo `certificateCategories` (valor, rótulo e plural).
- **34 itens do arquivo** (1–10, 12–35; o 11 virou o 35) + **1 item só do site**: "Certificação em Jornada da Inteligência Profissional" (PUCRS, agosto de 2022), mantido como estava, com a categoria "Certificação" → `certificacao`. Total: **35**.
- `cert:` → `certificateUrl` e `badge:` → `badgeUrl`. Onde está "a confirmar" ou "sem link", o campo fica vazio.
- **Pendências e ressalvas aplicadas:** Olimpíadas Azure com dezembro de 2024, 30h e link de verificação `olimpiadas.tftec.com.br/verificar/…`; Redes e Linux pela Proz, julho de 2024, 15h, com link; Arquiteto de Soluções AWS como **curso**, 13/12/2024 e 110h; AWS re/Start com 176h e badge; Programadores do Amanhã com **720h**; os 3 cursos da DIO com **4h cada**; Pulsar STEM sem link.
- **Duplicatas:** os 22 itens do site que correspondem ao arquivo ficaram com uma só entrada, com os dados do arquivo (inclusive onde título ou instituição mudavam, ex.: "Centro Universitário Estácio" → CUESC, "Técnicas de Invasão" → Bruno Fraga, ONE "F2 T6" → "F2 TGF", e "Hacker Profissional" com o título completo).
  - Onde o arquivo **não tem descrição** e o site tinha, mantive a descrição do site (marcado com comentário no código): Trilha ADA, Redes e Linux, 3× DIO, Ransomware, Hacker Profissional e Liderança Saudável.
  - Os destaques antigos do Arquiteto AWS e da Trilha ADA saíram (o arquivo não os marca).
- **Ordenação:** por `sort`, do mais recente para o mais antigo. No mesmo ano, as soft skills (32, 33, 34) ficam depois dos técnicos. Itens sem `sort` vão para o fim. O Coodesh tem `sort: 2023-01` mas "sem data", então é ordenado e não mostra data.
- **Não adicionei**, por estarem fora da lista: "Especialização em IA para Devs" (Programadores do Amanhã, 100h, ago–dez 2026, em andamento, citada nas ressalvas) e "Descubra a Nuvem AWS (Nexa Resources)" (as ressalvas dizem que faz parte do Bootcamp Nexa).

**2–4. `src/components/Certificates.tsx`** (reescrito):
- `.sec.band` com `id="certificados"`. Cabeçalho "Certificados e formações" + tulipa + "Da nuvem ao back-end, um passo de cada vez".
- **Totais calculados** com `reduce` sobre o array (Cormorant 2.8rem tulip). A carga horária não é somada em lugar nenhum.
- Busca por título, instituição, descrição e tecnologias. Filtros Todos, Certificação, Formação e Curso com contadores calculados.
- Card: ícone Lucide por categoria (Award, GraduationCap, BookOpen) em gold, título, tag do tipo, instituição (tulip), data, "carga horária: X" (só se houver), descrição, lista de disciplinas, chips de tecnologias e links.
- Botões "Ver certificado" e "Ver badge" só com https válido, com `target="_blank"` e `rel="noopener noreferrer"`. A verificação aparece em texto de .78rem, como link quando começa com `http`.
- Paginação: 8 itens e depois **+10 por clique** ("Ver mais certificados (+10 de N)"). Mudar o filtro ou a busca volta para 8. Com busca ativa, mostra tudo.
- Lista vazia mostra "Nada nessa categoria ainda." em Caveat.

**5. Rolagem horizontal:** em **375px ela sumiu** (`scrollWidth` 375 = viewport). Vinha dos cards antigos de Certificados (badges `whitespace-nowrap`). Os novos cards têm `min-w-0` no título e no input e `break-all` na verificação.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0), `/` com 39.8 kB (127 kB First Load). Rodei direto no projeto, porque não havia `next dev` ativo.
- No navegador (`next start` + Playwright): totais 8 certificações, 5 formações e 22 cursos; filtros Todos (35), Certificação (8), Formação (5) e Curso (22); paginação 8 → 18 → 28 → 35; cada filtro volta a mostrar 8 (Certificação e Formação mostram tudo, sem botão).
  - Busca: "aws" encontra 8, "dio" 5, "kubernetes" 1 e "pucrs" 3, sem botão "ver mais". Um termo inexistente mostra a mensagem de vazio. Ao limpar a busca, volta a 8.
  - 21 botões "Ver certificado" e 4 "Ver badge", todos https e com `_blank` + `noopener noreferrer`. Verificação como link (Olimpíadas Azure, Trilha ADA) e como texto (Rocketseat). 3 cards com disciplinas.
  - Nenhum texto cortado ou vazando em 375 e 320px. Sem erros no console.

**Números finais:**
- Total por categoria: **certificação 8 · formação 5 · curso 22** (35 itens).
- **Sem carga horária: 5** (AWS SAA, AWS AI Practitioner, AWS Cloud Practitioner, Google Cloud Arcade e Jornada da Inteligência Profissional).
- **Sem link de certificado ou badge: 10** (Google Cloud Arcade, Pulsar STEM, Desenvolvimento Web Full Stack, Olimpíadas Azure (tem só o link de verificação), 3× DIO, Ransomware, Arquiteto de Soluções AWS e Jornada). Sem nenhum link, nem de verificação: 9.

**Observações:**
- Em **320px** ainda sobra rolagem horizontal (`scrollWidth` 352), causada pelos cards da seção **Contato** (e-mail longo com `p-8`). Ela ainda não foi portada e será resolvida quando for.
- Só sobrou o `©` do rodapé como "pictográfico", e não é emoji.

**Arquivos alterados nesta etapa:** `src/data/certificates.ts` e `src/components/Certificates.tsx`.

---

## 2026-10-23 — Ajuste da etapa 5: destaques, item em andamento e selos

**Pedido:** (1) `featured: true` só em AWS SAA, AWS AI Practitioner, AWS Cloud Practitioner, Desenvolvimento Web Full Stack e no item novo; (2) novo item de formação "Especialização em Inteligência Artificial para DEVs" (Programadores do Amanhã, "Agosto a dezembro de 2026 (em andamento)", sort 2026-12, 100h, descrição dada, sem links e sem tecnologias); (3) campo `inProgress?: boolean` e tag "Em andamento" com borda dourada; (4) selo "Destaque" (Sparkles, texto tulip sobre rose translúcido) ao lado da tag de tipo, com borda `border-rose` nos cards em destaque, mantendo a ordem por data; (5) atualizar `design/dados-portfolio.md` e confirmar 8/6/22 (36). Rodar lint e build.

**O que foi feito:**
- **`src/data/certificates.ts`:**
  - `inProgress?: boolean` na interface.
  - `featured: true` acrescentado no AWS Cloud Practitioner. SAA, AI Practitioner e Full Stack já tinham. Nenhum outro item tem `featured`.
  - Item novo `programadores-do-amanha-especializacao-ia` com exatamente os dados pedidos, `featured` e `inProgress`, sem links e sem tecnologias.
- **`src/components/Certificates.tsx`:**
  - Na linha da tag de tipo entraram a tag **"Em andamento"** (mesmo estilo da tag de tipo, com `border-gold`) e o selo **"Destaque"** (pílula com `Sparkles` de 12px, `text-tulip` e fundo `color-mix(var(--rose) 16%, transparent)`). O `color-mix` é necessário porque as cores do tema são `var(--…)` e não aceitam o modificador `/opacidade` do Tailwind.
  - Os cards em destaque usam `border-rose` em vez de `border-line`, e nada mais muda.
  - A ordem continua por data: o item novo (sort 2026-12) aparece no topo.
- **`design/dados-portfolio.md`:** "destaque" no item 3 (Cloud Practitioner), novo **item 36** na seção de formação, e a linha "Destaques (featured): 1, 2, 3, 10 e 36; … Itens em andamento: 36." no topo da seção.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors".
- `npm run build`: **passou** (exit 0), `/` com 40.2 kB (127 kB First Load). Rodei direto no projeto, porque não havia `next dev` ativo.
- No navegador (claro e escuro): **totais 8 certificações, 6 formações e 22 cursos**; filtros **Todos (36)**, Certificação (8), Formação (6) e Curso (22).
  - 1º card: "Especialização em Inteligência Artificial para DEVs", com as tags {Formação, Em andamento, Destaque}, 0 links e 0 tecnologias.
  - 5 selos "Destaque", exatamente nos 5 itens pedidos. A borda deles é o token `--rose` (#dd7c8c / #e8909c) e a dos demais, `--line`. A pílula tem texto `--tulip` e fundo rose a 16%. A tag "Em andamento" tem borda `--gold` e o mesmo tamanho da tag de tipo.
  - Sem erros no console.

**Observação:** no `.md`, o item 10 (Desenvolvimento Web Full Stack) ainda diz "carga: a confirmar", embora as ressalvas informem 720h, que já é o valor usado no código desde a etapa 5. Dá para atualizar a linha se quiser a fonte 100% alinhada.

**Arquivos alterados nesta etapa:** `src/data/certificates.ts`, `src/components/Certificates.tsx` e `design/dados-portfolio.md`.

---

## 2026-10-23 — Redesign, etapa 6: Contato, fundo da página, metadados, ícone, limpeza e verificação final

**Pedido:** (1) reescrever `Contact.tsx` conforme o HTML (nota "o bule já está no fogo", título, texto, 4 contatos e foto do chá em arco 3:4 com `next/image`, indo para baixo com no máximo 300px em telas menores), escolher entre as duas fotos de chá, pôr `--surface-2` atrás se houver transparência e corrigir a rolagem em 320px; (2) `body` com `bg-ground text-body`; (3) metadados novos; (4) confirmar ou converter o `icon.png`; (5) remover o que ficou sem uso e listar as imagens sem uso, sem apagá-las; (6) prints da página inteira em 1280 e 375px nos dois temas, sem rolagem em 375 e 320px e sem erros. Rodar lint e build.

**1. Contato:**
- **Foto escolhida: `public/images/turkish-traditional-tea.png`** (360×360, **fundo transparente**, dois copos com pires). A outra, `traditional-turkish-tea.png` (961×641), é paisagem e tem **marcas d'água "pngtree"** espalhadas pelo fundo branco: no recorte 3:4 o copo ficaria espremido e as marcas apareceriam.
- Como a escolhida tem fundo transparente, a moldura tem `bg-surface-2`.
- `Contact.tsx` reescrito: card `.invite` (surface, borda line, raio 20px, `shadow-soft`, grade `1.15fr .85fr`, 1 coluna até 860px), nota em Caveat (rose), h2 em Cormorant e texto com `max-w-[52ch]`.
- Contatos em `grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))]` com os ícones do design (`MailIcon`, `LinkedinIcon`, `GithubIcon` e o novo `PhoneIcon` em `icons.tsx`). LinkedIn e GitHub abrem com `_blank` + `noopener noreferrer`.
- **Rolagem em 320px corrigida:** `min-w-0` no card e no bloco de texto, `break-all` no valor (e-mail) e `min(210px,100%)` no `minmax`, para a coluna nunca passar da largura do card.
- Foto: `aspect-[3/4] rounded-[140px_140px_12px_12px] border-line overflow-hidden` com `next/image fill object-cover`.
- **Mudança feita pelo usuário durante a etapa:** a largura máxima e a centralização da foto passaram de `max-[860px]` para `max-[660px]`. Mantive. Entre 661 e 860px, a foto ocupa a largura do card (1 coluna) enquanto o `sizes` ainda declara `300px` para ≤860px, então ela pode ficar menos nítida nessa faixa. Para resolver, dá para ajustar o `sizes` (ex.: `(max-width: 660px) 300px, (max-width: 860px) 100vw, 400px`).
- **Efeito do `object-cover`:** a imagem é quadrada e o arco é 3:4, então as bordas dos pires e a alça do copo da direita ficam um pouco cortadas. No tema escuro aparece uma leve borda clara em volta dos copos, que vem do recorte da própria imagem.

**2. Fundo da página:** o `body` agora é `bg-ground font-karla text-body` (em `layout.tsx`). A regra antiga `body { #fff / #000 }` saiu do `globals.css`. A **Inter foi removida** (não havia mais seção usando). O `bg-ground` explícito que eu tinha posto em `#projetos` virou redundante e saiu. A barra escura deixou de ficar acinzentada.

**3. Metadados:** título "Daiane · Desenvolvedora full stack" e descrição "Desenvolvedora full stack com raiz no back-end. Estudante de Engenharia de Software que cuida de APIs, bancos de dados e deploys, e gosta de ensinar quem está chegando." (fiel ao texto do Hero).

**4. Ícone:** `src/app/icon.png` **já está certo**: formato png, assinatura binária PNG (`89504e47…`), 512×512, com alfa. Nada foi convertido.

**5. Limpeza:**
- **Removidos** (nenhum arquivo os importava): `src/components/decor/` inteira (`ArcFrame`, `CurlArrow`, `HandNote`, `HeartOutline`, `Sparkle` e `SquiggleUnderline`; a `CurlArrow` e a `SquiggleUnderline` só eram usadas no Contact antigo).
- **`tailwind.config.js`:** saíram as 11 animações antigas e seus keyframes (`slide-*`, `float`, `fade-in`, `fade-in-up`, `spin-slow`, `spin-slower`, `shine`, `scroll`; 0 usos), a paleta `butter` (0 usos) e a escala numérica `rose-50…600` (0 usos). O `rose` agora é só `var(--rose)`. O `content` ficou só com `./src/**`, porque as pastas `pages/`, `components/` e `app/` da raiz não existem.
- Todos os ícones de `icons.tsx` estão em uso. O `useInView` continua sendo usado (About e Technologies).
- **Imagens sem uso** (**não apagadas**): `/images/traditional-turkish-tea.png` (152 KB), `/projects/avatar_games.png` (1,7 MB) e `/projects/watchtower.-api.png` (60 KB).
- Nota (não alterado): o projeto tem `.eslintrc.json`, que é o usado pelo `next lint` com ESLint 8, e também `eslint.config.mjs`, uma flat config que importa `eslint/config` do ESLint 9 e não é usada. Dá para remover numa limpeza de tooling.

**6. Verificação final** (`next start` + Playwright):
- **Rolagem horizontal:** nenhuma em 1280, 375 e **320px**, nos temas claro e escuro (`scrollWidth` igual à viewport em todos).
- `body` com `--ground` (`#faf6ef` no claro, `#101d22` no escuro), fonte Karla, e a barra com 88% de `--ground` (já não fica acinzentada).
- Imagens: 24/24 em 1280px. Em ≤480px, as flores do Hero ficam com `display: none` (como no design) e, por terem carregamento preguiçoso, não são baixadas. Isso não é erro.
- **Nenhum erro no console nem resposta HTTP ≥ 400.**
- Prints da página inteira salvos no scratchpad (`final/light-1280.png`, `dark-1280.png`, `light-375.png` e `dark-375.png`) e revisados por partes: todas as seções conferem nos dois temas.

**Resultado:**
- `npm run lint`: **passou** (exit 0), "No ESLint warnings or errors". Rodei de novo depois da mudança do usuário no `Contact.tsx`.
- `npm run build`: **passou** (exit 0), `/` com 40.1 kB (127 kB First Load). Rodei numa cópia no scratchpad, porque havia um `next dev` do usuário ativo na porta 3000.

**Arquivos alterados:** `src/components/Contact.tsx`, `src/components/icons.tsx` (+`PhoneIcon`), `src/app/layout.tsx`, `src/app/globals.css`, `src/components/Projects.tsx` (fundo redundante removido) e `tailwind.config.js`.
**Arquivos removidos:** `src/components/decor/ArcFrame.tsx`, `CurlArrow.tsx`, `HandNote.tsx`, `HeartOutline.tsx`, `Sparkle.tsx` e `SquiggleUnderline.tsx`.

---

## 2026-10-23 — Contato: foto do chá e arco menores

**Pedido:** diminuir a imagem do chá e o arco (a usuária colou o trecho atual, com `max-[660px]:max-w-[300px]` e `sizes="(max-width: 660px) 200px, 300px"`).

**O que foi feito (`src/components/Contact.tsx`):**
- A moldura deixou de ocupar a coluna inteira (~400px no desktop, e sem limite entre 661 e 860px). Agora tem `max-w-[280px]` em todas as larguras e `max-[660px]:max-w-[200px]` até 660px, sempre com `justify-self-center`. A proporção 3:4, o arco `rounded-[140px_140px_12px_12px]`, a borda, o `bg-surface-2` e o `object-cover` continuam iguais.
- `sizes` passou a `(max-width: 660px) 200px, 280px`, coerente com as larguras reais.

**Verificação** (no `next dev` da usuária, porta 3000, sem build):
- Moldura: **280×373** em 1280px e em 768px, e **200×267** em 375px, centralizada na coluna.
- Sem rolagem horizontal (`scrollWidth` = viewport) e sem erros na página.
- `npm run lint`: passou.

**Arquivo alterado:** `src/components/Contact.tsx`.

---

## 2026-10-23 — Projetos: tamanho dos arcos e por que as imagens aparecem cortadas

**Pergunta:** qual o tamanho dos arcos em volta das imagens dos Projetos, para adaptar as imagens e elas aparecerem 100% inteiras (hoje aparecem cortadas). Nada foi alterado no código.

**Moldura atual (`Projects.tsx`):** `aspect-[4/3]`, `rounded-[120px_120px_10px_10px]` (raio fixo de **120px** nos cantos de cima e 10px nos de baixo), `overflow-hidden` e imagem com `object-cover`.

**Tamanho real do arco, medido no navegador:**
| largura da tela | arco (L×A) |
|---|---|
| 1280px ou mais | 509×382 |
| 1024px | 448×336 |
| 861px | 374×280 |
| 768px (1 coluna) | 728×546 |
| 375px | 335×251 |
| 320px | 280×210 |

**Por que corta (duas causas):**
1. **Proporção:** o arco é 4:3 (1,33) e quase todos os prints são bem mais largos, cerca de 2,1:1 (ex.: skyhawk, watchtower, finance, AjudaSocial e breakfree, todos ~1365×646). O `object-cover` preenche a altura e **descarta ~37% da largura (~18% de cada lado)**. Os piores casos: `maquina-de-turing.png` (2,51:1, perde 47%), `observability.png` (2,25:1, perde 41%) e `aws-storage.png` (1,91:1, perde 30%). Os mais próximos: `study-manager.png` (perde 13%) e `adac-softwares.png` (perde 4%). As 6 capas SVG já são 4:3 e não perdem nada por proporção.
2. **Cantos do arco:** o raio de 120px é fixo, então numa moldura estreita ele ocupa mais espaço proporcional: 24% da largura em 509px e **43% em 280px**. Os cantos de cima de qualquer imagem (inclusive as 4:3) ficam escondidos, e é justamente onde os prints têm logo e menu.

**Medidas para adaptar as imagens (sem mudar o código):**
- Exportar em **4:3**, de preferência **1600×1200** (o arco chega a 728px de largura no tablet; ×2 para telas retina).
- **Área segura:** para nada cair nos cantos curvos, mesmo na tela de 320px, manter o conteúdo dentro de um retângulo com **~12,5% de margem no topo e nas laterais** (≈ 200px num canvas de 1600×1200). Embaixo basta ~1% (o raio é de 10px). A conta: um retângulo fica dentro de um canto arredondado de raio r se começar a pelo menos r·(1 − 1/√2) ≈ 0,29·r da borda, ou seja, 35px de 120px, e 35/280 = 12,5%.
- Usar **fundo transparente** na margem (PNG), para que o fundo da própria moldura (`bg-surface-2`) apareça e acompanhe o tema claro e escuro.

**Alternativa pelo código (sem editar imagens):** trocar `object-cover` por `object-contain` com um respiro interno no arco. A imagem inteira aparece, com faixas de `surface-2` em cima e embaixo, mas os prints largos ficam visualmente menores.

---

## 2026-10-23 — Prints dos Projetos adaptados para 4:3 com área segura do arco

**Pedido:** executar o script da usuária, que instala o `sharp` (se faltar) e converte cada PNG de `public/projects/` para 1600×1200 com a imagem inteira dentro da área segura do arco (200px nas laterais e no topo, 12px embaixo), margem transparente e backup dos originais em `design/originais-projetos/`.

**O que foi feito:**
- Rodei o script exatamente como enviado. O `sharp` não estava instalado, então o `npm i -D sharp` adicionou **`sharp@^0.35.5` às devDependencies** (`package.json` e `package-lock.json` alterados). O npm mostrou o aviso de 16 vulnerabilidades em dependências do projeto, que já existia e não foi tratado.
- **16 PNGs convertidos para 1600×1200**, com alfa, e **16 originais guardados** em `design/originais-projetos/`. O script foi apagado ao fim (`rm resize-projects.mjs`).
- O script processa todos os PNGs da pasta, então também converteu os dois **sem uso** (`avatar_games.png` e `watchtower.-api.png`). Os originais deles estão no backup.
- **Imagens ampliadas** (eram menores que a área de 1200×988): `maquina-de-turing.png` **3,00×** (de 400×160), `adac-softwares.png` 1,40×, `study-manager.png` 1,38×, `observability.png` 1,22× e `aws-storage.png` 1,21×. As demais foram reduzidas (~0,88×).
- Os arquivos ficaram maiores (ex.: `watchtower.png` de 254 para 402 KB, `study-manager.png` de 31 para 201 KB), mas o `next/image` serve versões otimizadas.

**Verificação:**
- `npm run lint`: passou.
- `npm run build`: passou (numa cópia no scratchpad, porque o `next dev` da usuária estava na porta 3000).
- `next start` da cópia + Playwright: em 1280px (claro) e 320px (escuro), **20/20 imagens carregadas, todas servidas em 4:3**. Nos prints das molduras (SkyHawk, Watchtower, Observabilidade, Máquina de Turing, AWS EC2 e Study Manager), a imagem aparece **inteira, sem corte nas laterais nem nos cantos do arco**, com o fundo da moldura aparecendo na margem transparente. Sem erros nem respostas HTTP ≥ 400.

**Observações:**
- Com 200px de margem (valor pensado para a tela de 320px), os prints ocupam cerca de 56% da largura do arco e parecem pequenos no desktop. Dá para reduzir a margem (ex.: 120px nas laterais e 140px no topo), aceitando um corte mínimo nos cantos só em telas muito estreitas.
- O `next dev` guarda em cache as imagens otimizadas. Se as versões antigas ainda aparecerem, recarregue com Ctrl+Shift+R ou apague `.next/cache/images`.
- Com o `sharp` instalado, o `next start` passa a usá-lo para otimizar imagens em produção.

**Arquivos alterados:** os 16 PNGs de `public/projects/`, `package.json` e `package-lock.json`. **Novos:** `design/originais-projetos/` (16 originais).

---

## 2026-10-23 — Projetos: moldura "folha" 16:10, prints reexportados, capas 16:10 e rabisco </>

**Pedido:** (1) trocar o arco por um retângulo `aspect-[16/10]` com cantos assimétricos (`.frame-leaf` / `.frame-leaf-alt` com `--r: clamp(56px, 8vw, 104px)`), alternando como o layout; (2) reexportar os prints dos originais para 1600×1000, transparentes, com área segura de 64px e ampliação máxima de 1,5×; (3) capas SVG em 16:10 (`viewBox="-80 0 960 600"` e fundo de -80 a 880); (4) decoração `CodeSketch.tsx` (</> à mão, traço 5, tulip, brilho dourado) no canto de baixo de raio grande, para fora da borda, a −8° (espelhada à direita), com fita 58×19 dourada a 40% a −24°, reduzida para ~64px abaixo de 640px; (5) trocar o subtítulo e listar outros textos que comentam o design; (6) apagar `.next`, rodar lint e build e verificar com Playwright (1280/375, claro/escuro, sem rolagem em 375/320 e sem cortes nos cantos).

**O que foi feito:**
1. **`globals.css`** (`@layer components`): `.frame-leaf, .frame-leaf-alt { --r: clamp(56px, 8vw, 104px) }`, `.frame-leaf { border-radius: 24px var(--r) 24px var(--r) }` e `.frame-leaf-alt { border-radius: var(--r) 24px var(--r) 24px }`.
   - **`Projects.tsx`:** moldura `relative aspect-[16/10] overflow-hidden border-line bg-surface-2` + `frame-leaf` (imagem à esquerda) ou `frame-leaf-alt` (à direita, `imageRight = index % 2 === 1`). `next/image fill object-cover` com `sizes="(max-width: 860px) calc(100vw - 2.5rem), 520px"`.
   - **Ajuste além do pedido:** o selo "Destaque" vai para o canto de cima de **raio pequeno**: esquerdo na `.frame-leaf` e direito na `-alt`. No canto esquerdo da `-alt` ele ficaria pendurado sobre a curva grande.
2. **Prints:** script temporário `reexport-projects.mjs` (com o `sharp` do projeto, **apagado após rodar**). Gera 14 PNGs 1600×1000 transparentes a partir de `design/originais-projetos/`, com `rotate()`, `scale = min(1472/w, 872/h, 1.5)` e centralização. `avatar_games.png` e `watchtower.-api.png` foram ignorados (os de `public/` continuam na versão 1600×1200 anterior, sem uso). Escalas: ~1,08–1,09× nos prints largos; adac 1,42×; aws-storage 1,48×; **Máquina de Turing, observability e study-manager limitados a 1,50×** (Turing ficou com 600×240, centralizada).
3. **Capas SVG** (6 em `public/projects/covers/`): `viewBox="-80 0 960 600"` e `<rect x="-80" width="960" …>`. Conferi cada uma renderizada em 480×300 (1,60): sem distorção, com o desenho centralizado e o fundo cobrindo tudo.
4. **`src/components/decor/CodeSketch.tsx`** (novo): `</>` em três traços levemente irregulares (`strokeWidth 5`, `round`, `currentColor`/`text-tulip`) e um brilho de 4 pontas em `text-gold` no canto superior direito.
   - Em cada card, um `<span aria-hidden pointer-events-none>` absoluto em `-bottom-7` e `-left-3` (ou `-right-3 -scale-x-100` nos cards da direita), com 104px de largura (64px até 640px). O desenho fica a `-rotate-[8deg]` e a fita é um `<span>` de 58×19 (36×12 no celular) em `color-mix(in srgb, var(--gold) 40%, transparent)` a `-rotate-[24deg]`.
   - **Correção durante o teste:** com 16px para fora, a caixa girada passava 1px da margem lateral de 20px em 768–1024px e criava rolagem horizontal. O deslocamento ficou em **12px**.
5. **Subtítulo:** "Todos abertos na mesma página, sem setas" → **"O que construí, do back-end ao front"**.
   - Busca por outros textos que comentam o design: **nenhum texto visível na página** ("sem setas", "na mesma página", "print do projeto", "tulipa real", "aqui", "placeholder", "mockup", "lorem" não aparecem no `innerText`).
   - Só existem **comentários de código** citando o design ou o HTML (invisíveis para quem visita): `layout.tsx` (l. 5, 53), `certificates.ts` (l. 1), `projects.ts` (l. 1, 210), `Technologies.tsx` (l. 15), `Hero.tsx` (l. 12, 17, 78), `icons.tsx` (l. 1), `Navbar.tsx` (l. 62), `Journey.tsx` (l. 13) e `Certificates.tsx` (l. 160). Não alterei nenhum.

**Verificação:**
- `.next` apagada (duas vezes, antes de cada build). `npm run lint`: **passou**. `npm run build`: **passou** (`/` com 40.5 kB, 128 kB First Load).
- `next start` + Playwright, claro e escuro, em 1280, 1024, 861, 768, 375 e 320px:
  - Moldura: 509×318 / 563×352 (r 102,4px) em 1280, 448×280 / 495×309 (r 81,9) em 1024, 728×455 (r 61,4) em 768, 335×209 (r 56) em 375 e 280×175 (r 56) em 320.
  - **Rolagem horizontal: nenhuma** em todas as larguras (inclusive 375 e 320).
  - **Cantos:** calculei o retângulo do conteúdo de cada print pelo alfa do PNG e testei os 4 cantos contra os raios reais. **Todos inteiros**, exceto **`aws-storage.png` em 320px, que perde 1,7px nos cantos de raio grande (sup. esq. e inf. dir.)**. Nessa largura, o raio mínimo de 56px e a margem de 64px (~11px na tela) não bastam para esse print, que é mais alto. Para zerar, há duas saídas: reexportar só esse print com área segura de ~76px, ou baixar o mínimo do `clamp` para 52px.
  - Sem erros no console nem respostas HTTP ≥ 400. Os prints da seção (1280 claro e 375 escuro) conferem.
- **Atenção:** a `.next` foi apagada e recriada com o build de produção enquanto o `next dev` da usuária (porta 3000) estava rodando. Ele ainda responde, mas precisa ser **reiniciado** (`npm run dev`).

**Arquivos alterados:** `src/app/globals.css`, `src/components/Projects.tsx`, os 14 PNGs de `public/projects/` e as 6 capas de `public/projects/covers/`. **Novo:** `src/components/decor/CodeSketch.tsx`.

---
AjudaSocial