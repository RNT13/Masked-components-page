'use client'

import type { ReactNode } from 'react'
import { TitleH2, MinorTextH4 } from '@/styles/globalStyles'
import { BaseSectionRoot } from './BaseSection.styles'

type BaseSectionProps = {
  id?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export default function BaseSection({ id, title, description, children, className }: BaseSectionProps) {
  return (
    <BaseSectionRoot id={id} className={className}>
      {title && <TitleH2>{title}</TitleH2>}
      {description && <MinorTextH4>{description}</MinorTextH4>}
      {children}
    </BaseSectionRoot>
  )
}
