import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Technologies />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}