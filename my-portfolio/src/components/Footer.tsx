import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-xl font-bold">Daiane - Desenvolvedora Full Stack</p>
          <p className="text-gray-400">developerdaiane@gmail.com</p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Vai</span>
            <Heart size={16} className="text-rose-500 fill-rose-500" />
            <span>Corinthians!</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Daiane. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}