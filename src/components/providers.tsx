'use client'

import { AnimationProvider } from '@/styles/MaskedAnimations/AnimationProvider'
import { ReactNode } from 'react'
import { ThemeModeProvider } from './providers/ThemeModeProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeModeProvider>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeModeProvider>
  )
}
