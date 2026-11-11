'use client'

import type { ReactNode } from 'react'
import { BaseDivRoot } from './BaseDiv.styles'

type BaseDivProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  gap?: string
  className?: string
}

export default function BaseDiv({ children, direction = 'column', gap, className }: BaseDivProps) {
  return (
    <BaseDivRoot $direction={direction} $gap={gap} className={className}>
      {children}
    </BaseDivRoot>
  )
}
