'use client'

import type { ReactNode } from 'react'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { Shell, ShellBody, ShellDescription, ShellHeader, ShellLabel, ShellTitle } from './SectionShell.styles'

type SectionShellProps = {
  id: string
  label: string
  title: string
  description?: string
  children: ReactNode
}

export function SectionShell({ id, label, title, description, children }: SectionShellProps) {
  return (
    <Shell id={id}>
      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
        <ShellHeader>
          <ShellLabel>{label}</ShellLabel>
          <ShellTitle>{title}</ShellTitle>
          {description && <ShellDescription>{description}</ShellDescription>}
        </ShellHeader>
      </MaskedAnimation>
      <ShellBody>{children}</ShellBody>
    </Shell>
  )
}
