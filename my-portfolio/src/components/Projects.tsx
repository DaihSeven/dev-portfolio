'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { projects, projectCategories, type Project, type ProjectCategory } from '@/data/projects'
import { TulipIcon } from '@/components/icons'

type Filter = ProjectCategory | 'todos'

const kindLabels: Record<Project['kind'], string> = {
  pessoal: 'Pessoal',
  freelance: 'Freelance',
  equipe: 'Projeto em equipe',
}

const categoryLabel = (category: ProjectCategory) =>
  projectCategories.find((c) => c.value === category)?.label ?? category

// Só aceita links https válidos (ex.: evita "Privado do cliente" virar um link quebrado)
const isHttpsUrl = (value?: string): value is string => {
  if (!value) return false
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

// Botões na ordem: Ver online, Documentação e GitHub (ou GitHub front e back)
function projectLinks(project: Project) {
  const links = [
    { label: 'Ver online', href: project.demoUrl },
    { label: 'Documentação', href: project.docsUrl },
    ...(project.githubBack
      ? [
          { label: 'GitHub front', href: project.github },
          { label: 'GitHub back', href: project.githubBack },
        ]
      : [{ label: 'GitHub', href: project.github }]),
  ]
  return links.filter((link): link is { label: string; href: string } => isHttpsUrl(link.href))
}

const counts = projects.reduce<Record<Filter, number>>(
  (acc, project) => ({ ...acc, [project.category]: acc[project.category] + 1 }),
  { todos: projects.length, frontend: 0, backend: 0, fullstack: 0, devops: 0, 'dados-ia': 0 }
)

const filters: { value: Filter; label: string }[] = [{ value: 'todos', label: 'Todos' }, ...projectCategories]

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<Filter>('todos')

  // Busca por título, descrição e tecnologia, combinada com o filtro de categoria
  const visibleProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesFilter = filter === 'todos' || project.category === filter
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
      return matchesFilter && matchesSearch
    })
  }, [searchTerm, filter])

  return (
    // bg-ground explícito: no design a seção usa o fundo do body, que aqui ainda é o branco antigo
    <section id="projetos" className="sec bg-ground font-karla text-[17px] leading-[1.65] text-body">
      <div className="mx-auto w-[min(1120px,100%_-_2.5rem)]">
        <div className="mb-[2.4rem] flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.2rem)] font-semibold leading-[1.08] tracking-[-.01em] text-ink">
            Projetos
          </h2>
          <TulipIcon className="h-5 w-5 flex-none self-center text-tulip" />
          <p className="m-0 text-[.95rem] text-muted">Todos abertos na mesma página, sem setas</p>
        </div>

        {/* Busca e filtros */}
        <div className="mb-[2.4rem] flex flex-wrap items-center gap-[.8rem]">
          <label className="flex flex-[1_1_260px] items-center gap-[.6rem] rounded-full border border-line bg-surface px-[1.1rem] py-[.6rem] focus-within:border-rose">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="h-[17px] w-[17px] flex-none text-muted" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" />
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por tecnologia, título ou descrição"
              aria-label="Buscar projetos"
              className="w-full border-0 bg-transparent text-[.95rem] text-ink outline-none placeholder:text-muted"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
            {filters.map(({ value, label }) => {
              const active = filter === value
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value)}
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

        {/* Lista vertical: imagem e texto alternam de lado */}
        {visibleProjects.length > 0 ? (
          <div className="grid gap-[3.2rem]">
            {visibleProjects.map((project, index) => {
              const links = projectLinks(project)
              const imageRight = index % 2 === 1
              return (
                <article
                  key={project.id}
                  className="grid grid-cols-[.95fr_1.05fr] items-center gap-[clamp(1.5rem,4vw,3rem)] max-[860px]:grid-cols-1"
                >
                  <div className={`relative ${imageRight ? 'order-2 max-[860px]:order-none' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[120px_120px_10px_10px] border border-line bg-surface-2">
                      <Image
                        src={project.image}
                        alt={`Capa do projeto ${project.title}`}
                        fill
                        sizes="(max-width: 860px) 100vw, 520px"
                        className="object-cover"
                      />
                    </div>
                    {project.featured && (
                      <span className="absolute left-4 top-4 rounded-full border border-line bg-surface px-[.7rem] py-[.2rem] text-[.76rem] text-tulip">
                        Destaque
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-[.6rem] text-[.85rem] text-muted">
                      {kindLabels[project.kind]}
                      <span className="h-[5px] w-[5px] rounded-full bg-gold" aria-hidden="true" />
                      {categoryLabel(project.category)}
                    </p>
                    <h3 className="mb-2 font-display text-[1.35rem] font-semibold leading-[1.25] text-ink">{project.title}</h3>
                    <p className="mb-4 max-w-[54ch]">{project.description}</p>

                    <ul className="m-0 mb-[1.3rem] mt-4 flex list-none flex-wrap gap-[.45rem] p-0" aria-label="Tecnologias">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-full border border-line px-[.72rem] py-[.24rem] text-[.82rem] text-body">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {project.nextTechnologies && (
                      <p className="-mt-2 mb-[1.3rem] text-[.85rem] text-muted">
                        Próximas etapas: {project.nextTechnologies.join(', ')}
                      </p>
                    )}

                    {links.length > 0 && (
                      <div className="flex flex-wrap gap-[1.3rem] text-[.93rem]">
                        {links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded border-b border-transparent pb-[2px] text-tulip no-underline hover:border-tulip ${focusRing}`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="py-8 font-hand text-[1.3rem] text-muted">Nada plantado nessa categoria ainda.</p>
        )}
      </div>
    </section>
  )
}
