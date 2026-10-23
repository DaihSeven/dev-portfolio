interface CodeSketchProps {
  className?: string
}

// Símbolo </> desenhado à mão (traços levemente irregulares) com um brilho dourado no canto.
// O traço usa currentColor (text-tulip por padrão); o brilho usa text-gold.
export default function CodeSketch({ className = '' }: CodeSketchProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-tulip ${className}`}
      aria-hidden="true"
    >
      {/* < */}
      <path d="M41 21c-6 5.5-13.5 11-26 24.5 9.5 8 17 14.5 27.5 23" />
      {/* / */}
      <path d="M71 13c-4 13-8.5 30.5-12.5 46.5-1.2 5-2.6 11-4.3 18" />
      {/* > */}
      <path d="M80.5 22.5c8 5 16 10.5 24.5 21.5-8.6 8.4-15.8 15-25.5 24.5" />
      {/* brilho dourado no canto */}
      <path
        d="M110 4.5c.6 3.4 1.6 4.6 5 5.2-3.4.6-4.4 1.8-5 5.2-.6-3.4-1.6-4.6-5-5.2 3.4-.6 4.4-1.8 5-5.2z"
        className="text-gold"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  )
}
