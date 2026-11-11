'use client'

import type { ReactNode } from 'react'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { Shell, ShellHeader, ShellTitle, ShellDescription, ShellBody } from './SectionShell.styles'

type SectionShellProps = {
  id: string
  title: string
  description?: string
  children: ReactNode
}

export function SectionShell({ id, title, description, children }: SectionShellProps) {
  return (
    <Shell id={id}>
      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
        <ShellHeader>
          <ShellTitle>{title}</ShellTitle>
          {description && <ShellDescription>{description}</ShellDescription>}
        </ShellHeader>
      </MaskedAnimation>
      <ShellBody>{children}</ShellBody>
    </Shell>
  )
}
