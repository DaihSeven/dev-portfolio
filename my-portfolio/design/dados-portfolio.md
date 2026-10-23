# Dados do portfólio (fonte das Etapas 4 e 5)

Salvar em `my-portfolio/design/dados-portfolio.md`. Este arquivo é a fonte de verdade para `src/data/projects.ts` e `src/data/certificates.ts`. Onde estiver "a confirmar", não invente: deixe o campo vazio e não renderize.

---

## PROJETOS

Categorias: `frontend`, `backend`, `fullstack`, `devops`, `dados-ia`.
Capa: `print` = tentar captura real do site no ar; `svg` = criar ilustração simbólica (ver regras no fim desta seção).

### skyhawk-drone-systems (já existe no site, manter dados e imagem atuais)
- Categoria: frontend | Destaque: sim | Status: concluído | Tipo: freelance
- Stack: Next.js, React, TypeScript, Tailwind CSS, CSS Modules
- Descrição: Plataforma web de monitoramento aéreo inteligente, com interface tática, demonstrações operacionais e área de treinamento. Arquitetura modular em Next.js App Router.
- Links: manter os atuais
- Capa: manter `public/projects/` atual

### watchtower
- Título: Watchtower | Categoria: fullstack | Destaque: sim
- Stack: React, TypeScript, Node.js, Express, PostgreSQL, Swagger, Tailwind
- Descrição: Plataforma colaborativa para localização de pessoas desaparecidas: API e frontend com mapa e gestão de casos.
- Online: https://watchtower-frontend-three.vercel.app
- GitHub front: https://github.com/DaihSeven/watchtower-frontend
- GitHub back: https://github.com/DaihSeven/watchtower-backend
- Capa: print do site online

### finance-reminder-api
- Título: Finance Reminder API | Categoria: backend
- Stack: Node.js, TypeScript, PostgreSQL, Docker, CI/CD, bcrypt, Render
- Descrição: API RESTful que gerencia contas a pagar e avisa antes do vencimento.
- GitHub: https://github.com/DaihSeven/finance-reminder-api
- Capa: svg (calendário com sino de aviso e moedas)

### finance-reminder-frontend
- Título: Finance Reminder Frontend | Categoria: frontend
- Stack: React, TypeScript, Vite, React Router, Axios, Netlify
- Descrição: Interface web de gerenciamento de contas e despesas, integrada à API.
- GitHub: https://github.com/DaihSeven/finance-reminder-frontend
- Capa: svg (painel com gráfico de despesas e lista de contas)

### ajudasocial-api
- Título: AjudaSocial API | Categoria: backend | Destaque: sim
- Stack: Node.js, Express, MVC, PostgreSQL, Prisma, Swagger, Render
- Descrição: Conecta pessoas em vulnerabilidade a abrigos, alimentação e assistência jurídica.
- Online: https://ajudasocial-api-yxbj.onrender.com
- GitHub: https://github.com/DaihSeven/AjudaSocial_API
- Capa: svg (casa com coração e mãos acolhendo)

### client-social-connect
- Título: Client Social Connect | Categoria: frontend
- Stack: React, TypeScript, Next.js, Tailwind CSS, Vercel
- Descrição: Frontend que consome a AjudaSocial API.
- GitHub: https://github.com/DaihSeven/client-social-connect
- Capa: svg (telas de celular e navegador ligadas por uma linha à casa do AjudaSocial)

### mlops-anomalias
- Título: Detecção de Anomalias como Serviço (mini plataforma de MLOps) | Categoria: dados-ia | Destaque: sim
- Stack: Python, MLOps (a confirmar o restante: se tiver acesso, ler README e requirements do repositório com `gh`; senão mostrar só estes dois)
- Descrição: Plataforma de MLOps de ponta a ponta em torno de um modelo leve de detecção de anomalias. O foco não é o modelo, e sim o que uma equipe de MLOps constrói ao redor dele: treino reprodutível, versionamento, serviço via API, monitoramento de desempenho e de desvio dos dados (drift), alertas e, nas próximas etapas, CI/CD com retreino agendado e portão de qualidade.
- GitHub: https://github.com/DaihSeven/mlops-anomalias
- Capa: svg (ciclo circular com modelo, medidor e sino de alerta)

### observabilidade
- Título: Observabilidade | Categoria: devops
- Stack: Python, Docker, Docker Compose, Prometheus, Grafana, AlertManager
- Descrição: Métricas, dashboards e alertas.
- GitHub: https://github.com/DaihSeven/desafio-obs
- Capa: svg (medidor e gráfico de linha com sino de alerta; sem logos de marcas)

### food-rescue
- Título: Food-Rescue | Categoria: backend
- Stack: Node.js, Express, Prisma, PostgreSQL, Jest, Swagger
- Descrição: API desenvolvida em equipe, com CRUD, testes automatizados e documentação.
- Observação: o repositório aparece como fork. Rotular como "Projeto em equipe".
- Documentação: https://food-rescue-1-16nz.onrender.com/api-docs
- GitHub: https://github.com/DaihSeven/Food-Rescue
- Capa: print da documentação Swagger; se o site demorar mais de 30s (Render dorme), usar svg (cesta com folha)

### project-azimuth
- Título: Project Azimuth | Categoria: dados-ia
- Stack: Python, PostgreSQL, Pandas, NumPy
- Descrição: Ingestão, modelagem e exploração de dados com algoritmos preditivos.
- GitHub: https://github.com/DaihSeven/Project-Azimuth
- Capa: svg (bússola com pontos de dados ao redor)

### assistente-virtual-ia
- Título: Assistente Virtual com IA | Categoria: dados-ia
- Stack: Python, NLP, IA generativa, Streamlit
- Descrição: Assistente virtual com processamento de linguagem natural.
- GitHub: https://github.com/DaihSeven/assistente-virtual-ia
- Capa: svg (balões de conversa com faíscas)

### deteccao-anomalias
- Título: Detecção de Anomalias | Categoria: dados-ia
- Stack: Python, Pandas
- Descrição: Identificação de padrões e anomalias em dados.
- GitHub: https://github.com/DaihSeven/deteccao-anomalias-python
- Capa: svg (série temporal com um ponto destacado em vermelho)

### dockeditems
- Título: DockedItems | Categoria: backend
- Stack: JavaScript, Docker
- Descrição: API de gerenciamento de itens dockerizada.
- GitHub: https://github.com/DaihSeven/DockedItems
- Capa: svg (contêiner com caixas de itens)

### landing-adac
- Título: Landing page responsiva, ADAC Softwares | Categoria: frontend
- Stack: React
- Descrição: Landing page responsiva (frontend).
- GitHub: https://github.com/DaihSeven/frontend-test-adac-softwares
- Capa: svg (wireframe de landing page em desktop e celular)

### dev-portfolio
- Título: Dev Portfolio (01/2026) | Categoria: frontend
- Stack: Next.js 14, React 18, Tailwind CSS
- Descrição: Portfólio responsivo com projetos, habilidades e certificações.
- Online: https://dev-portfolio-murex-phi.vercel.app
- GitHub: https://github.com/DaihSeven/dev-portfolio
- Capa: print do site online (é a versão anterior; serve como histórico)

### hypecode-automacoes (card que eu criei no design a partir da sua experiência; sem link público)
- Título: Automações e integrações, HypeCode | Categoria: fullstack | Tipo: freelance
- Stack: Python, Flask, Node.js, MySQL, Redis, Docker
- Descrição: APIs, automações e dashboards que conversam com IA, WhatsApp, Telegram e CRM. Infraestrutura em AWS.
- Links: nenhum (projeto de cliente; não mostrar botão)
- Capa: svg (engrenagens conectadas a balões de mensagem)

### Projetos do site atual que NÃO estão nesta lista
CONFIRMADO PELA DAIANE: manter (ex.: Study Manager API). Regras: (a) se um projeto do site atual for o mesmo de um item acima (mesmo repositório ou título parecido), manter UMA só entrada, com os dados deste arquivo; (b) se já existir print em public/projects/ para o projeto, usar esse print e NÃO criar capa nova; (c) os demais ficam como estão, mapeando a categoria antiga para uma das novas.

### Regras das capas em SVG
- Salvar em `public/projects/covers/<id>.svg`, viewBox 800x600 (4:3), fundo creme `#F2EADC`.
- Estilo de linha fina (stroke 3), traço `#1E3A45`, acentos `#C8453C` (tulipa), `#DD7C8C` (rosa) e `#C08318` (dourado). Um motivo central grande, poucos detalhes, sem texto e sem logos de marcas.
- Um pequeno detalhe floral (broto ou folha) em cada capa, para manter a identidade do site.
- Prints reais: 1200x900, otimizados (jpg/webp, menos de 200 KB), salvos em `public/projects/<id>.jpg`.

---

## CERTIFICAÇÕES, FORMAÇÕES E CURSOS

Campos: título | instituição | categoria | data de exibição | sort (AAAA-MM) | carga | links | observações.
Links `badge` = badge no Credly; `cert` = arquivo do certificado.
Itens sem carga horária ou sem link: deixar o campo vazio e não renderizar o botão.
**Não somar carga horária em nenhum total.** Business Agility faz parte do ONE.

### Categoria: certificacao
1. AWS Certified Solutions Architect – Associate | Amazon Web Services | Setembro de 2025 | 2025-09 | destaque | badge: https://www.credly.com/badges/52bb3cae-85d9-48dd-9631-7ea0c0af1760/public_url | tecnologias: AWS, Arquitetura, Well-Architected | descrição: Arquitetura de soluções na nuvem AWS com base no Well-Architected Framework: sistemas distribuídos seguros, resilientes, de alto desempenho e econômicos, além da análise de soluções existentes.
2. AWS Certified AI Practitioner | Amazon Web Services | Setembro de 2025 | 2025-09 | destaque | badge: https://www.credly.com/badges/004411ab-f5df-421f-b630-438dda77ba6f | tecnologias: IA generativa, Machine Learning, AWS | descrição: Serviços de IA e machine learning da AWS: conceitos, métodos e estratégias de IA, ML e IA generativa.
3. AWS Certified Cloud Practitioner | Amazon Web Services | Dezembro de 2023 | 2023-12 | badge: https://www.credly.com/badges/70da7f47-8cd5-4258-9c1a-9031055fa506/linked_in_profile | tecnologias: AWS, Cloud | descrição: Fundamentos de computação em nuvem, serviços essenciais da AWS, custos e segurança.
4. Google Cloud Arcade Brazil 2026 (facilitadora) | SoulCode Academy, com Google Cloud | Junho de 2026 | 2026-06 | sem link | tecnologias: Google Cloud, Vertex AI, IAM | descrição: Atuação como facilitadora e laboratórios práticos de IAM, Compute Engine, Cloud Storage, Cloud Shell, Cloud Spanner e Vertex AI.
5. Micro certificação: Programação para Internet | CUESC, Centro Universitário Estácio de Santa Catarina | Dezembro de 2024 | 2024-12 | 280h | cert: https://certificado.estacio.br/b96d1cfceb8fab108cfcab9 | disciplinas: Desenvolvimento Web em HTML5, CSS, JavaScript e PHP (120h); Paradigmas de Linguagens de Programação em Python (80h); Desenvolvimento de Software Seguro (80h) | tecnologias: HTML5, CSS, JavaScript, PHP, Python
6. Micro certificação: Programação de Sistemas de Informação | CUESC | Dezembro de 2024 | 2024-12 | 240h | cert: https://certificado.estacio.br/5515ed0352034aa47868ba7 | disciplinas: Programação Orientada a Objetos em Java (80h); Modelagem de Sistemas em UML (80h); Desenvolvimento de Software Seguro (80h) | tecnologias: Java, UML
7. Micro certificação: Direitos e Privacidade dos Usuários | CUESC | Dezembro de 2024 | 2024-12 | 240h | cert: https://certificado.estacio.br/cc3ed8ec51a3d812b6b7919 | disciplinas: Introdução à Segurança da Informação (80h); Sistemas de Informação e Sociedade (80h); Desenvolvimento de Software Seguro (80h) | tecnologias: Segurança da informação

### Categoria: formacao
8. Bootcamp Afya: Automação de Dados com IA | Afya / DIO | Concluído em 11 de julho de 2026 | 2026-07 | 51h | cert: https://hermes.dio.me/certificates/cover/YEKUV6V0.jpg | tecnologias: Python, POO, SQL, Machine Learning, IA generativa | descrição: Programa de formação em automação de dados e IA, com 32 cursos, desafios de código e projetos práticos voltados à automação, análise de dados e soluções com IA.
9. Pulsar STEM 2026: Mentoria para Mulheres na Tecnologia | NTT DATA Foundation | 2026 | 2026-01 | 17h | link: no LinkedIn (sem URL; não renderizar botão) | descrição: Programa de mentoria para mulheres na tecnologia.
10. Desenvolvimento Web Full Stack | Programadores do Amanhã | Julho de 2024 a julho de 2025 | 2025-07 | destaque | carga: a confirmar | tecnologias: React, Node.js, SQL | descrição: Formação completa em desenvolvimento web, com foco em React, Node.js e bancos de dados.
12. Oracle Next Education (ONE) F2 TGF | Oracle / Alura | Finalizado em 25 de março de 2024 | 2024-03 | 327h (6 formações) | cert: https://drive.google.com/file/d/1bQkJt_DSYewDTrig2vYZG9HW1mNUpueC/view?usp=drivesdk | tecnologias: Java, Spring Boot, Orientação a objetos | descrição: Programação, Java, orientação a objetos, Spring Boot, agilidade e desenvolvimento pessoal.
13. AWS re/Start | Escola da Nuvem | Dezembro de 2023 | 2023-12 | 176h | badge: https://www.credly.com/badges/4978ba17-33d2-408a-b372-17ca7ec90fbd | tecnologias: AWS, Linux, Redes | descrição: Fundamentos de nuvem AWS com laboratórios práticos.

### Categoria: curso
14. Inteligência Artificial aplicada à Visão Computacional | QualiFacti | 01/06/2024 a 30/09/2024 | 2024-09 | 240h (assíncrono) | cert: https://drive.google.com/file/d/1eSYtXxpmA3DyF8dCpPc4fTBPv7alXfQo/view?usp=drivesdk | tecnologias: IA, Visão computacional
15. Preparatório para Arquitetura de Soluções em Nuvem AWS | Proz | Agosto a 20/09/2024 | 2024-09 | 100h | cert: https://drive.google.com/file/d/1yh-dzhxE8wCnNrbOebT9eSh5CPYajCSt/view?usp=drivesdk | tecnologias: AWS | descrição: Preparação para a certificação Solutions Architect: dois meses, 2 dias por semana, mínimo 3h por dia.
16. Trilha Digital / Coders 24 / DevOps | ADA Tech | Junho de 2024 | 2024-06 | 16h | cert: https://drive.google.com/file/d/14EvC1xu955cWpT1gc3YilHn__euEd3JN/view?usp=drivesdk | verificação: https://ada.tech/certificado?code=7cad7aa7-9c97-af1c-e5ec-d95ada3a6fce | tecnologias: DevOps, Cloud, Kubernetes, Docker, Linux, Terraform
17. Trilha Foundation e Introdução à Observabilidade | O2B Academy | 28/05/2024 a 09/07/2024 | 2024-07 | 24h | cert: https://drive.google.com/file/d/1KnBNuIYjtalT7T9l-UmNcIiedgvrdQG1/view?usp=drivesdk | tecnologias: Prometheus, Grafana, Docker, Linux, AlertManager
18. Business Agility (parte do ONE TGF) | Oracle / Alura | 20/03/2024 | 2024-03 | 27h (4 cursos) | cert: https://drive.google.com/file/d/13xw-jbxqNTkao4A1RbATgvNWOxKEB4Ar/view?usp=drivesdk | observação: faz parte do ONE, não somar às 327h
19. Redes e Linux Essentials para AWS | Proz | Julho de 2024 | 2024-07 | 15h | cert: https://arquitetos.joyclass.com/certificate?hash=4480603c8347e87ea14b329d21d105db14fc910f | tecnologias: Redes, Linux, AWS
20. Olimpíadas Azure | Microsoft | Dezembro de 2024 | 2024-12 | carga: a confirmar | descrição: Competição de conhecimentos em serviços de nuvem Microsoft Azure (VMs, VNet, Entra ID, App Services, Azure Functions, Azure DevOps, entre outros). | tecnologias: Azure
21. Desenvolvimento Java com Cloud AWS | DIO | 2023 | 2023-11 | carga: a confirmar (até 8h) | tecnologias: Java, AWS
22. Curso Online de Java | Rocketseat | 09 a 13/10/2023 | 2023-10 | 5h | cert: https://drive.google.com/file/d/1BP_X937LD9l4y_dTGDt8snud4Q6AKCch/view?usp=sharing | verificação: app.rocketseat.com.br/certificates, código 52d1306d-486d-483b-8693-eef63b331fb4 | tecnologias: Java
23. Transformação e Mindset Digital | Santander Desenvolve | 25/09/2023 | 2023-09 | 2h | cert: https://drive.google.com/file/d/1UssWohdPcMJwSQd0_FslLKjtc5dlJ4y3/view?usp=drivesdk
24. Dominando a Linguagem de Programação Java | DIO | Setembro de 2023 | 2023-09 | carga: a confirmar (até 8h) | (só existe no site atual; manter)
25. Banco de Dados SQL e NoSQL para Devs | DIO | 2023 | 2023-08 | carga: a confirmar (até 8h) | tecnologias: SQL, NoSQL
26. Semana da Tecnologia com ênfase em Java | Projeto Java Web | 28 a 31/07/2023 | 2023-07 | 4h | cert: https://drive.google.com/file/d/1_JlwPRb0jjATOljDTU_kPJIrTqxQi_W0/view?usp=drivesdk | tecnologias: Java, Spring Boot, REST API, MVC
27. Semana do Combate ao Ransomware | Strati | 2023 | 2023-04 | 4h | tecnologias: Segurança
28. Hacker Profissional (segurança da informação e hacking ético) | Bruno Fraga | 21/02/2023 | 2023-02 | 12h | cert: https://drive.google.com/file/d/1tKcARN6OMYMWJcCNdOl7KqZARmP98Vme/view?usp=drivesdk | tecnologias: Segurança
29. Programação Front-End em JavaScript e jQuery | Coodesh | sem data | 2023-01 | 82 min | cert: https://coodesh.com/share/certificates/675073fc18637312ec715e2c | tecnologias: JavaScript, jQuery
30. Bootcamp Nexa: Fundamentos de IA Generativa e Claude 3 | DIO (Nexa) | 8 de junho de 2024 | 2024-06 | 10h | cert: https://www.dio.me/certificate/HQ57H3OP/share | tecnologias: IA generativa, Claude 3 (a Daiane deve confirmar se "Descubra a Nuvem AWS, Nexa Resources" é outro certificado; se for, adicionar à parte)
31. Curso Express: SQL, Linguagem de Banco de Dados | ENG DTP & Multimídia | sem data | 3h | cert: https://drive.google.com/file/d/1EzXSSpEuG8rh9updtYAjOBm7ygd-t6pQ/view?usp=drivesdk | tecnologias: SQL
32. Liderança Saudável | PUCRS | 2022 | 2022-03 | 2h | cert: https://drive.google.com/file/d/1udcxoLialgVFXORDf-AbIQH7abyIR02C/view?usp=drivesdk | (soft skills)
33. Liderança, Capacidade de Aprender e Resiliência | PUCRS | 2021 | 2021-06 | 4h | cert: https://drive.google.com/file/d/1umXMmDd0B3m5o273CciGWrBNhTexaNd0/view?usp=drivesdk | (soft skills)
34. Conceitos de Aprendizagem Criativa | Fundação Bradesco | 2021 | 2021-03 | 6h | cert: https://drive.google.com/file/d/1ul1_zBsdKoNj_t3f8KduMJh0O_fstqP4/view?usp=drivesdk | (soft skills)
35. Desenvolvimento Profissional para Carreiras em Nuvem: Formação para Arquiteto de Soluções AWS | Escola da Nuvem | 13 de dezembro de 2024 | 2024-12 | 110h | sem link | tecnologias: AWS, Arquitetura | descrição: Curso de extensão com aulas ao vivo focadas em competências técnicas e profissionais: princípios de design arquitetônico baseados nos requisitos do cliente e projeto de sistemas distribuídos escaláveis, resilientes e tolerantes a falhas.
Itens que só existem no site atual e não estão acima (ex.: "Jornada da Inteligência Profissional", PUCRS, Agosto 2022): manter como estão.

Os cursos 32, 33 e 34 são soft skills: mostrar normalmente, mas depois dos cursos técnicos de mesmo ano.

---

## PENDÊNCIAS (respondidas em 23/10/2026)
- Olimpíadas Azure: dezembro de 2024. Aplicado.
- Redes e Linux Essentials: Proz, julho de 2024, 15h, com link. Aplicado.
- Arquiteto de Soluções AWS (Escola da Nuvem): o certificado diz emitido em dezembro de 2024, concluído em 13/12/2024, 110h, e deve ficar na categoria curso. Aplicado. (A Daiane também citou "setembro de 2025", que é a data da prova AWS SAA; usar a do certificado.)
- Projetos antigos: manter. Aplicado.
- AWS re/Start: 176h e badge. Aplicado.

## ressalvas
- Programadores do Amanhã: desenvolvimento full stack é 720 horas, o atual de Especialização em IA para Devs é de 100 horas que é de agosto a dezembro de 2026
- Olimpíadas Azure 30 horas https://olimpiadas.tftec.com.br/verificar/P3MCQq9aeB
e DIO (3 cursos 4 horas cada, os que faltavam;
- Pulsar STEM: sem link mesmo 
- "Descubra a Nuvem AWS (Nexa Resources)" é um certificado separado do Bootcamp Nexa? é um bootcampo curto e faz parte