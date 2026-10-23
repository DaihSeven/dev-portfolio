'use client'

import { technologies, type TechnologyCategory } from '@/data/technologies'
import { useInView } from '@/hooks/useInView'
import { TulipIcon } from '@/components/icons'

// Ordem de exibição das categorias no canteiro
const displayOrder: TechnologyCategory[] = ['Backend', 'Infra/Cloud', 'Frontend', 'Dados']

// Concatena as categorias nessa sequência, mantendo dentro de cada uma a ordem do array de dados
const orderedTechnologies = displayOrder.flatMap((category) =>
  technologies.filter((tech) => tech.category === category)
)

// Atraso entre um chip e o próximo na entrada (como no HTML)
const STAGGER_MS = 28

export default function Technologies() {
  const { ref: bedRef, inView: grown } = useInView<HTMLDivElement>()

  return (
    // .sec + .band: recebe a curva da Jornada
    <section id="tecnologias" className="sec band font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <div className="mb-[2.4rem] flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            O que planto no dia a dia
          </h2>
          <TulipIcon className="h-5 w-5 flex-none self-center text-tulip" />
          <p className="m-0 font-hand text-[1.35rem] leading-[1.2] text-rose">do back-end à nuvem, da tela ao banco</p>
        </div>

        {/* Canteiro: card único com as plaquinhas e a linha pontilhada na base */}
        <div
          ref={bedRef}
          className="relative rounded-[18px] border border-line bg-surface px-[1.8rem] pb-[2.6rem] pt-[2.2rem] shadow-soft"
        >
          <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-[.95rem] p-0">
            {orderedTechnologies.map(({ name, icon: Icon }, index) => (
              <li
                key={name}
                // Plaquinha. Antes de entrar na tela fica abaixada e transparente; com
                // prefers-reduced-motion as classes motion-safe não se aplicam e ela já aparece.
                className={`group relative flex origin-bottom items-center gap-2 rounded-[7px] border border-line bg-surface-2 px-[.85rem] py-[.48rem] text-[.92rem] font-medium leading-[1.4] text-ink hover:border-rose hover:text-tulip motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(.2,.9,.3,1)] ${
                  grown ? '' : 'motion-safe:translate-y-[9px] motion-safe:scale-[.97] motion-safe:opacity-0'
                }`}
                style={{ transitionDelay: grown ? `${index * STAGGER_MS}ms` : undefined }}
              >
                {/* Logo monocromático no token do tema (sem as cores das marcas) */}
                <Icon className="h-4 w-4 flex-shrink-0 text-rose group-hover:text-tulip" aria-hidden="true" />
                <span>{name}</span>
                {/* Haste fincada no canteiro */}
                <span className="absolute bottom-[-9px] left-1/2 h-[9px] w-px -translate-x-1/2 bg-line" aria-hidden="true" />
              </li>
            ))}
          </ul>

          {/* Linha pontilhada da base do canteiro */}
          <span
            className="pointer-events-none absolute bottom-6 left-[1.6rem] right-[1.6rem] h-px bg-[repeating-linear-gradient(90deg,var(--line)_0_7px,transparent_7px_14px)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
