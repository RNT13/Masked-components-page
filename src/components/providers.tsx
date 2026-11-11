'use client'

import type { ReactNode } from 'react'
import { MaskedConfigProvider } from '@/components/ui/MaskedConfigProvider'
import { MaskedToaster, maskedToastHandlers } from '@/components/ui/MaskedToaster'
import { GlobalStyles } from '@/styles/globalStyles'
import { ThemeEngineProvider } from '@/styles/ThemeEngine/ThemeEngineProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeEngineProvider defaultTheme="dark" storageKey="mc-theme">
      <GlobalStyles />
      <MaskedConfigProvider config={maskedToastHandlers}>
        {children}
        <MaskedToaster position="bottom-right" />
      </MaskedConfigProvider>
    </ThemeEngineProvider>
  )
}
