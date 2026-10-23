import type { Metadata } from 'next'
import { Cormorant_Garamond, Karla, Caveat } from 'next/font/google'
import './globals.css'

// Fontes do novo design, expostas como variáveis CSS (usadas no tailwind.config.js)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daiane · Desenvolvedora full stack',
  description:
    'Desenvolvedora full stack com raiz no back-end. Estudante de Engenharia de Software que cuida de APIs, bancos de dados e deploys, e gosta de ensinar quem está chegando.',
}

// Aplica o tema salvo antes da primeira pintura (evita piscar o tema errado).
// Sem escolha salva, não define data-theme e o CSS segue o tema do sistema.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${karla.variable} ${caveat.variable}`}
      // data-theme é definido pelo script antes da hidratação
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Fundo e texto do tema (tokens do design), com a Karla como fonte base */}
      <body className="bg-ground font-karla text-body">{children}</body>
    </html>
  )
}
