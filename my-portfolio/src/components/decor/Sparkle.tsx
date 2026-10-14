interface SparkleProps {
  className?: string
}

// Asterisco com 6 linhas finas saindo do centro (a cada 60°)
export default function Sparkle({ className = '' }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 9.5V2 M14.17 10.75L20.66 7 M14.17 13.25L20.66 17 M12 14.5V22 M9.83 13.25L3.34 17 M9.83 10.75L3.34 7" />
    </svg>
  )
}
