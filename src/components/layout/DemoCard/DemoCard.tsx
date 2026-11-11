'use client'

import type { ReactNode } from 'react'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { Card, CardDescription, CardTitle, Preview, Split } from './DemoCard.styles'

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
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <Split $stacked={stacked}>
        <Preview>{children}</Preview>
        <CodeBlock title={codeTitle ?? title} code={code} />
      </Split>
    </Card>
  )
}
