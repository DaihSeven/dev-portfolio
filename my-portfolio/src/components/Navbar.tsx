'use client'

import { useEffect, useState } from 'react'
import { TulipIcon, SunIcon, MoonIcon } from '@/components/icons'

const navItems = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Jornada', href: '#jornada' },
  { name: 'Tecnologias', href: '#tecnologias' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Contato', href: '#contato' },
]

type Theme = 'light' | 'dark'

const darkQuery = '(prefers-color-scheme: dark)'

// Tema efetivo: o escolhido no botão (data-theme no <html>) ou, sem escolha, o do sistema
function currentTheme(): Theme {
  const set = document.documentElement.getAttribute('data-theme')
  if (set === 'light' || set === 'dark') return set
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light'
}

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold'

export default function Navbar() {
  // null até montar no cliente: o servidor não sabe qual é o tema
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(currentTheme())
    // Acompanha a troca de tema do sistema enquanto não houver escolha manual
    const media = window.matchMedia(darkQuery)
    const onChange = () => setTheme(currentTheme())
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // armazenamento indisponível (ex.: modo privado): o tema vale só nesta visita
    }
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-20 border-b border-line-soft bg-[color-mix(in_srgb,var(--ground)_88%,transparent)] backdrop-blur-[10px] font-karla">
      <div className="mx-auto flex h-[72px] w-[min(1120px,100%_-_2.5rem)] items-center gap-6">
        <a href="#inicio" className={`flex items-center gap-2 rounded font-display text-[1.5rem] text-ink no-underline ${focusRing}`}>
          <TulipIcon className="h-[22px] w-[22px] text-tulip" />
          Daiane
        </a>

        {/* Links somem em telas de até 900px, como no design */}
        <nav className="ml-auto hidden gap-[1.6rem] text-[.95rem] min-[901px]:flex" aria-label="Seções">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded border-b border-transparent pb-[3px] text-body no-underline transition-colors hover:border-rose hover:text-ink ${focusRing}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={isDark}
          className={`flex items-center gap-[.45rem] rounded-full border border-line px-[.9rem] py-[.42rem] text-[.86rem] text-body transition-colors hover:border-rose hover:text-ink max-[900px]:ml-auto ${focusRing}`}
        >
          {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          <span>{isDark ? 'Manhã no jardim' : 'Noite no Bósforo'}</span>
        </button>
      </div>
    </header>
  )
}
