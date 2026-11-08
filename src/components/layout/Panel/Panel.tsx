'use client'

import type { ReactNode } from 'react'
import { PanelRoot, PanelHeader, PanelTitle, PanelBody } from './Panel.styles'

type PanelProps = {
  title?: string
  actions?: ReactNode
  children: ReactNode
  elevated?: boolean
  className?: string
}

export function Panel({ title, actions, children, elevated, className }: PanelProps) {
  return (
    <PanelRoot $elevated={elevated} className={className}>
      {(title || actions) && (
        <PanelHeader>
          {title && <PanelTitle>{title}</PanelTitle>}
          {actions}
        </PanelHeader>
      )}
      <PanelBody>{children}</PanelBody>
    </PanelRoot>
  )
}
