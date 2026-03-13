//Futuramente num neon postgreSQL
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github?: string
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile' | 'DevOps'
  featured: boolean
  status: 'completed' | 'in-progress'
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Dev Portfolio",
    description: "Portfólio moderno e responsivo desenvolvido com Next.js 15 e React 19, apresentando projetos e habilidades técnicas com design limpo e performance otimizada",
    image: "/projects/nexus-dev.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    link: "https://github.com/DaihSeven/Nexus-Dev",
    github: "https://github.com/DaihSeven/Nexus-Dev",
    category: "Frontend",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    title: "Watchtower Platform",
    description: "Sistema completo para localização de pessoas desaparecidas com frontend interativo (mapa, gerenciamento de casos) e API RESTful. Plataforma web que une tecnologia e impacto social",
    image: "/projects/watchtower.png",
    technologies: ["React", "TypeScript", "React Router", "Tailwind CSS", "React Hooks", "API REST"],
    link: "https://github.com/DaihSeven/watchtower-frontend",
    github: "https://github.com/DaihSeven/watchtower-frontend",
    category: "Full Stack",
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    title: "Watchtower Backend API",
    description: "API refatorada e atualizada para gestão de casos de pessoas desaparecidas. Documentação Swagger, autenticação JWT e modelo de dados robusto com PostgreSQL",
    image: "/projects/watchtower-api.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Swagger", "JWT", "REST API"],
    link: "https://watchtower-backend.onrender.com/api-docs/",
    github: "https://github.com/DaihSeven/watchtower-backend",
    category: "Backend",
    featured: true,
    status: "completed"
  },
  {
    id: 4,
    title: "Ajuda Social API",
    description: "API que conecta pessoas em situação de vulnerabilidade a serviços essenciais (abrigos, alimentação, assistência jurídica). Sistema de geolocalização e filtros inteligentes",
    image: "/projects/AjudaSocial-API.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Swagger", "Render", "REST API"],
    link: "https://ajudasocialapi.onrender.com/api-docs/",
    github: "https://github.com/DaihSeven/AjudaSocial_API",
    category: "Backend",
    featured: true,
    status: "completed"
  },
  {
    id: 5,
    title: "Social Connect Client",
    description: "Frontend responsivo que consome a AjudaSocial API. Interface amigável para facilitar o acesso a recursos que salvam vidas, com foco em usabilidade e experiência móvel",
    image: "/projects/AjudaSocial.png",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "API Client"],
    link: "https://client-social-connect.vercel.app/",
    github: "https://github.com/DaihSeven/client-social-connect",
    category: "Frontend",
    featured: false,
    status: "completed"
  },
  {
    id: 6,
    title: "Food Rescue API",
    description: "Plataforma que combate o desperdício alimentar conectando doadores a pessoas necessitadas. Sistema de matchmaking geolocalizado e gestão de doações",
    image: "/projects/foodrescue-api.png",
    technologies: ["Node.js", "PostgreSQL", "Prisma ORM", "REST API", "MVC", "Express"],
    link: "https://food-rescue-1-16nz.onrender.com/api-docs/",
    github: "https://github.com/DaihSeven/Food-Rescue",
    category: "Backend",
    featured: false,
    status: "completed"
  },
  {
    id: 7,
    title: "Study Manager API",
    description: "API para gerenciamento de estudos acadêmicos com controle de disciplinas, tarefas, prazos e progresso. Sistema organizacional para otimização do aprendizado",
    image: "/projects/study-manager.png",
    technologies: ["Node.js", "Express", "Database", "REST API"],
    link: "https://github.com/DaihSeven/Study-Manager-API",
    github: "https://github.com/DaihSeven/Study-Manager-API",
    category: "Backend",
    featured: false,
    status: "completed"
  },
  {
    id: 8,
    title: "Observability Challenge",
    description: "Sistema de monitoramento com Python, Prometheus, Grafana e Docker Compose. Infraestrutura observável para aplicações distribuídas em ambiente Linux",
    image: "/projects/observability.png",
    technologies: ["Python", "Docker", "Prometheus", "Grafana", "Linux", "Ubuntu", "Docker Compose"],
    link: "https://github.com/DaihSeven/desafio-obs",
    github: "https://github.com/DaihSeven/desafio-obs",
    category: "DevOps",
    featured: true,
    status: "completed"
  },
  {
    id: 9,
    title: "AWS EC2 Storage Project",
    description: "Automação de infraestrutura na AWS com criação de instâncias EC2 Linux, volumes EBS e configuração de acesso SSH via chaves. Gestão de recursos cloud",
    image: "/projects/aws-storage.png",
    technologies: ["AWS", "EC2", "EBS", "SSH", "Linux", "Cloud Infrastructure", "Terminal"],
    link: "https://github.com/DaihSeven/Projeto-Armazenar",
    github: "https://github.com/DaihSeven/Projeto-Armazenar",
    category: "DevOps",
    featured: false,
    status: "completed"
  },
  {
    id: 10,
    title: "BreakFree - Final Project",
    description: "Site desenvolvido como projeto final do módulo 2. Aplicação web completa com design responsivo e funcionalidades interativas usando HTML, CSS e JavaScript",
    image: "/projects/breakfree.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development"],
    link: "https://daihseven.github.io/BreakFree-ProjetoFinalM2/",
    github: "https://github.com/DaihSeven/BreakFree-ProjetoFinalM2",
    category: "Frontend",
    featured: false,
    status: "completed"
  },
  {
    id: 11,
    title: "Finance Reminder - Frontend",
    description: "Interface web para gerenciamento de contas e despesas, integrada à Finance Reminder API. Arquitetura MVC com React, TypeScript e CSS Modules, com deploy na Netlify.",
    image: "/projects/finance-reminder-frontend.png",
    technologies: ["React", "TypeScript", "Vite", "Axios", "React Router", "CSS Modules", "Netlify"],
    link: "https://finance-reminder.netlify.app",
    github: "https://github.com/DaihSeven/finance-reminder-frontend",
    category: "Frontend",
    featured: false,
    status: "completed"
  },
  {
    id: 12,
    title: "Finance Reminder - API",
    description: "API RESTful V2 para gerenciamento de contas a pagar com notificações automáticas de vencimento. Evoluída a partir do projeto desenvolvido no CodeLab (Programadores do Amanhã), com testes automatizados e documentação Swagger.",
    image: "/projects/finance-reminder-api.png",
    technologies: ["TypeScript", "Express.js", "JWT", "Docker", "Swagger", "Vitest", "Supertest", "CI/CD"],
    link: "",
    github: "https://github.com/DaihSeven/finance-reminder-api",
    category: "Backend",
    featured: false,
    status: "completed"
  },
  {
    id: 13,
    title: "Landing Page - ADAC Softwares",
    description: "Landing page responsiva desenvolvida como teste técnico frontend para a ADAC Softwares, com deploy na Vercel.",
    image: "/projects/adac-softwares.png",
    technologies: ["React", "TypeScript", "Figma"],
    link: "https://test-adac-softwares.vercel.app/",
    github: "https://github.com/DaihSeven/frontend-test-adac-softwares",
    category: "Frontend",
    featured: false,
    status: "completed"
  },
  {
    id: 14,
    title: "Máquina de Turing",
    description: "Simulação da Máquina de Turing desenvolvida como projeto do desafio incremental do CodeLab (Programadores do Amanhã), com foco em lógica de programação, algoritmos e pseudocódigo.",
    image: "/projects/maquina-de-turing.png",
    technologies: ["JavaScript", "Algoritmos", "Lógica de Programação"],
    link: "",
    github: "https://github.com/DaihSeven/challenge-machine-turing",
    category: "Frontend",
    featured: false,
    status: "completed"
  },
]