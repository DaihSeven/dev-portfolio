'use client'

import { useState } from 'react'
import { certificates } from '@/data/certificates'
import { Search, Calendar, Award, GraduationCap, BookOpen, Sparkles } from 'lucide-react'
//Se você entrou aqui para analisar o código perceberá muitos comentários sobre o que é cada parte do código, isso para uma aprendiz de nextjs é muito importante, MAS lembre-se para ambiente produtivo e empresarial não é recomendado, e sim documentação!
export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'Certificação', 'Formação', 'Curso']

  // Filtro dos certificados
  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Ícone para cada categoria
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Certificação': return <Award size={20} />
      case 'Formação': return <GraduationCap size={20} />
      case 'Curso': return <BookOpen size={20} />
      default: return null
    }
  }

  // Cor por categoria
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Certificação': return 'bg-rose-500 text-white border-rose-600'
      case 'Formação': return 'bg-purple-500 text-white border-purple-600'
      case 'Curso': return 'bg-blue-500 text-white border-blue-600'
      default: return 'bg-gray-500 text-white border-gray-600'
    }
  }

  return (
    <section id="certificados" className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8 py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Certificados & Formações
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto mb-12"></div>

        {/* Filtros */}
        <div className="space-y-6 mb-12">
          {/* Busca */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-500" size={20} />
            <input
              type="text"
              placeholder="Buscar por instituição, título ou conteúdo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-rose-300 bg-white text-gray-800 placeholder-gray-400 focus:border-rose-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Filtro por Categoria */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 border border-rose-200'
                }`}
              >
                {category !== 'all' && getCategoryIcon(category)}
                {category === 'all' ? 'Todos' : category}
                {category === 'all' && (
                  <span className="bg-white/20 text-rose-700 text-xs px-2 py-0.5 rounded-full">
                    {certificates.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Certificados */}
        <div className="space-y-4">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all border border-rose-100 hover:border-rose-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Ícone do Certificado */}
                  <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform text-rose-500">
                    {cert.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                        {cert.title}
                      </h3>
                      
                      {/* Badge de Categoria */}
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getCategoryColor(cert.category)}`}>
                        {getCategoryIcon(cert.category)}
                        {cert.category}
                      </span>
                    </div>

                    {/* Badge Featured */}
                    {cert.featured && (
                      <div className="inline-flex items-center gap-1 bg-rose-500/20 text-rose-600 px-2 py-1 rounded-full text-xs font-semibold mb-2 border border-rose-500/30">
                        <Sparkles size={12} />
                        Destaque
                      </div>
                    )}
                    
                    <p className="text-rose-600 font-semibold mb-2">
                      {cert.institution}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={16} />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4 text-rose-400">🔍</div>
              <p className="text-gray-600 text-lg mb-2">Nenhum certificado encontrado</p>
              <p className="text-gray-500">Tente ajustar os filtros ou buscar por outro termo</p>
            </div>
          )}
        </div>

        {/* Estatísticas */}
        {filteredCertificates.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-rose-600">
                {certificates.filter(c => c.category === 'Certificação').length}
              </div>
              <div className="text-gray-600 text-sm">Certificações</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {certificates.filter(c => c.category === 'Formação').length}
              </div>
              <div className="text-gray-600 text-sm">Formações</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {certificates.filter(c => c.category === 'Curso').length}
              </div>
              <div className="text-gray-600 text-sm">Cursos</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}