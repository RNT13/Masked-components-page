import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { AnimationProvider } from '@/styles/MaskedAnimations/AnimationProvider'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export function TestProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={maskedTheme}>
      <AnimationProvider>{children}</AnimationProvider>
    </ThemeProvider>
  )
}
