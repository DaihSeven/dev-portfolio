// Fonte: design/dados-portfolio.md (seção PROJETOS). Futuramente num Neon PostgreSQL.
export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'devops' | 'dados-ia'

// Origem do projeto, exibida antes da categoria ("Freelance · Front-end")
export type ProjectKind = 'pessoal' | 'freelance' | 'equipe'

export interface Project {
  id: string
  title: string
  description: string
  // Capa 4:3: print real (/projects/<id>.jpg) ou ilustração (/projects/covers/<id>.svg)
  image: string
  technologies: string[]
  // Stack planejada para as próximas etapas do projeto
  nextTechnologies?: string[]
  category: ProjectCategory
  kind: ProjectKind
  featured?: boolean
  // Repositório principal. Quando houver githubBack, este é o do front-end.
  github?: string
  githubBack?: string
  demoUrl?: string
  docsUrl?: string
}

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: 'frontend', label: 'Front-end' },
  { value: 'backend', label: 'Back-end' },
  { value: 'fullstack', label: 'Full stack' },
  { value: 'devops', label: 'DevOps' },
  { value: 'dados-ia', label: 'Dados e IA' },
]

export const projects: Project[] = [
  {
    id: 'skyhawk-drone-systems',
    title: 'SkyHawk Drone Systems',
    description: 'Plataforma web de monitoramento aéreo inteligente, com interface tática, demonstrações operacionais e área de treinamento. Arquitetura modular em Next.js App Router.',
    image: '/projects/skyhawksite.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'CSS Modules'],
    category: 'frontend',
    kind: 'freelance',
    featured: true,
    demoUrl: 'https://skyhawkdrones.com.br/',
  },
  {
    id: 'watchtower',
    title: 'Watchtower',
    description: 'Plataforma colaborativa para localização de pessoas desaparecidas: API e frontend com mapa e gestão de casos.',
    image: '/projects/watchtower.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Tailwind'],
    category: 'fullstack',
    kind: 'pessoal',
    featured: true,
    demoUrl: 'https://watchtower-frontend-three.vercel.app',
    github: 'https://github.com/DaihSeven/watchtower-frontend',
    githubBack: 'https://github.com/DaihSeven/watchtower-backend',
  },
  {
    id: 'finance-reminder-api',
    title: 'Finance Reminder API',
    description: 'API RESTful que gerencia contas a pagar e avisa antes do vencimento.',
    image: '/projects/finance-reminder-api.png',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'CI/CD', 'bcrypt', 'Render'],
    category: 'backend',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/finance-reminder-api',
  },
  {
    id: 'finance-reminder-frontend',
    title: 'Finance Reminder Frontend',
    description: 'Frontend Interface web para gerenciamento de contas e despesas, integrada à Finance Reminder API.',
    image: '/projects/finance-reminder-frontend.png',
    technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'Axios', 'Netlify'],
    category: 'frontend',
    kind: 'pessoal',
    demoUrl: 'https://finance-reminder.netlify.app/login',
    github: 'https://github.com/DaihSeven/finance-reminder-frontend',
  },
  {
    id: 'ajudasocial-api',
    title: 'AjudaSocial API',
    description: 'Conecta pessoas em vulnerabilidade a abrigos, alimentação e assistência jurídica.',
    image: '/projects/AjudaSocial-API.png',
    technologies: ['Node.js', 'Express', 'MVC', 'PostgreSQL', 'Prisma', 'Swagger', 'Render'],
    category: 'backend',
    kind: 'pessoal',
    featured: true,
    demoUrl: 'https://ajudasocial-api-yxbj.onrender.com',
    github: 'https://github.com/DaihSeven/AjudaSocial_API',
  },
  {
    id: 'client-social-connect',
    title: 'Client Social Connect',
    description: 'Este projeto Ajuda Social - Conectando, foi desenvolvido como sequência do projeto backend AjudaSocial_API, que está sendo consumido neste frontend. "Facilitar o acesso a recursos que salvam vidas, conectando quem precisa de ajuda a quem pode oferecer."',
    image: '/projects/AjudaSocial.png',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'frontend',
    kind: 'pessoal',
    demoUrl: 'https://client-social-connect.vercel.app/',
    github: 'https://github.com/DaihSeven/client-social-connect',
  },
  {
    id: 'mlops-anomalias',
    title: 'Detecção de Anomalias como Serviço (mini plataforma de MLOps)',
    description: 'Plataforma de MLOps de ponta a ponta em torno de um modelo leve de detecção de anomalias. O foco não é o modelo, e sim o que uma equipe de MLOps constrói ao redor dele: treino reprodutível, versionamento, serviço via API, monitoramento de desempenho e de desvio dos dados (drift), alertas e, nas próximas etapas, CI/CD com retreino agendado e portão de qualidade.',
    image: '/projects/covers/mlops-anomalias.svg',
    technologies: ['Python', 'scikit-learn', 'FastAPI', 'Prometheus', 'Grafana', 'Alertmanager', 'Docker', 'Docker Compose'],
    nextTechnologies: ['GitHub Actions', 'Terraform', 'Bash', 'Kubernetes (kind)', 'Helm', 'MLflow'],
    category: 'dados-ia',
    kind: 'pessoal',
    featured: true,
    github: 'https://github.com/DaihSeven/mlops-anomalias',
  },
  {
    id: 'observabilidade',
    title: 'Observabilidade',
    description: 'Ambiente de observabilidade usando Prometheus e Grafana para monitorar uma aplicação de exemplo com: Métricas, dashboards e alertas.',
    image: '/projects/observability.png',
    technologies: ['Python', 'Docker', 'Docker Compose', 'Prometheus', 'Grafana', 'AlertManager'],
    category: 'devops',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/desafio-obs',
  },
  {
    id: 'food-rescue',
    title: 'Food-Rescue',
    description: 'API desenvolvida em equipe, com CRUD, testes automatizados e documentação. API que conecta pessoas que precisam de alimentos a pessoas que querem doar ou que iriam desperdiçar alimentos que ainda podem ser utilizados, evitando o desperdício.',
    image: '/projects/foodrescure-api.png',
    technologies: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Jest', 'Swagger'],
    category: 'backend',
    kind: 'equipe',
    docsUrl: 'https://food-rescue-1-16nz.onrender.com/api-docs',
    github: 'https://github.com/DaihSeven/Food-Rescue',
  },
  {
    id: 'project-azimuth',
    title: 'Project Azimuth',
    description: 'Ingestão, modelagem e exploração de dados com algoritmos preditivos. O projeto engloba desde a ingestão bruta e modelagem relacional em PostgreSQL (Neon DB), passando por análises exploratórias avançadas, algoritmos preditivos de demanda, motor de recomendação por similaridade e um dashboard interativo hospedado no Render.',
    image: '/projects/covers/project-azimuth.svg',
    technologies: ['Python', 'PostgreSQL', 'Pandas', 'NumPy'],
    category: 'dados-ia',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/Project-Azimuth',
  },
  {
    id: 'assistente-virtual-ia',
    title: 'Assistente Virtual com IA',
    description: 'Assistente virtual com processamento de linguagem natural. O HealthAssist AI é um assistente virtual desenvolvido em Python que utiliza uma base de conhecimento para responder dúvidas sobre saúde preventiva.',
    image: '/projects/covers/assistente-virtual-ia.svg',
    technologies: ['Python', 'NLP', 'IA generativa', 'Streamlit'],
    category: 'dados-ia',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/assistente-virtual-ia',
  },
  {
    id: 'deteccao-anomalias',
    title: 'Detecção de Anomalias',
    description: 'Identificação de padrões e anomalias em dados. Capaz de identificar transações financeiras potencialmente anômalas (suspeitas de fraude) a partir de um conjunto de características',
    image: '/projects/covers/deteccao-anomalias.svg',
    technologies: ['Python', 'Pandas'],
    category: 'dados-ia',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/deteccao-anomalias-python',
  },
  {
    id: 'dockeditems',
    title: 'DockedItems',
    description: 'API de gerenciamento de itens dockerizada.',
    image: '/projects/covers/dockeditems.svg',
    technologies: ['JavaScript', 'Docker'],
    category: 'backend',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/DockedItems',
  },
  {
    id: 'landing-adac',
    title: 'Landing page responsiva, ADAC Softwares',
    description: 'Landing page responsiva desenvolvida para o Teste Técnico Frontend da ADAC Softwares. O objetivo principal foi converter fielmente o design do Figma em uma aplicação funcional, priorizando código limpo, boas práticas, responsividade e documentação detalhada.',
    image: '/projects/adac-softwares.png',
    technologies: ['React'],
    category: 'frontend',
    kind: 'pessoal',
    demoUrl: 'https://test-adac-softwares.vercel.app/',
    github: 'https://github.com/DaihSeven/frontend-test-adac-softwares',
  },
  {
    id: 'dev-portfolio',
    title: 'Dev Portfolio (01/2026)',
    description: 'Portfólio responsivo com projetos, habilidades e certificações.',
    image: '/projects/nexus-dev.png',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS'],
    category: 'frontend',
    kind: 'pessoal',
    demoUrl: 'https://dev-portfolio-murex-phi.vercel.app',
    github: 'https://github.com/DaihSeven/dev-portfolio',
  },
  {
    id: 'hypecode-automacoes',
    title: 'Automações e integrações, HypeCode',
    description: 'APIs, automações e dashboards que conversam com IA, WhatsApp, Telegram e CRM. Infraestrutura em AWS.',
    image: '/projects/covers/hypecode-automacoes.svg',
    technologies: ['Python', 'Flask', 'Node.js', 'MySQL', 'Redis', 'Docker'],
    category: 'fullstack',
    kind: 'freelance',
    // Projeto de cliente: sem links públicos
  },

  // Projetos do site anterior que não estão em design/dados-portfolio.md.
  // Mantidos (confirmado pela Daiane), com a categoria antiga mapeada para as novas.
  // Duplicatas fundidas na entrada do arquivo: Watchtower Platform + Watchtower Backend API
  // (repositórios front e back) em 'watchtower'; Nexus Dev Portfolio em 'dev-portfolio'.
  {
    id: 'study-manager-api',
    title: 'Study Manager API',
    description: 'API para gerenciamento de estudos acadêmicos com controle de disciplinas, tarefas, prazos e progresso. Sistema organizacional para otimização do aprendizado',
    image: '/projects/study-manager.png',
    technologies: ['Node.js', 'Express', 'Database', 'REST API'],
    category: 'backend',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/Study-Manager-API',
  },
  {
    id: 'aws-ec2-storage',
    title: 'AWS EC2 Storage Project',
    description: 'Automação de infraestrutura na AWS com criação de instâncias EC2 Linux, volumes EBS e configuração de acesso SSH via chaves. Gestão de recursos cloud',
    image: '/projects/aws-storage.png',
    technologies: ['AWS', 'EC2', 'EBS', 'SSH', 'Linux', 'Cloud Infrastructure', 'Terminal'],
    category: 'devops',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/Projeto-Armazenar',
  },
  {
    id: 'breakfree',
    title: 'BreakFree - Final Project',
    description: 'Site desenvolvido como projeto final do módulo 2. Aplicação web completa com design responsivo e funcionalidades interativas usando HTML, CSS e JavaScript',
    image: '/projects/breakfree.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Development'],
    category: 'frontend',
    kind: 'pessoal',
    demoUrl: 'https://daihseven.github.io/BreakFree-ProjetoFinalM2/',
    github: 'https://github.com/DaihSeven/BreakFree-ProjetoFinalM2',
  },
  {
    id: 'maquina-de-turing',
    title: 'Máquina de Turing',
    description: 'Simulação da Máquina de Turing desenvolvida como projeto do desafio incremental do CodeLab (Programadores do Amanhã), com foco em lógica de programação, algoritmos e pseudocódigo.',
    image: '/projects/maquina-de-turing.png',
    technologies: ['JavaScript', 'Algoritmos', 'Lógica de Programação'],
    category: 'frontend',
    kind: 'pessoal',
    github: 'https://github.com/DaihSeven/challenge-machine-turing',
  },
]
