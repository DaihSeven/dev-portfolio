'use client'

import { technologies, type TechnologyCategory } from '@/data/technologies'
import { useInView } from '@/hooks/useInView'
import { TulipIcon, ShieldIcon, TeaIcon, BookIcon, CakeIcon, SprigIcon, PawIcon } from '@/components/icons'

// Ordem de exibição das categorias no bloco único de Tecnologias
const displayOrder: TechnologyCategory[] = ['Backend', 'Infra/Cloud', 'Frontend', 'Dados']

// Concatena as categorias nessa sequência, mantendo dentro de cada uma a ordem do array de dados
const orderedTechnologies = displayOrder.flatMap((category) =>
  technologies.filter((tech) => tech.category === category)
)

const likes = [
  { icon: ShieldIcon, text: 'Torcedora fanática do Corinthians' },
  { icon: TeaIcon, text: 'Séries turcas com um chá do lado' },
  { icon: BookIcon, text: 'Livros, muitos livros' },
  { icon: CakeIcon, text: 'Bolos decorados nos fins de semana' },
  { icon: SprigIcon, text: 'Plantas: minha terapia' },
  { icon: PawIcon, text: 'Gatos e cachorros, sempre' },
]

// Fade-in subindo. Com prefers-reduced-motion as classes motion-safe não se aplicam,
// então o conteúdo já aparece visível e sem transição.
const reveal = (visible: boolean) =>
  `motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
    visible ? 'opacity-100 translate-y-0' : 'motion-safe:opacity-0 motion-safe:translate-y-6'
  }`

export default function About() {
  const { ref: aboutRef, inView: aboutVisible } = useInView<HTMLDivElement>()

  return (
    // .sec + .band: seção com fundo surface-2 que recebe a curva do Hero
    <section id="sobre" className="sec band font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <div className="mb-[2.4rem] flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            Sobre mim
          </h2>
          <TulipIcon className="h-5 w-5 flex-none self-center text-tulip" />
          <p className="m-0 text-[.95rem] text-muted">Engenharia de Software, 8° período</p>
        </div>

        <div
          ref={aboutRef}
          className={`grid grid-cols-[1.25fr_.75fr] gap-[clamp(2rem,5vw,4rem)] max-[860px]:grid-cols-1 ${reveal(aboutVisible)}`}
        >
          <div>
            <p className="mb-4 max-w-[60ch]">
              Apaixonada por tecnologia desde sempre, descobri minha vocação na programação ao entrar na faculdade.
              Desde então venho construindo projetos práticos e uma base sólida em desenvolvimento, com foco em
              back-end e domínio do stack completo.
            </p>
            <p className="mb-4 max-w-[60ch]">
              Hoje trabalho como freelancer em duas frentes bem diferentes: APIs, automações e integrações com IA de
              um lado, e uma plataforma de monitoramento aéreo do outro. Também fui de aluna a mentora na Escola da
              Nuvem, ajudando outras pessoas a passarem nas certificações AWS.
            </p>
            <blockquote className="mt-[1.8rem] border-l-2 border-rose pl-[1.2rem] font-display text-2xl italic leading-[1.35] text-ink">
              O que eu entendo de verdade é o que consigo explicar para outra pessoa.
            </blockquote>
          </div>

          <ul className="m-0 grid list-none content-start gap-[.1rem] border-t border-line p-0">
            {likes.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-[.9rem] border-b border-line px-[.2rem] py-[.85rem]">
                <Icon className="h-[22px] w-[22px] flex-none text-rose" />
                <span className="text-[.97rem] text-body">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tecnologias em container mais largo (max-w-5xl) que o texto acima */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-ink">
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
