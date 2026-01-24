import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: 'Email',
      value: 'developerdaiane@gmail.com',
      link: 'mailto:developerdaiane@gmail.com',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: <Linkedin size={32} />,
      title: 'LinkedIn',
      value: '/in/daianebarbosak/',
      link: 'https://www.linkedin.com/in/daianebarbosak/',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Github size={32} />,
      title: 'GitHub',
      value: '@DaihSeven',
      link: 'https://github.com/DaihSeven',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Phone size={32} />,
      title: 'Telefone',
      value: '+55 (42) 99848-9420',
      link: 'tel:+5542998489420',
      color: 'from-purple-400 to-purple-600'
    }
  ]

  return (
    <section id="contato" className="section-container bg-gradient-to-br pt-4 from-butter-50 to-rose-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Entre em Contato
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-butter-500 to-rose-500 mx-auto mb-12"></div>

        <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          Estou sempre aberta a novas oportunidades e colaborações. 
          Sinta-se à vontade para entrar em contato!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`bg-gradient-to-br ${method.color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{method.title}</h3>
                    <p className="text-white/90">{method.value}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}