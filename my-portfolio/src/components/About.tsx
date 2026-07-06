export default function About() {
 const technologies = [
  // Cloud & DevOps
  { name: 'AWS', icon: '☁️', color: 'bg-gray-100 text-blue-700' },
  { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-700' },
  { name: 'Google Cloud', icon: '🌫', color: 'bg-orange-100 text-orange-700' },
  
  // Backend & Databases
  { name: 'Java', icon: '☕', color: 'bg-red-100 text-red-700' },
  { name: 'Spring Boot', icon: '🌱', color: 'bg-green-100 text-green-700' },
  { name: 'Node.js', icon: '🟢', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Express', icon: '🚀', color: 'bg-gray-100 text-gray-700' },
  { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-100 text-blue-900' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-600' },
  { name: 'Prisma', icon: '🔧', color: 'bg-gray-100 text-gray-800' },
  
  // Frontend
  { name: 'React', icon: '🎀', color: 'bg-blue-100 text-gray-900' },
  { name: 'Next.js', icon: '▲', color: 'bg-gray-100 text-gray-900' },
  { name: 'TypeScript', icon: '📘', color: 'bg-blue-100 text-blue-700' },
  { name: 'Tailwind', icon: '🎨', color: 'bg-cyan-100 text-cyan-600' },
  { name: 'HTML5', icon: '📄', color: 'bg-orange-100 text-orange-600' },
  { name: 'CSS3', icon: '🎨', color: 'bg-blue-100 text-blue-600' },
  { name: 'Framer Motion', icon: '✨', color: 'bg-purple-100 text-purple-600' },
  
  // Ferramentas & Outros
  { name: 'Git', icon: '⌨', color: 'bg-orange-100 text-orange-800' },
  { name: 'GitHub', icon: '📦', color: 'bg-orange-100 text-orange-800' },
  { name: 'Linux', icon: '🐧', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Python', icon: '🐍', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'JWT', icon: '🔐', color: 'bg-purple-100 text-purple-800' },
  { name: 'bcrypt', icon: '🔒', color: 'bg-gray-100 text-gray-900' },
  { name: 'Swagger', icon: '📝', color: 'bg-green-100 text-green-800' },
  { name: 'Prometheus', icon: '📊', color: 'bg-red-100 text-red-900' },
  { name: 'Grafana', icon: '📈', color: 'bg-orange-100 text-orange-900' },
  { name: 'Google Workspace', icon: '🖥', color: 'bg-orange-100 text-orange-700' },
  

]

  return (
    <section id="sobre" className="pt-8 bg-rose-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Sobre Mim
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-12"></div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="md:w-2/3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Estudante de Engenharia de Software (7° período)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Apaixonada por tecnologia desde sempre, descobri minha verdadeira vocação na programação ao ingressar na faculdade. 
                Desde então, dedico-me a criar projetos práticos e construir uma base sólida em desenvolvimento, com foco principal 
                em Backend, mas com conhecimento completo do stack (full stack).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              Aplico meu aprendizado através de projetos pessoais, sempre buscando entender tanto o lado técnico quanto a experiência do usuário. Acredito que a melhor forma de aprender é praticando e compartilhando conhecimento.
            </p>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
              <h4 className="font-bold text-gray-900 mb-4">🌟 Meus Hobbies</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    ⚽
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Torcedora fanática do Corinthians!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    📺
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Fã de séries Turcas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    📚
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Amante dos Livros</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    🍰
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Adoro criar e decorar bolos nos finais de semana</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    🌱
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cuidar das minhas plantas é minha terapia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-rose-600">💙 Voluntariado na Escola da Nuvem</span>
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Evoluí de aluna para mentora, apoiando outros estudantes na preparação para as certificações 
                <span className="font-medium"> AWS Cloud Practitioner</span> e <span className="font-medium">AWS Solutions Architect</span>. 
                Ministrei aulas sobre soft skills (protagonismo, inteligência emocional, autoconhecimento) e gerenciei atividades educacionais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta experiência me ensinou muito sobre comunicação, trabalho em equipe e como ajudar pessoas a alcançarem seus objetivos.
              </p>
              <p className="text-rose-700"> 
                Fevereiro de 2024 - até o momento. 
              </p>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 border-l-4 border-rose-500">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">☁️ Facilitadora Google Cloud Arcade (2026)</span>
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Como Facilitadora do Google Cloud Arcade Brasil 2026, apoiei alunos em sua jornada de aprendizado e,
                 ao mesmo tempo, aprofundei meus conhecimentos em Google Cloud, IA Generativa e computação em nuvem 
                 por meio de laboratórios práticos. Desenvolvi experiência hands-on com serviços como IAM, 
                 Compute Engine, Cloud Storage, Cloud Shell, Cloud Spanner, Vertex AI e ferramentas Google Workspace, 
                 aplicando conceitos de infraestrutura, segurança, redes e automação.
              </p>
              <p className="text-blue-700"> 
                Janeiro de 2026 - até Maio 2026. 
              </p>
            </div>

            <div className="bg-violet-50 rounded-xl p-6 border-l-4 border-violet-500">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-violet-600">🧑‍💻 Freelancer de Desenvolvimento Web</span>
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                👾 HypeCode SoftwareHouse — Desenvolvedora Full Stack Júnior (Freelancer Remota) | 03/2026 – Presente
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
                <li>Desenvolvimento e manutenção de APIs, automações e dashboards utilizando Python, Flask, Node.js e TypeScript, com foco em integrações com IA, WhatsApp, Telegram e CRM.</li>
                <li>Implementação de melhorias de infraestrutura e novas funcionalidades, incluindo análise e migração de serviços AWS, garantindo funcionalidade e conectividade com DNS e bancos de dados.</li>
                <li>Utilização de MySQL, Redis e Docker, assegurando qualidade de código e escalabilidade.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-3">
                🎦 SkyHawk Drones — Desenvolvedora Full Stack Júnior (Freelancer Remota) | 03/2026 – Presente
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
                <li>Desenvolvimento e manutenção de plataforma web para monitoramento aéreo inteligente, incluindo simulador tático interativo (C2) e área de treinamento, utilizando Next.js, React, TypeScript, Tailwind CSS, Node.js e PostgreSQL.</li>
                <li>Criação de interfaces modernas, integrações de APIs REST, gerenciamento de conteúdo multimídia e execução de deploys, configurações de DNS, SSL/TLS e hospedagem em servidores/UOLHost.</li>
              </ul>
              <p className="text-violet-600">
                Março de 2026 - até o momento.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                🚀 Aberta a oportunidades para aplicar meus conhecimentos em projetos reais e crescer junto com uma equipe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Tecnologias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`${tech.color} p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-md hover:shadow-lg`}
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}