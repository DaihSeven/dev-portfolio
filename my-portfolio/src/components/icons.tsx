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

export function GullIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M2 14c6-8 11-8 15 0 4-8 9-8 15 0" />
      <path d="M36 7c4-5 7-5 10 0 2.6-4 5-4 7 0" />
    </svg>
  )
}

export function TeaIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7.5 4h9l-1.4 7.2a3.3 3.3 0 0 1-1.9 2.4L12 14.2l-1.2-.6a3.3 3.3 0 0 1-1.9-2.4z" />
      <path d="M12 14.2V18M8 18h8M6 21h12" />
    </svg>
  )
}

export function SprigIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 60 90" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M30 88V12" />
      <path d="M30 70c-9 0-14-5-14-12 8 0 14 4 14 12zM30 70c9 0 14-5 14-12-8 0-14 4-14 12z" />
      <path d="M30 50c-8 0-12-4-12-10 7 0 12 3 12 10zM30 50c8 0 12-4 12-10-7 0-12 3-12 10z" />
      <path d="M30 12c-3.4 0-5.2-2.6-5.2-5.6C24.8 3.8 26.8 1.6 30 0c3.2 1.6 5.2 3.8 5.2 6.4 0 3-1.8 5.6-5.2 5.6z" />
    </svg>
  )
}

export function ShieldIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2.5l7.5 3v6c0 4.6-3.1 8.4-7.5 10-4.4-1.6-7.5-5.4-7.5-10v-6z" />
      <path d="M9.3 12.2l1.9 1.9 3.6-3.8" />
    </svg>
  )
}

export function BookIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 4.5h6a2.5 2.5 0 0 1 2 1 2.5 2.5 0 0 1 2-1h6v14h-6a2.5 2.5 0 0 0-2 1 2.5 2.5 0 0 0-2-1H4z" />
      <path d="M12 5.5v14" />
    </svg>
  )
}

export function CakeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 20h16v-6a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3z" />
      <path d="M4 15.5c1.6 1.4 3.2 1.4 4.8 0s3.2-1.4 4.8 0 3.2 1.4 4.8 0" />
      <path d="M8 8V6M12 8V5.5M16 8V6" />
    </svg>
  )
}

export function PawIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="7" cy="9" rx="2" ry="2.6" />
      <ellipse cx="12" cy="7" rx="2" ry="2.8" />
      <ellipse cx="17" cy="9" rx="2" ry="2.6" />
      <path d="M12 12c-3 0-5.5 2-5.5 4.5S8.5 21 12 21s5.5-2 5.5-4.5S15 12 12 12z" />
    </svg>
  )
}

export function GithubIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17.8 4.7 18.8 5 18.8 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  )
}

export function LinkedinIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.2 1.43-2.2 2.9V21H9z" />
    </svg>
  )
}

export function MailIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}
