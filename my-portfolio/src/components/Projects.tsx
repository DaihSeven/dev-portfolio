'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { Search, ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
//Se você entrou aqui para analisar o código perceberá muitos comentários sobre o que é cada parte do código, isso para uma aprendiz de nextjs é muito importante, MAS lembre-se para ambiente produtivo e empresarial não é recomendado, e sim documentação!
export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentProject, setCurrentProject] = useState(0)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const categories = ['all', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'DevOps']

  // Filtro de projetos
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.technologies.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ) || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const displayedProject = filteredProjects[currentProject] || filteredProjects[0]

  const nextProject = () => {
    setImageLoading(true)
    setImageError(false)
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevProject = () => {
    setImageLoading(true)
    setImageError(false)
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentProject(0)
    setImageLoading(true)
    setImageError(false)
  }

  return (
    <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Projetos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto mb-12"></div>

        {/* Filtros */}
        <div className="space-y-6 mb-12">
          {/* Busca por Tecnologia */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400" size={20} />
            <input
              type="text"
              placeholder="Buscar projetos por tecnologia, título ou descrição..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentProject(0)
                setImageLoading(true)
                setImageError(false)
              }}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 bg-white focus:border-rose-500 focus:outline-none shadow-lg"
            />
          </div>

          {/* Filtro por Categoria */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/50'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Carrossel de Projetos */}
        {filteredProjects.length > 0 && displayedProject ? (
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Imagem cara Projeto */}
              <div className="relative h-96 bg-gradient-to-br from-rose-500 to-rose-900 overflow-hidden group">
                {/* Loading Spinner */}
                {imageLoading && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-500 to-rose-900 z-10">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <p className="text-white font-medium">Carregando projeto...</p>
                    </div>
                  </div>
                )}

                {/*KEY ÚNICA força o Next.js a destruir e recriar o componente ao trocar de projeto. MAS ainda está om problema de carregar, talvez com o deploy se ajeite*/}
                {!imageError ? (
                  <Image
                    key={`project-${displayedProject.id}-${currentProject}`}
                    src={displayedProject.image}
                    alt={displayedProject.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className={`object-cover transition-all duration-500 ${
                      imageLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100 group-hover:scale-110'
                    }`}
                    onLoad={() => setImageLoading(false)}
                    onError={() => {
                      setImageLoading(false)
                      setImageError(true)
                    }}
                  />
                ) : (
                  // Fallback se imagem falhar
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-900 flex flex-col items-center justify-center text-white p-8">
                    <div className="text-7xl mb-6">🚀</div>
                    <h3 className="text-4xl font-bold mb-2 text-center">{displayedProject.title}</h3>
                    <p className="text-rose-100 text-center max-w-md">{displayedProject.category}</p>
                  </div>
                )}

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                
                {/* Badges sobre a imagem */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  {displayedProject.featured && (
                    <span className="flex items-center gap-1 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                      <Sparkles size={14} />
                      Destaque
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm ${
                    displayedProject.status === 'completed' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-yellow-600 text-white'
                  }`}>
                    {displayedProject.status === 'completed' ? 'Concluído' : 'Em Andamento'}
                  </span>
                </div>

                {/* Categoria */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-black/50 backdrop-blur-sm text-rose-300 px-4 py-1 rounded-full text-sm font-medium border border-rose-500/30">
                    {displayedProject.category}
                  </span>
                </div>

                {/* Título sobre a imagem */}
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {displayedProject.title}
                  </h3>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-8 bg-white">
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {displayedProject.description}
                </p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {displayedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-medium border border-rose-200 hover:bg-rose-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {displayedProject.github && (
                    <a
                      href={displayedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {displayedProject.demoUrl && (
                    <a
                      href={displayedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-rose-500/50 hover:shadow-xl hover:shadow-rose-500/70"
                    >
                      <ExternalLink size={18} />
                      Ver Demo
                    </a>
                  )}
                  {!displayedProject.demoUrl && displayedProject.link && (
                    <a
                      href={displayedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-rose-500/50 hover:shadow-xl hover:shadow-rose-500/70"
                    >
                      <ExternalLink size={18} />
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Controles do Carrossel */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  disabled={imageLoading}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-4 rounded-full shadow-2xl hover:shadow-rose-500/50 transition-all z-10"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  disabled={imageLoading}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-4 rounded-full shadow-2xl hover:shadow-rose-500/50 transition-all z-10"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setImageLoading(true)
                    setImageError(false)
                    setCurrentProject(index)
                  }}
                  disabled={imageLoading}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProject
                      ? 'bg-rose-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="text-center mt-4 text-gray-600">
              <span className="text-rose-600 font-bold text-lg">{currentProject + 1}</span> 
              <span className="text-gray-400 mx-2">/</span> 
              <span className="text-gray-600">{filteredProjects.length}</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-700 text-lg mb-2 font-semibold">Nenhum projeto encontrado</p>
            <p className="text-gray-500">Tente ajustar os filtros ou buscar por outra tecnologia</p>
          </div>
        )}
      </div>
    </section>
  )
}