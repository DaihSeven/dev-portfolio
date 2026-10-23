// Fonte: design/dados-portfolio.md (seção CERTIFICAÇÕES, FORMAÇÕES E CURSOS, pendências e ressalvas).
// Futuramente num Neon PostgreSQL.
// Regras: não inventar carga horária, links nem datas (campo vazio = não renderiza);
// nunca somar carga horária (Business Agility faz parte do ONE).
export type CertificateCategory = 'certificacao' | 'formacao' | 'curso'

export interface Certificate {
  id: string
  title: string
  institution: string
  // Data como deve aparecer no card (vazia quando o certificado não tem data)
  date?: string
  // AAAA-MM, usado só para ordenar
  sort?: string
  description?: string
  category: CertificateCategory
  featured?: boolean
  // Soft skills aparecem depois dos itens técnicos do mesmo ano
  softSkill?: boolean
  // Ainda em curso: o card mostra a tag "Em andamento"
  inProgress?: boolean
  workload?: string
  technologies?: string[]
  certificateUrl?: string
  badgeUrl?: string
  verification?: string
  disciplines?: string[]
}

export const certificateCategories: { value: CertificateCategory; label: string; plural: string }[] = [
  { value: 'certificacao', label: 'Certificação', plural: 'certificações' },
  { value: 'formacao', label: 'Formação', plural: 'formações' },
  { value: 'curso', label: 'Curso', plural: 'cursos' },
]

const items: Certificate[] = [
  // ---------- Certificação ----------
  {
    id: 'aws-solutions-architect-associate',
    title: 'AWS Certified Solutions Architect – Associate',
    institution: 'Amazon Web Services',
    date: 'Setembro de 2025',
    sort: '2025-09',
    category: 'certificacao',
    featured: true,
    badgeUrl: 'https://www.credly.com/badges/52bb3cae-85d9-48dd-9631-7ea0c0af1760/public_url',
    technologies: ['AWS', 'Arquitetura', 'Well-Architected'],
    description: 'Arquitetura de soluções na nuvem AWS com base no Well-Architected Framework: sistemas distribuídos seguros, resilientes, de alto desempenho e econômicos, além da análise de soluções existentes.',
  },
  {
    id: 'aws-ai-practitioner',
    title: 'AWS Certified AI Practitioner',
    institution: 'Amazon Web Services',
    date: 'Setembro de 2025',
    sort: '2025-09',
    category: 'certificacao',
    featured: true,
    badgeUrl: 'https://www.credly.com/badges/004411ab-f5df-421f-b630-438dda77ba6f',
    technologies: ['IA generativa', 'Machine Learning', 'AWS'],
    description: 'Serviços de IA e machine learning da AWS: conceitos, métodos e estratégias de IA, ML e IA generativa.',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    institution: 'Amazon Web Services',
    date: 'Dezembro de 2023',
    sort: '2023-12',
    category: 'certificacao',
    featured: true,
    badgeUrl: 'https://www.credly.com/badges/70da7f47-8cd5-4258-9c1a-9031055fa506/linked_in_profile',
    technologies: ['AWS', 'Cloud'],
    description: 'Validação oficial em arquitetura global AWS, segurança (IAM, Responsabilidade Compartilhada), principais serviços (EC2, S3, RDS, VPC), precificação, gerenciamento de custos e suporte.',
  },
  {
    id: 'google-cloud-arcade-2026',
    title: 'Google Cloud Arcade Brazil 2026 (facilitadora)',
    institution: 'SoulCode Academy, com Google Cloud',
    date: 'Junho de 2026',
    sort: '2026-06',
    category: 'certificacao',
    technologies: ['Google Cloud', 'Vertex AI', 'IAM'],
    description: 'Atuação como facilitadora e laboratórios práticos de IAM, Compute Engine, Cloud Storage, Cloud Shell, Cloud Spanner e Vertex AI.',
  },
  {
    id: 'micro-programacao-internet',
    title: 'Micro certificação: Programação para Internet',
    institution: 'CUESC, Centro Universitário Estácio de Santa Catarina',
    date: 'Dezembro de 2024',
    sort: '2024-12',
    category: 'certificacao',
    workload: '280h',
    certificateUrl: 'https://certificado.estacio.br/b96d1cfceb8fab108cfcab9',
    disciplines: [
      'Desenvolvimento Web em HTML5, CSS, JavaScript e PHP (120h)',
      'Paradigmas de Linguagens de Programação em Python (80h)',
      'Desenvolvimento de Software Seguro (80h)',
    ],
    technologies: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'Python'],
  },
  {
    id: 'micro-programacao-sistemas',
    title: 'Micro certificação: Programação de Sistemas de Informação',
    institution: 'CUESC',
    date: 'Dezembro de 2024',
    sort: '2024-12',
    category: 'certificacao',
    workload: '240h',
    certificateUrl: 'https://certificado.estacio.br/5515ed0352034aa47868ba7',
    disciplines: [
      'Programação Orientada a Objetos em Java (80h)',
      'Modelagem de Sistemas em UML (80h)',
      'Desenvolvimento de Software Seguro (80h)',
    ],
    technologies: ['Java', 'UML'],
  },
  {
    id: 'micro-direitos-privacidade',
    title: 'Micro certificação: Direitos e Privacidade dos Usuários',
    institution: 'CUESC',
    date: 'Dezembro de 2024',
    sort: '2024-12',
    category: 'certificacao',
    workload: '240h',
    certificateUrl: 'https://certificado.estacio.br/cc3ed8ec51a3d812b6b7919',
    disciplines: [
      'Introdução à Segurança da Informação (80h)',
      'Sistemas de Informação e Sociedade (80h)',
      'Desenvolvimento de Software Seguro (80h)',
    ],
    technologies: ['Segurança da informação'],
  },

  // ---------- Formação ----------
  {
    id: 'bootcamp-afya',
    title: 'Bootcamp Afya: Automação de Dados com IA',
    institution: 'Afya / DIO',
    date: 'Concluído em 11 de julho de 2026',
    sort: '2026-07',
    category: 'formacao',
    workload: '51h',
    certificateUrl: 'https://hermes.dio.me/certificates/cover/YEKUV6V0.jpg',
    technologies: ['Python', 'POO', 'SQL', 'Machine Learning', 'IA generativa'],
    description: 'Programa de formação em automação de dados e IA, com 32 cursos, desafios de código e projetos práticos voltados à automação, análise de dados e soluções com IA.',
  },
  {
    id: 'pulsar-stem-2026',
    title: 'Pulsar STEM 2026: Mentoria para Mulheres na Tecnologia',
    institution: 'NTT DATA Foundation',
    date: '2026',
    sort: '2026-01',
    category: 'formacao',
    workload: '17h',
    // Certificado só no LinkedIn, sem URL pública: sem botão
    description: 'Programa de Mentoria e Eventos Complementares com carga horária total de 17 horas de desenvolvimento focado no futuro profissional.',
  },
  {
    id: 'programadores-do-amanha-full-stack',
    title: 'Desenvolvimento Web Full Stack',
    institution: 'Programadores do Amanhã',
    date: 'Julho de 2024 a julho de 2025',
    sort: '2025-07',
    category: 'formacao',
    featured: true,
    workload: '720h',
    technologies: ['React', 'Node.js', 'SQL'],
    description: 'Graduada em Desenvolvimento Full Stack com carga horária de 720 horas. Experiência prática no desenvolvimento de APIs REST robustas utilizando Node.js e na criação de interfaces web responsivas com React.js e Next.js. Vivência em projetos baseados em squads, com forte foco em metodologias ágeis, trabalho em equipe e comunicação (soft skills), além de proficiência em inglês. Sólidos conhecimentos em lógica de programação, arquitetura de microserviços, modelagem de dados (UML) e bancos de dados como MySQL, PostgreSQL e SQLite utilizando o ORM Sequelize.',
  },
  {
    id: 'programadores-do-amanha-especializacao-ia',
    title: 'Especialização em Inteligência Artificial para DEVs',
    institution: 'Programadores do Amanhã',
    date: 'Agosto a dezembro de 2026 (em andamento)',
    sort: '2026-12',
    category: 'formacao',
    featured: true,
    inProgress: true,
    workload: '100h',
    // Sem links e sem tecnologias informados
    description: 'Especialização focada em capacitar desenvolvedores na criação, segurança e automação de softwares com Inteligência Artificial. O programa abrange desde os fundamentos de AIOps, Engenharia de Prompt e Agentes de IA (como n8n e Google ADK), até práticas avançadas de Engenharia de Software modernas (Clean Code, DDD, BDD) adaptadas à era da IA. Fluxos de trabalho guiados por IA, arquiteturas RAG, segurança (OWASP para LLMs), testes automatizados e finalizam o curso com um projeto prático apresentado no Demo Day.',
  },
  {
    id: 'oracle-next-education',
    title: 'Oracle Next Education (ONE) F2 TGF',
    institution: 'Oracle / Alura',
    date: 'Finalizado em 25 de março de 2024',
    sort: '2024-03',
    category: 'formacao',
    workload: '327h (6 formações)',
    certificateUrl: 'https://drive.google.com/file/d/1bQkJt_DSYewDTrig2vYZG9HW1mNUpueC/view?usp=drivesdk',
    technologies: ['Java', 'Spring Boot', 'Orientação a objetos'],
    description: 'Programação, Java, orientação a objetos, Spring Boot, agilidade e desenvolvimento pessoal.',
  },
  {
    id: 'aws-restart',
    title: 'AWS re/Start',
    institution: 'Escola da Nuvem',
    date: 'Dezembro de 2023',
    sort: '2023-12',
    category: 'formacao',
    workload: '176h',
    badgeUrl: 'https://www.credly.com/badges/4978ba17-33d2-408a-b372-17ca7ec90fbd',
    technologies: ['AWS', 'Linux', 'Redes'],
    description: 'Capacitação prática imersiva focada no ecossistema AWS. Inclui administração de sistemas Linux por linha de comando, arquitetura de redes (TCP/IP, DNS, Subnets), segurança e automação de serviços em nuvem por meio de laboratórios práticos. ',
  },

  // ---------- Curso ----------
  {
    id: 'ia-visao-computacional',
    title: 'Inteligência Artificial aplicada à Visão Computacional',
    institution: 'QualiFacti',
    date: '01/06/2024 a 30/09/2024',
    sort: '2024-09',
    category: 'curso',
    workload: '240h (assíncrono)',
    certificateUrl: 'https://drive.google.com/file/d/1eSYtXxpmA3DyF8dCpPc4fTBPv7alXfQo/view?usp=drivesdk',
    technologies: ['IA', 'Visão computacional'],
  },
  {
    id: 'proz-preparatorio-arquitetura-aws',
    title: 'Preparatório para Arquitetura de Soluções em Nuvem AWS',
    institution: 'Proz',
    date: 'Agosto a 20/09/2024',
    sort: '2024-09',
    category: 'curso',
    workload: '100h',
    certificateUrl: 'https://drive.google.com/file/d/1yh-dzhxE8wCnNrbOebT9eSh5CPYajCSt/view?usp=drivesdk',
    technologies: ['AWS'],
    description: 'Formação intensiva voltada para o design de soluções seguras, resilientes, de alta performance e otimizadas para custos na nuvem AWS. O conteúdo abordou os principais tópicos da certificação: computação (EC2, Lambda), redes seguras (VPC, Route 53), armazenamento (S3, EBS), bancos de dados (RDS, DynamoDB), além de gerenciamento de identidade, segurança (IAM) e alta disponibilidade (ELB, Auto Scaling).',
  },
  {
    id: 'ada-trilha-devops',
    title: 'Trilha Digital / Coders 24 / DevOps',
    institution: 'ADA Tech',
    date: 'Junho de 2024',
    sort: '2024-06',
    category: 'curso',
    workload: '16h',
    certificateUrl: 'https://drive.google.com/file/d/14EvC1xu955cWpT1gc3YilHn__euEd3JN/view?usp=drivesdk',
    verification: 'https://ada.tech/certificado?code=7cad7aa7-9c97-af1c-e5ec-d95ada3a6fce',
    technologies: ['DevOps', 'Cloud', 'Kubernetes', 'Docker', 'Linux', 'Terraform'],
    // Descrição do site anterior (o arquivo não traz)
    description: 'Certificação em DevOps, Cloud Computing e ferramentas de infraestrutura como código',
  },
  {
    id: 'o2b-observabilidade',
    title: 'Trilha Foundation e Introdução à Observabilidade',
    institution: 'O2B Academy',
    date: '28/05/2024 a 09/07/2024',
    sort: '2024-07',
    category: 'curso',
    workload: '24h',
    certificateUrl: 'https://drive.google.com/file/d/1KnBNuIYjtalT7T9l-UmNcIiedgvrdQG1/view?usp=drivesdk',
    technologies: ['Prometheus', 'Grafana', 'Docker', 'Linux', 'AlertManager'],
    description: 'Foco em monitoramento, coleta de métricas e alertas em ambientes containerizados utilizando Prometheus, Grafana, AlertManager, Docker e Linux.'
  },
  {
    id: 'business-agility',
    title: 'Business Agility (parte do ONE TGF)',
    institution: 'Oracle / Alura',
    date: '20/03/2024',
    sort: '2024-03',
    category: 'curso',
    workload: '27h (4 cursos)',
    certificateUrl: 'https://drive.google.com/file/d/13xw-jbxqNTkao4A1RbATgvNWOxKEB4Ar/view?usp=drivesdk',
  },
  {
    id: 'proz-redes-linux-aws',
    title: 'Redes e Linux Essentials para AWS',
    institution: 'Proz',
    date: 'Julho de 2024',
    sort: '2024-07',
    category: 'curso',
    workload: '15h',
    certificateUrl: 'https://arquitetos.joyclass.com/certificate?hash=4480603c8347e87ea14b329d21d105db14fc910f',
    technologies: ['Redes', 'Linux', 'AWS'],
    description: 'Domínio de fundamentos de redes e comandos essenciais de Linux aplicados à arquitetura e infraestrutura de nuvem AWS.',
  },
  {
    id: 'olimpiadas-azure',
    title: 'Olimpíadas Azure',
    institution: 'Microsoft',
    date: 'Dezembro de 2024',
    sort: '2024-12',
    category: 'curso',
    workload: '30h',
    // Link de verificação informado nas ressalvas do arquivo
    verification: 'https://olimpiadas.tftec.com.br/verificar/P3MCQq9aeB',
    technologies: ['Azure'],
    description: 'Competição de conhecimentos em serviços de nuvem Microsoft Azure (VMs, VNet, Entra ID, App Services, Azure Functions, Azure DevOps, entre outros).',
  },
  {
    id: 'dio-java-cloud-aws',
    title: 'Desenvolvimento Java com Cloud AWS',
    institution: 'DIO',
    date: '2023',
    sort: '2023-11',
    category: 'curso',
    workload: '4h',
    technologies: ['Java', 'AWS'],
    // Descrição do site anterior (o arquivo não traz)
    description: 'Desenvolvimento de aplicações Java integradas com serviços AWS',
  },
  {
    id: 'rocketseat-java',
    title: 'Curso Online de Java',
    institution: 'Rocketseat',
    date: '09 a 13/10/2023',
    sort: '2023-10',
    category: 'curso',
    workload: '5h',
    certificateUrl: 'https://drive.google.com/file/d/1BP_X937LD9l4y_dTGDt8snud4Q6AKCch/view?usp=sharing',
    verification: 'app.rocketseat.com.br/certificates, código 52d1306d-486d-483b-8693-eef63b331fb4',
    technologies: ['Java'],
  },
  {
    id: 'santander-mindset-digital',
    title: 'Transformação e Mindset Digital',
    institution: 'Santander Desenvolve',
    date: '25/09/2023',
    sort: '2023-09',
    category: 'curso',
    workload: '2h',
    certificateUrl: 'https://drive.google.com/file/d/1UssWohdPcMJwSQd0_FslLKjtc5dlJ4y3/view?usp=drivesdk',
  },
  {
    id: 'dio-dominando-java',
    title: 'Dominando a Linguagem de Programação Java',
    institution: 'DIO',
    date: 'Setembro de 2023',
    sort: '2023-09',
    category: 'curso',
    workload: '4h',
    // Descrição do site anterior (o arquivo não traz)
    description: 'Curso avançado de programação Java e orientação a objetos',
  },
  {
    id: 'dio-sql-nosql',
    title: 'Banco de Dados SQL e NoSQL para Devs',
    institution: 'DIO',
    date: '2023',
    sort: '2023-08',
    category: 'curso',
    workload: '4h',
    technologies: ['SQL', 'NoSQL'],
    // Descrição do site anterior (o arquivo não traz)
    description: 'Fundamentos de bancos de dados relacionais e não-relacionais',
  },
  {
    id: 'semana-tecnologia-java',
    title: 'Semana da Tecnologia com ênfase em Java',
    institution: 'Projeto Java Web',
    date: '28 a 31/07/2023',
    sort: '2023-07',
    category: 'curso',
    workload: '4h',
    certificateUrl: 'https://drive.google.com/file/d/1_JlwPRb0jjATOljDTU_kPJIrTqxQi_W0/view?usp=drivesdk',
    technologies: ['Java', 'Spring Boot', 'REST API', 'MVC'],
  },
  {
    id: 'strati-ransomware',
    title: 'Semana do Combate ao Ransomware',
    institution: 'Strati',
    date: '2023',
    sort: '2023-04',
    category: 'curso',
    workload: '4h',
    technologies: ['Segurança'],
    // Descrição do site anterior (o arquivo não traz)
    description: 'Treinamento em segurança cibernética e prevenção a ataques ransomware',
  },
  {
    id: 'hacker-profissional',
    title: 'Hacker Profissional (segurança da informação e hacking ético)',
    institution: 'Bruno Fraga',
    date: '21/02/2023',
    sort: '2023-02',
    category: 'curso',
    workload: '12h',
    certificateUrl: 'https://drive.google.com/file/d/1tKcARN6OMYMWJcCNdOl7KqZARmP98Vme/view?usp=drivesdk',
    technologies: ['Segurança'],
    // Descrição do site anterior (o arquivo não traz)
    description: 'Curso de técnicas de penetration testing e segurança ofensiva',
  },
  {
    id: 'coodesh-javascript-jquery',
    title: 'Programação Front-End em JavaScript e jQuery',
    institution: 'Coodesh',
    // "sem data" no arquivo: só o sort é usado para ordenar
    sort: '2023-01',
    category: 'curso',
    workload: '82 min',
    certificateUrl: 'https://coodesh.com/share/certificates/675073fc18637312ec715e2c',
    technologies: ['JavaScript', 'jQuery'],
  },
  {
    id: 'bootcamp-nexa-ia-generativa',
    title: 'Bootcamp Nexa: Fundamentos de IA Generativa e Claude 3',
    institution: 'DIO (Nexa)',
    date: '8 de junho de 2024',
    sort: '2024-06',
    category: 'curso',
    workload: '10h',
    certificateUrl: 'https://www.dio.me/certificate/HQ57H3OP/share',
    technologies: ['IA generativa', 'Claude 3'],
  },
  {
    id: 'sql-linguagem-banco-de-dados',
    title: 'Curso Express: SQL, Linguagem de Banco de Dados',
    institution: 'ENG DTP & Multimídia',
    // Sem data e sem sort: vai para o fim da lista
    category: 'curso',
    workload: '3h',
    certificateUrl: 'https://drive.google.com/file/d/1EzXSSpEuG8rh9updtYAjOBm7ygd-t6pQ/view?usp=drivesdk',
    technologies: ['SQL'],
  },
  {
    id: 'pucrs-lideranca-saudavel',
    title: 'Liderança Saudável',
    institution: 'PUCRS',
    date: '2022',
    sort: '2022-03',
    category: 'curso',
    softSkill: true,
    workload: '2h',
    certificateUrl: 'https://drive.google.com/file/d/1udcxoLialgVFXORDf-AbIQH7abyIR02C/view?usp=drivesdk',
    // Descrição do site anterior (o arquivo não traz)
    description: 'Formação em liderança, gestão de pessoas e transformação organizacional',
  },
  {
    id: 'pucrs-lideranca-resiliencia',
    title: 'Liderança, Capacidade de Aprender e Resiliência',
    institution: 'PUCRS',
    date: '2021',
    sort: '2021-06',
    category: 'curso',
    softSkill: true,
    workload: '4h',
    certificateUrl: 'https://drive.google.com/file/d/1umXMmDd0B3m5o273CciGWrBNhTexaNd0/view?usp=drivesdk',
  },
  {
    id: 'bradesco-aprendizagem-criativa',
    title: 'Conceitos de Aprendizagem Criativa',
    institution: 'Fundação Bradesco',
    date: '2021',
    sort: '2021-03',
    category: 'curso',
    softSkill: true,
    workload: '6h',
    certificateUrl: 'https://drive.google.com/file/d/1ul1_zBsdKoNj_t3f8KduMJh0O_fstqP4/view?usp=drivesdk',
  },
  {
    id: 'escola-da-nuvem-arquiteto-solucoes',
    title: 'Desenvolvimento Profissional para Carreiras em Nuvem: Formação para Arquiteto de Soluções AWS',
    institution: 'Escola da Nuvem',
    date: '13 de dezembro de 2024',
    sort: '2024-12',
    category: 'curso',
    workload: '110h',
    technologies: ['AWS', 'Arquitetura'],
    description: 'Curso de extensão com aulas ao vivo focadas em competências técnicas e profissionais: princípios de design arquitetônico baseados nos requisitos do cliente e projeto de sistemas distribuídos escaláveis, resilientes e tolerantes a falhas.',
  },

  // ---------- Só no site anterior (mantido como estava) ----------
  {
    id: 'pucrs-jornada-inteligencia-profissional',
    title: 'Certificação em Jornada da Inteligência Profissional',
    institution: 'PUCRS',
    date: 'Agosto de 2022',
    sort: '2022-08',
    category: 'certificacao',
    description: 'Desenvolvimento de inteligência emocional e competências profissionais',
  },
]

// Mais recente primeiro. No mesmo ano, soft skills vêm depois dos itens técnicos.
// Itens sem data (sem sort) ficam no fim, na ordem do arquivo.
const sortKey = (c: Certificate) => {
  if (!c.sort) return null
  const [year, month] = c.sort.split('-').map(Number)
  return { year, month, soft: c.softSkill ? 1 : 0 }
}

export const certificates: Certificate[] = items
  .map((item, index) => ({ item, index }))
  .sort((a, b) => {
    const ka = sortKey(a.item)
    const kb = sortKey(b.item)
    if (!ka || !kb) return ka ? -1 : kb ? 1 : a.index - b.index
    return kb.year - ka.year || ka.soft - kb.soft || kb.month - ka.month || a.index - b.index
  })
  .map(({ item }) => item)
