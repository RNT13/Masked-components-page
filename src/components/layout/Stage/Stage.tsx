'use client'

import { useState, type ReactNode } from 'react'
import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { StageRoot, StageToolbar, StageSurface } from './Stage.styles'

type StageProps = {
  children: ReactNode | ((mode: 'light' | 'dark') => ReactNode)
  defaultMode?: 'light' | 'dark'
}

/** Tokens que mantêm AA quando o stage fica escuro (ver tabela de contraste). */
export const STAGE_DARK_TOKENS: Record<string, string> = {
  'label-fg': '#8B90A4',
  placeholder: '#8B90A4'
}

export function Stage({ children, defaultMode = 'light' }: StageProps) {
  const [mode, setMode] = useState<'light' | 'dark'>(defaultMode)

  return (
    <StageRoot>
      <StageToolbar>
        <span>Stage background</span>
        <MaskedButton
          variant="ghost"
          size="sm"
          active={mode === 'light'}
          onClick={() => setMode('light')}
        >
          Light
        </MaskedButton>
        <MaskedButton
          variant="ghost"
          size="sm"
          active={mode === 'dark'}
          onClick={() => setMode('dark')}
        >
          Dark
        </MaskedButton>
      </StageToolbar>
      <StageSurface $mode={mode}>
        {typeof children === 'function' ? children(mode) : children}
      </StageSurface>
    </StageRoot>
  )
}
