'use client'

import { AnimationProvider } from '@/styles/MaskedAnimations/AnimationProvider'
import { ThemeEngineProvider } from '@/styles/ThemeEngine/ThemeEngineProvider'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeEngineProvider defaultTheme="maskedTheme">
      <AnimationProvider>
        {children}
      </AnimationProvider>
    </ThemeEngineProvider>
  )
}
