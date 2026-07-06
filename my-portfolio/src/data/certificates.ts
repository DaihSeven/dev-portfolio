//Futuramente um neon postgreSQL
export interface Certificate {
  id: number
  title: string
  institution: string
  date: string
  description: string
  icon: string
  category: 'Formação' | 'Certificação' | 'Curso' 
  featured?: boolean
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect - Associate",
    institution: "Amazon Web Services",
    date: "Setembro 2025",
    description: "Certificação em arquitetura de soluções na nuvem AWS. Projetar soluções com base no AWS Well-Architected Framework. Projetar soluções que incorporam os serviços da AWS para atender aos requisitos empresariais atuais e às necessidades futuras projetadas. Projetar arquiteturas seguras, resilientes, de alto desempenho e econômicas.Analisar as soluções existentes e determinar como realizar melhorias.",
    icon: "☁️",
    category: "Certificação",
    featured: true
  },
  {
    id: 2,
    title: "AWS Certified AI Practitioner",
    institution: "Amazon Web Services",
    date: "Setembro 2025",
    description: "Certificação em serviços de IA e Machine Learning da AWS. Conceitos, métodos e estratégias de IA, ML e IA generativa em geral e na AWS",
    icon: "🤖",
    category: "Certificação",
    featured: true
  },
  {
    id: 3,
    title: "Desenvolvimento Web Full Stack",
    institution: "Programadores do Amanhã",
    date: "Julho 2024 - Julho 2025",
    description: "Curso completo de desenvolvimento web com foco em React, Node.js e bancos de dados",
    icon: "💻",
    category: "Formação",
    featured: true
  },
  {
    id: 4,
    title: "Desenvolvimento Profissional para Carreiras em Nuvem - Formação para Arquiteto de Soluções AWS",
    institution: "Escola da Nuvem",
    date: "Janeiro 2025",
    description: "Formação profissional em arquitetura de soluções na nuvem AWS. Princípios de design arquitetônico baseados nos requisitos do cliente. Projetar estrategicamente sistemas distribuídos bem arquitetados, escaláveis, resilientes, eficientes e tolerantes a falhas",
    icon: "☁️",
    category: "Formação",
    featured: true
  },
  {
    id: 5,
    title: "Programação para Internet",
    institution: "Centro Universitário Estácio de Santa Catarina",
    date: "Dezembro 2024",
    description: "DESENVOLVIMENTO WEB EM HTML5, CSS, JAVASCRIPT, PHP; PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO EM PYTHON e DESENVOLVIMENTO DE SOFTWARE SEGURO ",
    icon: "💻",
    category: "Certificação"
  },
  {
    id: 6,
    title: "Programação de Sistemas de Informação",
    institution: "Centro Universitário Estácio de Santa Catarina",
    date: "Dezembro 2024",
    description: "POO em Java, Modelagem de Sistemas UML, Desenvolvimento de Software seguro",
    icon: "🌐",
    category: "Certificação"
  },
  {
    id: 7,
    title: "Direitos e Privacidade dos Usuários",
    institution: "Centro Universitário Estácio de Santa Catarina",
    date: "Dezembro 2024",
    description: "INTRODUÇÃO À SEGURANÇA DA INFORMAÇÃO, SISTEMAS DE INFORMAÇÃO E SOCIEDADE e DESENVOLVIMENTO DE SOFTWARE SEGURO",
    icon: "🔐",
    category: "Certificação"
  },
  {
    id: 8,
    title: "Preparatório para Arquitetura de Soluções em Nuvem AWS",
    institution: "Proz Educação",
    date: "Setembro 2024",
    description: "Conceitos de computação em nuvem, laboratórios práticos e principais serviços AWS e projetar estrategicamente sistemas distribuídos bem arquitetados, escaláveis, resilientes, eficientes e tolerantes a falhas",
    icon: "📚",
    category: "Curso"
  },
  {
    id: 9,
    title: "Trilha Digital Coders 2024 - DevOps, Cloud Computing, Kubernetes, Docker, Linux, Terraform",
    institution: "Ada Tech",
    date: "Junho 2024",
    description: "Certificação em DevOps, Cloud Computing e ferramentas de infraestrutura como código",
    icon: "⚙️",
    category: "Curso",
    featured: true
  },
  {
    id: 10,
    title: "Olimpíadas Azure",
    institution: "Microsoft",
    date: "Dezembro 2023",
    description: "Competição de conhecimentos em serviços de nuvem Microsoft Azure: Virtual Machine, Virtual Machine, Registro de Domínio,  Tecnologia .NET, Clean Architecture, SQL, VPN Azure, Firewall, Entra Connect, Azure Policy,  Azure DevOps, Custom Domain,Migrar DNS Público para Azure, VNet, Azure Migrate, APIM, KeyVault,  Storage Account, Application Gateway,  Entra ID, App Services, DevOps Slots,  Azure B2C, Logic App, Azure Functions e Application Insights.",
    icon: "☁️",
    category: "Curso"
  },
  {
    id: 11,
    title: "Redes e Linux Essentials para AWS",
    institution: "AWS Training",
    date: "Julho 2024",
    description: "Fundamentos de redes e Linux aplicados à nuvem AWS",
    icon: "🔧",
    category: "Curso"
  },
  {
    id: 12,
    title: "Programa Oracle Next Education F2 T6",
    institution: "Alura + Oracle",
    date: "Janeiro 2024",
    description: "Formação em programação, Java, Spring Boot, desenvolvimento pessoal e empreendedorismo",
    icon: "🎓",
    category: "Formação"
  },
  {
    id: 13,
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    date: "Dezembro 2023",
    description: "Certificação fundamentos de computação em nuvem AWS, fluência em nuvem e conhecimento básico, serviços essenciais necessários para configurar projetos focados, serviços de TI e suas aplicações na Nuvem AWS",
    icon: "☁️",
    category: "Certificação"
  },
  {
    id: 14,
    title: "AWS re/Start",
    institution: "Escola da Nuvem",
    date: "Dezembro 2023",
    description: "Programa de formação em fundamentos de nuvem AWS com laboratórios práticos",
    icon: "🚀",
    category: "Formação"
  },
  {
    id: 15,
    title: "Desenvolvimento Java com Cloud AWS",
    institution: "DIO",
    date: "Novembro 2023",
    description: "Desenvolvimento de aplicações Java integradas com serviços AWS",
    icon: "☕",
    category: "Curso"
  },
  {
    id: 16,
    title: "Dominando a Linguagem de Programação Java",
    institution: "DIO",
    date: "Setembro 2023",
    description: "Curso avançado de programação Java e orientação a objetos",
    icon: "💻",
    category: "Curso"
  },
  {
    id: 17,
    title: "Banco de Dados SQL e NoSQL para Devs",
    institution: "DIO",
    date: "Agosto 2023",
    description: "Fundamentos de bancos de dados relacionais e não-relacionais",
    icon: "🗄️",
    category: "Curso"
  },
  {
    id: 18,
    title: "Semana do Combate ao Ransomware",
    institution: "Strati",
    date: "Abril 2023",
    description: "Treinamento em segurança cibernética e prevenção a ataques ransomware",
    icon: "🛡️",
    category: "Curso"
  },
  {
    id: 19,
    title: "Hacker Profissional",
    institution: "Técnicas de Invasão",
    date: "Fevereiro 2023",
    description: "Curso de técnicas de penetration testing e segurança ofensiva",
    icon: "🔐",
    category: "Curso"
  },
  {
    id: 20,
    title: "Certificação em Jornada da Inteligência Profissional",
    institution: "PUCRS",
    date: "Agosto 2022",
    description: "Desenvolvimento de inteligência emocional e competências profissionais",
    icon: "🧠",
    category: "Certificação"
  },
  {
    id: 21,
    title: "Certificação em Liderança Saudável - Transformando Pessoas e Empresas",
    institution: "PUCRS",
    date: "Março 2022",
    description: "Formação em liderança, gestão de pessoas e transformação organizacional",
    icon: "👥",
    category: "Certificação"
  },
  {
    id: 22,
    title: "Bootcamp Afya - Automação de Dados com IA",
    institution: "DIO",
    date: "Julho de 2026",
    description: "Abrange Python, IA Generativa, Machine Learning,Manipulação de Dados e Fundamentos de Banco de Dados.",
    icon: "🐍",
    category: "Curso"
  },
  {
    id: 23,
    title: "Google Cloud Arcade Brazil 2026 Certification",
    institution: "Google Cloud, SoulCode Academy",
    date: "Junho de 2026",
    description: "Como Facilitadora do Google Cloud Arcade Brasil 2026, apoiei alunos em sua jornada de aprendizado e, ao mesmo tempo, aprofundei meus conhecimentos em Google Cloud, IA Generativa e computação em nuvem por meio de laboratórios práticos. Desenvolvi experiência hands-on com serviços como IAM, Compute Engine, Cloud Storage, Cloud Shell, Cloud Spanner, Vertex AI e ferramentas Google Workspace, aplicando conceitos de infraestrutura, segurança, redes e automação.",
    icon: "📒",
    category: "Certificação"
  }
]