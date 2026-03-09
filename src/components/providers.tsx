'use client'


import { AnimationProvider } from '@/styles/MaskedAnimations/AnimationProvider';
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={maskedTheme}>
      <AnimationProvider>
        {children}
      </AnimationProvider>
    </ThemeProvider>
  )
}

