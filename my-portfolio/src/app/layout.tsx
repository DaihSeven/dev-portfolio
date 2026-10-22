import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Karla, Caveat } from 'next/font/google'
import './globals.css'

// Inter continua no <body> até as seções antigas serem portadas para o novo design
const inter = Inter({ subsets: ['latin'] })

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
  title: 'Daiane - Portfólio Digital',
  description: 'Portfólio profissional de Daiane - Desenvolvedora Full Stack',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
