'use client'

import { ThemeEngineProvider } from '@/styles/ThemeEngine/ThemeEngineProvider'
import { Toaster, toast } from 'react-hot-toast'
import type { ReactNode } from 'react'
import { MaskedConfigProvider } from '@/components/ui'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeEngineProvider defaultTheme="dark" storageKey="mc-theme">
      <MaskedConfigProvider
        config={{
          onSuccess: msg => toast.success(msg),
          onError: msg => toast.error(msg)
        }}
      >
        {children}
        <Toaster position="bottom-right" />
      </MaskedConfigProvider>
    </ThemeEngineProvider>
  )
}
