"use client"

import { useEffect } from 'react'

/**
 * Componente para preload de recursos críticos
 * Melhora a performance carregando recursos importantes antecipadamente
 */
export default function PreloadResources() {
  useEffect(() => {
    // Preload de imagens críticas
    const criticalImages = [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20VITRINE_LE%20MONT%201-tpzwlGlJbz53ZZYI1khTDNV2R5Dxe7.jpeg',
      // Adicione outras imagens críticas aqui
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preconnect para domínios externos
    const preconnectDomains = [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Prefetch de páginas importantes
    const importantPages = [
      '/empreendimentos',
      '/contato',
      '/invista'
    ]

    // Aguarda um pouco antes de fazer prefetch para não interferir no carregamento inicial
    setTimeout(() => {
      importantPages.forEach(page => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }, 2000)

  }, [])

  return null // Componente não renderiza nada visualmente
}

/**
 * Hook para preload manual de recursos
 */
export function usePreloadResource(src: string, type: 'image' | 'script' | 'style' = 'image') {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = type
    link.href = src
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [src, type])
}

/**
 * Componente para lazy loading de imagens com intersection observer
 */
export function LazyImage({ 
  src, 
  alt, 
  className, 
  placeholder = '/placeholder.svg' 
}: {
  src: string
  alt: string
  className?: string
  placeholder?: string
}) {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-lazy]')
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.lazy || ''
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))

    return () => {
      images.forEach(img => imageObserver.unobserve(img))
    }
  }, [])

  return (
    <img
      src={placeholder}
      data-lazy={src}
      alt={alt}
      className={`lazy transition-opacity duration-300 ${className}`}
      loading="lazy"
    />
  )
}