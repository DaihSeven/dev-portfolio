interface ArcFrameProps {
  className?: string
}

// Arco fino aberto embaixo, para envolver um elemento (ex.: atrás da foto).
// non-scaling-stroke mantém a linha fina em qualquer tamanho.
export default function ArcFrame({ className = '' }: ArcFrameProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 83 A 46 46 0 1 1 83 83" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <path d="M90 36 A 42 42 0 0 0 70 12" strokeWidth={1} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
