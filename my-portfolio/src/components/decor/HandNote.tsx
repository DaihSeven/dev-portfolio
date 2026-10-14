import { Caveat } from 'next/font/google'
import CurlArrow from './CurlArrow'

const caveat = Caveat({ subsets: ['latin'], weight: ['600'] })

interface HandNoteProps {
  text: string
  className?: string
}

// Anotação manuscrita (fonte Caveat) com uma seta pequena apontando para baixo
export default function HandNote({ text, className = '' }: HandNoteProps) {
  return (
    <div className={`inline-flex items-end gap-1 ${className}`} aria-hidden="true">
      <span className={`${caveat.className} text-2xl leading-none -rotate-6`}>{text}</span>
      <CurlArrow className="w-10 h-8 rotate-12 translate-y-4" />
    </div>
  )
}
