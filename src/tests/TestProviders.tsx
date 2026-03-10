// src/tests/TestProviders.tsx
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

// AnimationProvider fake só para testes
const AnimationProvider = ({ children }: { children: ReactNode }) => children

export function TestProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={maskedTheme}>
      <AnimationProvider>
        {children}
      </AnimationProvider>
    </ThemeProvider>
  )
}
