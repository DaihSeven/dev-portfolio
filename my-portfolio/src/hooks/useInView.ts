'use client'

import { useEffect, useRef, useState } from 'react'

// Retorna um ref para o elemento observado e `true` quando ele entra na tela.
// Dispara uma única vez: depois de visível, o observer é desconectado.
export function useInView<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    // Navegadores sem IntersectionObserver: mostra o conteúdo direto
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
    // options é tratado como configuração inicial; não recria o observer a cada render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return { ref, inView }
}
