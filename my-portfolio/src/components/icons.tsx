// Ícones SVG do design (design/portfolio-daiane.html), com traço em currentColor
interface IconProps {
  className?: string
}

export function TulipIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 12c-2.6 0-4-2.1-4-4.6C8 5.4 9.6 3.4 12 2c2.4 1.4 4 3.4 4 5.4 0 2.5-1.4 4.6-4 4.6z" />
      <path d="M12 2v10M12 12v10M12 17c-2.4 0-3.8-1.2-4.4-3.2M12 17c2.4 0 3.8-1.2 4.4-3.2" />
    </svg>
  )
}

export function CatIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 34c0-9 7-15 17-15 7 0 12 3 15 7 3-4 7-6 12-6 8 0 14 6 14 14" />
      <path d="M8 34h62" />
      <path d="M57 20l-3-7 7 3M68 20l3-7-7 3" />
      <path d="M10 34c-5-2-7-6-5-9" />
    </svg>
  )
}

export function SunIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  )
}
