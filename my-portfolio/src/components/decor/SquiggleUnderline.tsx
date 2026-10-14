interface SquiggleUnderlineProps {
  className?: string
}

// Traço ondulado curto para sublinhar títulos de seção
export default function SquiggleUnderline({ className = '' }: SquiggleUnderlineProps) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 7 C 13 1, 23 13, 33 7 S 53 1, 63 7 S 83 13, 93 7 S 110 2, 117 6" />
    </svg>
  )
}
