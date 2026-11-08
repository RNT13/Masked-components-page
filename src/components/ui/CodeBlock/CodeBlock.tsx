'use client'

import { useState } from 'react'
import { Block, BlockHeader, BlockTitle, CopyButton, Pre } from './CodeBlock.styles'

type CodeBlockProps = {
  title?: string
  code: string
}

export function CodeBlock({ title = 'Code', code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle>{title}</BlockTitle>
        <CopyButton type="button" onClick={copy} $copied={copied}>
          {copied ? 'Copied!' : 'Copy'}
        </CopyButton>
      </BlockHeader>
      <Pre>
        <code>{code}</code>
      </Pre>
    </Block>
  )
}
