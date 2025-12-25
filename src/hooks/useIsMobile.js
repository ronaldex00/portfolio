import { useState, useEffect } from 'react'

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // Inicializar com o valor correto na primeira renderização
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1024
    }
    return false
  })

  useEffect(() => {
    // Verificar novamente após montar o componente
    setIsMobile(window.innerWidth <= 1024)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
