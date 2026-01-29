'use client'

import { useEffect, useState } from 'react'

export function useHeaderScroll(threshold = 125) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let rafId: number | null = null

    const onScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold)
        rafId = null
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return scrolled
}
