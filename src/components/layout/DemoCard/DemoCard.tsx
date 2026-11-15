'use client'

import type { ReactNode } from 'react'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { Card, CardDescription, CardTitle, Preview, Split } from './DemoCard.styles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'

type DemoCardProps = {
  title: string
  description?: string
  code: string
  codeTitle?: string
  /** coloca o código abaixo da demo (útil para demos largas, como grades) */
  stacked?: boolean
  children: ReactNode
}

export function DemoCard({ title, description, code, codeTitle, stacked, children }: DemoCardProps) {
  return (
    <Card>
      <MaskedAnimation variant="revealSkewSlide" trigger="scroll" once>
        <CardTitle>{title}</CardTitle>
      </MaskedAnimation>
      <MaskedAnimation variant="revealSkewSlide" trigger="scroll" once delay={0.3}>
        {description && <CardDescription>{description}</CardDescription>}
      </MaskedAnimation>
      <Split $stacked={stacked}>
        <MaskedAnimation variant="revealRotateSoftDrop" trigger="scroll" once delay={0.4}>
          <Preview>{children}</Preview>
        </MaskedAnimation>
        <MaskedAnimation variant="revealRotateSoftDrop" trigger="scroll" once delay={0.6}>
          <CodeBlock title={codeTitle ?? title} code={code} />
        </MaskedAnimation>
      </Split>
    </Card>
  )
}
