'use client'

import { technologies, type TechnologyCategory } from '@/data/technologies'
import { useInView } from '@/hooks/useInView'
import { Trophy, Tv, BookOpen, Cake, Sprout, HeartHandshake, Briefcase, Sparkles, Cloud, Rocket } from 'lucide-react'
import SquiggleUnderline from '@/components/decor/SquiggleUnderline'

// Ordem de exibição das categorias no bloco único de Tecnologias
const displayOrder: TechnologyCategory[] = ['Backend', 'Infra/Cloud', 'Frontend', 'Dados']

// Concatena as categorias nessa sequência, mantendo dentro de cada uma a ordem do array de dados
const orderedTechnologies = displayOrder.flatMap((category) =>
  technologies.filter((tech) => tech.category === category)
)

const hobbies = [
  { icon: Trophy, gradient: 'from-red-600 to-red-800', text: 'Torcedora fanática do Corinthians!' },
  { icon: Tv, gradient: 'from-purple-500 to-purple-700', text: 'Fã de séries Turcas' },
  { icon: BookOpen, gradient: 'from-amber-600 to-amber-800', text: 'Amante dos Livros' },
  { icon: Cake, gradient: 'from-yellow-500 to-yellow-700', text: 'Adoro criar e decorar bolos nos finais de semana' },
  { icon: Sprout, gradient: 'from-green-500 to-green-700', text: 'Cuidar das minhas plantas é minha terapia' },
]

// Fade-in subindo. Com prefers-reduced-motion as classes motion-safe não se aplicam,
// então o conteúdo já aparece visível e sem transição.
const reveal = (visible: boolean) =>
  `motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
    visible ? 'opacity-100 translate-y-0' : 'motion-safe:opacity-0 motion-safe:translate-y-6'
  }`

const revealItem = (visible: boolean) =>
  `motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
    visible ? 'opacity-100 translate-y-0' : 'motion-safe:opacity-0 motion-safe:translate-y-4'
  }`

export default function About() {
  const { ref: introRef, inView: introVisible } = useInView<HTMLDivElement>()

  return (
    <section id="sobre" className="pt-8 bg-rose-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Sobre Mim
        </h2>
        <SquiggleUnderline className="block w-28 h-3 mx-auto mb-12 text-rose-500" />

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div ref={introRef} className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className={`md:w-2/3 ${reveal(introVisible)}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Estudante de Engenharia de Software (8° período)
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
            <div
              className={`md:w-1/3 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 ${reveal(introVisible)}`}
              style={{ transitionDelay: '150ms' }}
            >
              <h4 className="font-bold text-gray-900 mb-4"><Sparkles size={18} className="inline-block align-text-bottom mr-1" aria-hidden /> Meus Hobbies</h4>
              <div className="space-y-4">
                {hobbies.map(({ icon: Icon, ...hobby }, index) => (
                  <div
                    key={hobby.text}
                    className={`flex items-start gap-3 ${revealItem(introVisible)}`}
                    // Atraso crescente: cada hobby entra 120ms depois do anterior
                    style={{ transitionDelay: `${400 + index * 120}ms` }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${hobby.gradient} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                      <Icon size={18} aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{hobby.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-rose-600"><HeartHandshake size={18} className="inline-block align-text-bottom mr-1" aria-hidden /> Voluntariado na Escola da Nuvem</span>
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
                <span className="text-blue-600"><Cloud size={18} className="inline-block align-text-bottom mr-1" aria-hidden /> Facilitadora Google Cloud Arcade (2026)</span>
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
                <span className="text-violet-600"><Briefcase size={18} className="inline-block align-text-bottom mr-1" aria-hidden /> Freelancer de Desenvolvimento Web</span>
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                HypeCode SoftwareHouse — Desenvolvedora Full Stack Júnior (Freelancer Remota) | 03/2026 – Presente
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-3">
                <li>Desenvolvimento e manutenção de APIs, automações e dashboards utilizando Python, Flask, Node.js e TypeScript, com foco em integrações com IA, WhatsApp, Telegram e CRM.</li>
                <li>Implementação de melhorias de infraestrutura e novas funcionalidades, incluindo análise e migração de serviços AWS, garantindo funcionalidade e conectividade com DNS e bancos de dados.</li>
                <li>Utilização de MySQL, Redis e Docker, assegurando qualidade de código e escalabilidade.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-3">
                SkyHawk Drones — Desenvolvedora Full Stack Júnior (Freelancer Remota) | 03/2026 – Presente
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
                <Rocket size={18} className="inline-block align-text-bottom mr-1" aria-hidden /> Aberta a oportunidades para aplicar meus conhecimentos em projetos reais e crescer junto com uma equipe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tecnologias em container mais largo (max-w-5xl) que o texto acima */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Tecnologias
        </h3>
        <div className="bg-white rounded-xl shadow-md p-4 border border-rose-100">
          <div className="flex flex-wrap gap-2">
            {orderedTechnologies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2 hover:border-rose-300 hover:shadow-sm transition-all"
              >
                <Icon className="w-4 h-4 text-rose-500 flex-shrink-0" aria-hidden />
                <span className="text-sm font-medium text-gray-800 leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}