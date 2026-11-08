'use client'

import type { ReactNode } from 'react'
import { TitleH2, MinorTextH4 } from '@/styles/globalStyles'
import { BaseSectionRoot } from './BaseSection.styles'

type BaseSectionProps = {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export default function BaseSection({ title, description, children, className }: BaseSectionProps) {
  return (
    <BaseSectionRoot className={className}>
      {title && <TitleH2>{title}</TitleH2>}
      {description && <MinorTextH4>{description}</MinorTextH4>}
      {children}
    </BaseSectionRoot>
  )
}
