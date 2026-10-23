'use client'

import { useMemo, useState } from 'react'
import { Award, GraduationCap, BookOpen, Sparkles, type LucideIcon } from 'lucide-react'
import { certificates, certificateCategories, type Certificate, type CertificateCategory } from '@/data/certificates'
import { TulipIcon } from '@/components/icons'

type Filter = CertificateCategory | 'todos'

const categoryIcons: Record<CertificateCategory, LucideIcon> = {
  certificacao: Award,
  formacao: GraduationCap,
  curso: BookOpen,
}

const categoryLabel = (category: CertificateCategory) =>
  certificateCategories.find((c) => c.value === category)?.label ?? category

// Quantos cards aparecem antes do "Ver mais" e quantos cada clique revela
const INITIAL_VISIBLE = 8
const STEP = 10

// Totais calculados a partir do array (nunca fixos). Carga horária nunca é somada.
const counts = certificates.reduce<Record<Filter, number>>(
  (acc, cert) => ({ ...acc, [cert.category]: acc[cert.category] + 1 }),
  { todos: certificates.length, certificacao: 0, formacao: 0, curso: 0 }
)

const filters: { value: Filter; label: string }[] = [{ value: 'todos', label: 'Todos' }, ...certificateCategories]

const isHttpsUrl = (value?: string): value is string => {
  if (!value) return false
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

const matches = (cert: Certificate, query: string) =>
  [cert.title, cert.institution, cert.description ?? '', ...(cert.technologies ?? [])].some((field) =>
    field.toLowerCase().includes(query)
  )

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold'
const linkClass = `rounded border-b border-transparent pb-[2px] text-tulip no-underline hover:border-tulip ${focusRing}`

function CertificateCard({ cert }: { cert: Certificate }) {
  const Icon = categoryIcons[cert.category]
  const links = [
    { label: 'Ver certificado', href: cert.certificateUrl },
    { label: 'Ver badge', href: cert.badgeUrl },
  ].filter((link): link is { label: string; href: string } => isHttpsUrl(link.href))
  const verificationIsLink = cert.verification?.startsWith('http')

  return (
    // Destaque: só a borda fica mais marcada (rose)
    <article className={`rounded-[14px] border bg-surface px-6 py-[1.3rem] ${cert.featured ? 'border-rose' : 'border-line'}`}>
      <div className="flex flex-wrap items-start gap-[.9rem]">
        <Icon className="mt-[.3rem] h-[18px] w-[18px] flex-none text-gold" aria-hidden="true" />
        <h3 className="min-w-0 flex-[1_1_320px] font-display text-[1.18rem] font-semibold leading-[1.25] text-ink">{cert.title}</h3>
        <span className="rounded-full border border-line px-[.7rem] py-[.18rem] text-[.76rem] text-muted">
          {categoryLabel(cert.category)}
        </span>
        {cert.inProgress && (
          <span className="rounded-full border border-gold px-[.7rem] py-[.18rem] text-[.76rem] text-muted">Em andamento</span>
        )}
        {cert.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--rose)_16%,transparent)] px-[.6rem] py-[.18rem] text-[.76rem] text-tulip">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Destaque
          </span>
        )}
      </div>

      <div className="mb-[.7rem] mt-[.45rem] flex flex-wrap gap-x-[1.2rem] gap-y-[.3rem] pl-[calc(18px+.9rem)] text-[.87rem] text-muted max-[600px]:pl-0">
        <span className="text-tulip">{cert.institution}</span>
        {cert.date && <span>{cert.date}</span>}
        {cert.workload && <span>carga horária: {cert.workload}</span>}
      </div>

      <div className="pl-[calc(18px+.9rem)] max-[600px]:pl-0">
        {cert.description && <p className="mb-[.8rem] max-w-[72ch] text-[.97rem]">{cert.description}</p>}

        {cert.disciplines && (
          <ul className="mb-[.8rem] mt-0 list-disc pl-[1.1rem] text-[.87rem] text-body" aria-label="Disciplinas">
            {cert.disciplines.map((discipline) => (
              <li key={discipline} className="mb-[.15rem]">{discipline}</li>
            ))}
          </ul>
        )}

        {cert.technologies && (
          <ul className="m-0 mb-4 flex list-none flex-wrap gap-[.45rem] p-0" aria-label="Tecnologias">
            {cert.technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-[.72rem] py-[.24rem] text-[.82rem] text-body">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-[1.3rem] text-[.93rem]">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>
        )}

        {cert.verification && (
          <p className="mb-0 mt-[.6rem] break-words text-[.78rem] text-muted">
            Verificação:{' '}
            {verificationIsLink ? (
              <a href={cert.verification} target="_blank" rel="noopener noreferrer" className={`break-all underline decoration-line underline-offset-2 hover:text-tulip ${focusRing}`}>
                {cert.verification}
              </a>
            ) : (
              <span className="break-all">{cert.verification}</span>
            )}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<Filter>('todos')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const query = searchTerm.trim().toLowerCase()

  const filtered = useMemo(
    () =>
      certificates.filter(
        (cert) => (filter === 'todos' || cert.category === filter) && (!query || matches(cert, query))
      ),
    [filter, query]
  )

  // Com busca ativa, mostra tudo; sem busca, pagina (8 e depois +10 por clique)
  const shown = query ? filtered : filtered.slice(0, visibleCount)
  const remaining = filtered.length - shown.length

  // Mudar filtro ou busca volta ao estado inicial da paginação
  const changeFilter = (value: Filter) => {
    setFilter(value)
    setVisibleCount(INITIAL_VISIBLE)
  }
  const changeSearch = (value: string) => {
    setSearchTerm(value)
    setVisibleCount(INITIAL_VISIBLE)
  }

  return (
    // .sec + .band: fundo surface-2, como no design
    <section id="certificados" className="sec band font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <div className="mb-[2.4rem] flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            Certificados e formações
          </h2>
          <TulipIcon className="h-5 w-5 flex-none self-center text-tulip" />
          <p className="m-0 text-[.95rem] text-muted">Da nuvem ao back-end, um passo de cada vez</p>
        </div>

        {/* Totais por categoria */}
        <div className="mb-[2.2rem] flex flex-wrap gap-x-[2.6rem] gap-y-4">
          {certificateCategories.map(({ value, plural }) => (
            <div key={value}>
              <b className="block font-display text-[2.8rem] font-semibold leading-none text-tulip">{counts[value]}</b>
              <span className="text-[.9rem] text-muted">{plural}</span>
            </div>
          ))}
        </div>

        {/* Busca e filtros */}
        <div className="mb-[2.4rem] flex flex-wrap items-center gap-[.8rem]">
          <label className="flex min-w-0 flex-[1_1_260px] items-center gap-[.6rem] rounded-full border border-line bg-surface px-[1.1rem] py-[.6rem] focus-within:border-rose">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="h-[17px] w-[17px] flex-none text-muted" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" />
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="Buscar por instituição, título ou conteúdo"
              aria-label="Buscar certificados"
              className="w-full min-w-0 border-0 bg-transparent text-[.95rem] text-ink outline-none placeholder:text-muted"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar certificados por tipo">
            {filters.map(({ value, label }) => {
              const active = filter === value
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => changeFilter(value)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-[.44rem] text-[.88rem] transition-colors duration-200 ${focusRing} ${
                    active ? 'border-tulip bg-tulip text-[#FFF8F2]' : 'border-line text-body hover:border-rose hover:text-tulip'
                  }`}
                >
                  {label}
                  <small className="ml-[.35rem] opacity-65">{counts[value]}</small>
                </button>
              )
            })}
          </div>
        </div>

        {shown.length > 0 ? (
          <>
            <div className="grid gap-4">
              {shown.map((cert) => (
                <CertificateCard key={cert.id} cert={cert} />
              ))}
            </div>

            {remaining > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + STEP)}
                  className={`rounded-full border border-line bg-surface px-[1.6rem] py-[.7rem] text-[.95rem] font-semibold text-ink transition-colors hover:border-rose hover:text-tulip ${focusRing}`}
                >
                  Ver mais certificados
                  <small className="ml-2 font-normal text-muted">
                    (+{Math.min(STEP, remaining)} de {remaining})
                  </small>
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="py-8 font-hand text-[1.3rem] text-muted">Nada nessa categoria ainda.</p>
        )}
      </div>
    </section>
  )
}
