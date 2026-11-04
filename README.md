# Daiane, desenvolvedora full stack

Este é o meu portfólio. Ele tem cara de jardim: papel quente, tulipas, chá, azulejo e um gatinho dormindo no rodapé. Por baixo disso tem back-end de verdade, projetos reais e muita certificação de nuvem.

[Ver o site no ar](https://dev-portfolio-murex-phi.vercel.app/)

---

## O que tem aqui dentro

Uma página só, com sete paradas:

| Seção | O que mostra |
|---|---|
| Início | Quem eu sou, minha foto numa janela em arco e os cartões de mentora AWS e certificações |
| Sobre mim | Minha história, uma frase que eu levo comigo e as coisas de que eu gosto (Corinthians, chá, séries turcas, bolos, plantas, bichos) |
| Jornada | Freelas, mentoria na Escola da Nuvem e a facilitação no Google Cloud Arcade, numa linha do tempo |
| Tecnologias | Um "canteiro" com tudo o que eu planto no dia a dia, na ordem back-end, nuvem, front-end e dados |
| Projetos | Todos abertos na mesma página, com busca e filtros por Front-end, Back-end, Full stack, DevOps e Dados e IA |
| Certificados | Certificações, formações e cursos, com busca, filtros, destaques e o que ainda está em andamento |
| Contato | Um convite para conversar, com os meus dois perfis do GitHub, LinkedIn, e-mail e telefone |

## O jeito do site

- **Dois temas.** "Manhã no jardim" (claro) e "Noite no Bósforo" (escuro). O site começa no tema do seu sistema, e a sua escolha fica guardada.
- **Fontes.** Cormorant Garamond nos títulos, Karla no texto e Caveat nas notinhas à mão.
- **Cores por variáveis.** Nada de cor fixa nos componentes: tudo vem de variáveis CSS, o que faz o escuro funcionar sem retrabalho.
- **Capas desenhadas.** Os projetos que não têm print ganham uma capa em SVG, desenhada em traço fino no mesmo estilo do site.
- **Conteúdo separado do código.** Projetos, certificados e tecnologias moram em arquivos de dados. Para atualizar o portfólio, quase nunca preciso mexer em componente.

## Cuidados de acessibilidade

Não é uma auditoria completa, mas é o que o projeto já faz:

- texto alternativo nas imagens
- foco visível nos elementos interativos
- filtros que informam seu estado (`aria-pressed`)
- animações desligadas para quem pede menos movimento (`prefers-reduced-motion`)
- links externos com `rel="noopener noreferrer"`

## Tecnologias

- Next.js 14 (App Router) e React 18
- TypeScript
- Tailwind CSS 3
- lucide-react, mais ícones em SVG feitos à mão
- Deploy na Vercel

As versões exatas estão em `my-portfolio/package.json`.
A arquitetura do app está descrita no [README interno](my-portfolio/README.md).

## Rodando na sua máquina

```bash
git clone https://github.com/DaihSeven/dev-portfolio.git
cd dev-portfolio/my-portfolio
npm install
npm run dev
```

Depois é só abrir `http://localhost:3000`.

### Scripts

```bash
npm run dev          # servidor de desenvolvimento
npm run build        # build de produção
npm start            # servidor de produção (depois do build)
npm run lint         # verifica o código com o ESLint
npx tsc --noEmit     # checa os tipos do TypeScript
```

## Como o projeto está organizado

```
my-portfolio/
├── src/
│   ├── app/          # layout, estilos globais (temas e variáveis) e a página
│   ├── components/   # uma seção por arquivo: Hero, About, Journey, Projects...
│   ├── data/         # projetos, certificados e tecnologias
│   └── hooks/        # animação de entrada ao rolar a página
├── public/
│   ├── images/       # foto, flores e imagens de apoio
│   └── projects/     # prints dos projetos (e as capas em SVG)
└── tailwind.config.js
```

### Adicionando um projeto

1. Coloque o print em `my-portfolio/public/projects/` (ou uma capa em SVG em `public/projects/covers/`).
2. Acrescente um item em `my-portfolio/src/data/projects.ts` com título, descrição, tecnologias, categoria e links.
3. Rode `npm run lint` e `npm run build` para conferir.

Certificados seguem a mesma ideia, em `src/data/certificates.ts`. Onde eu não sei a carga horária ou o link, o campo fica vazio, e o site simplesmente não mostra.

## Deploy

Cada push na `main` publica automaticamente na Vercel. Para gerar o build manualmente:

```bash
npm run build
npm start
```

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).

## Quem fez

**Daiane das Graças Barbosa Koslowski**, estudante de Engenharia de Software, mentora de cloud computing e torcedora do Corinthians.

- GitHub: [@DaihSeven](https://github.com/DaihSeven) e [@DevDaih](https://github.com/DevDaih)
- LinkedIn: [/in/daianebarbosak](https://www.linkedin.com/in/daianebarbosak/)

Vai, Corinthians!