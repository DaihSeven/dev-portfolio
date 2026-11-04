'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

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
  }, [inView])

  return { ref, inView }
}
