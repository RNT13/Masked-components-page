import { ThemeEngineProvider } from '@/styles/ThemeEngine/ThemeEngineProvider'
import type { ReactNode } from 'react'

export function TestProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeEngineProvider defaultTheme="default" storageKey={null}>
      {children}
    </ThemeEngineProvider>
  )
}
