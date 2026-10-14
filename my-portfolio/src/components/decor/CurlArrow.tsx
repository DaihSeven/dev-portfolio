interface CurlArrowProps {
  className?: string
}

// Seta curvada com um laço, estilo desenhada à mão (aponta para baixo/direita)
export default function CurlArrow({ className = '' }: CurlArrowProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 9 C 18 3, 33 5, 36 17 C 39 29, 24 32, 25 22 C 26 12, 45 18, 52 36" />
      <path d="M44 33 L52 37 L55 28" />
    </svg>
  )
}
