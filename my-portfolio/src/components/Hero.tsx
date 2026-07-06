'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
//Se você entrou aqui para analisar o código perceberá muitos comentários sobre o que é cada parte do código, isso para uma aprendiz de nextjs é muito importante, MAS lembre-se para ambiente produtivo e empresarial não é recomendado, e sim documentação!
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Partículas fixas
  const particles = [
    { left: '10%', top: '20%', delay: '0s', duration: '8s' },
    { left: '25%', top: '60%', delay: '1s', duration: '10s' },
    { left: '40%', top: '30%', delay: '2s', duration: '12s' },
    { left: '55%', top: '70%', delay: '0.5s', duration: '9s' },
    { left: '70%', top: '40%', delay: '1.5s', duration: '11s' },
    { left: '85%', top: '15%', delay: '2.5s', duration: '7s' },
    { left: '15%', top: '80%', delay: '3s', duration: '13s' },
    { left: '90%', top: '55%', delay: '0.8s', duration: '10s' },
    { left: '5%', top: '45%', delay: '1.2s', duration: '9s' },
    { left: '60%', top: '10%', delay: '2.2s', duration: '11s' },
    { left: '35%', top: '85%', delay: '0.3s', duration: '8s' },
    { left: '75%', top: '25%', delay: '1.8s', duration: '12s' },
    { left: '20%', top: '50%', delay: '2.8s', duration: '10s' },
    { left: '50%', top: '65%', delay: '0.6s', duration: '9s' },
    { left: '80%', top: '75%', delay: '1.4s', duration: '11s' },
    { left: '30%', top: '35%', delay: '2.4s', duration: '13s' },
    { left: '65%', top: '90%', delay: '0.9s', duration: '8s' },
    { left: '45%', top: '5%', delay: '1.7s', duration: '10s' },
    { left: '95%', top: '60%', delay: '2.6s', duration: '12s' },
    { left: '12%', top: '70%', delay: '0.4s', duration: '9s' },
  ]

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Linhas animadas de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Linhas horizontais */}
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-slide-right top-[20%]"></div>
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-slide-left top-[40%]"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-rose-600 to-transparent animate-slide-right top-[60%]"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-slide-left top-[80%]"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Linhas verticais */}
        <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-rose-500 to-transparent animate-slide-down left-[15%]"></div>
        <div
          className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-rose-400 to-transparent animate-slide-up left-[45%]"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-rose-600 to-transparent animate-slide-down left-[75%]"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Grid de pontos */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(244, 63, 94, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Efeito de luz seguindo o mouse */}
        {mounted && (
          <div
            className="absolute w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>
        )}
      </div>

      {/* Partículas flutuantes */}
      {mounted && (
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-rose-500/30 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Hora do Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            {/* Badge animado */}
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
              <span className="text-sm font-medium text-rose-300">
                Disponível para projetos
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-medium text-rose-400 animate-fade-in">
                Olá, eu sou
              </p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-rose-200 to-rose-400 bg-clip-text text-transparent animate-fade-in-up">
                Daiane
              </h1>
              <p
                className="text-2xl md:text-3xl font-light text-gray-300 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Desenvolvedora Full Stack
              </p>
            </div>

            <p
              className="text-lg text-gray-400 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              E graduanda de Engenharia de Software apaixonada por criar experiências digitais incríveis e soluções
              inovadoras. Especializada em desenvolvimento web moderno com foco
              em performance e usabilidade.
            </p>

            <div
              className="flex flex-wrap gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#projetos"
                className="group bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-rose-500/50 hover:shadow-xl hover:shadow-rose-500/70 hover:scale-105"
              >
                Ver Projetos
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contato"
                className="border-2 border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Contato
              </a>
            </div>

            <div
              className="flex gap-4 pt-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://github.com/DaihSeven"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-rose-500 p-3 rounded-full transition-all hover:scale-110 border border-white/10 hover:border-rose-500"
                aria-label="GitHub"
              >
                <Github
                  size={24}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/daianebarbosak/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-rose-500 p-3 rounded-full transition-all hover:scale-110 border border-white/10 hover:border-rose-500"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={24}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="bdaih0405@gmail.com"
                className="group bg-white/5 hover:bg-rose-500 p-3 rounded-full transition-all hover:scale-110 border border-white/10 hover:border-rose-500"
                aria-label="Email"
              >
                <Mail
                  size={24}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Avatar lado direito */}
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Círculos animados ao redor */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full border-2 border-rose-500/20 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slower">
                <div
                  className="w-full h-full border-2 border-rose-400/20 rounded-full"
                  style={{ borderStyle: "dashed" }}
                ></div>
              </div>

              {/* Avatar principal */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-rose-500 to-rose-900 rounded-full shadow-2xl shadow-rose-500/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative w-32 h-32 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-400 to-pink-500 border-4 border-white shadow-lg flex items-center justify-center text-white text-4xl">
                    {/* Fallback  caso o avatar falhe*/}
                    <span>👩‍💻</span>
                  </div>
                  {/* Imagem sobreposta */}
                  <img
                    src="/projects/avatar_games.png"
                    alt="Avatar"
                    className="absolute inset-0 w-full h-full rounded-full object-cover"
                    onLoad={() => {
                      //Vai esconder o fallback quando a imagem carrega
                      document
                        .getElementById("fallback")
                        ?.classList.add("hidden");
                    }}
                    onError={(e) => {
                      // Vai mostrar o fallback quando a imagem falha
                      document
                        .getElementById("fallback")
                        ?.classList.remove("hidden");
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine"></div>
              </div>

              {/* Badges flutuantes */}
              <div
                className="absolute -right-4 top-20 bg-black/80 backdrop-blur-sm border border-rose-500/50 rounded-lg px-4 py-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-rose-400 font-bold text-sm">3x AWS</p>
                <p className="text-gray-400 text-xs">Certificates</p>
              </div>

              <div
                className="absolute -left-4 top-10 bg-black/80 backdrop-blur-sm border border-rose-500/50 rounded-lg px-4 py-2 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-rose-400 font-bold text-sm">Mentora AWS</p>
                <p className="text-gray-400 text-xs">2° + n° de alunos certificados 2025</p>
              </div>

              <div
                className="absolute -left-4 bottom-20 bg-black/80 backdrop-blur-sm border border-rose-500/50 rounded-lg px-4 py-2 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <p className="text-rose-400 font-bold text-sm">Freelancer</p>
                <p className="text-gray-400 text-xs">Dev FullStack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-rose-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}