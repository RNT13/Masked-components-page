'use client'

import { useEffect, useRef, useState } from 'react'
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { useMaskedConfig } from '@/components/ui/MaskedConfigProvider'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { Block, BlockHeader, BlockTitle, CopyIcon, Pre } from './CodeBlock.styles'

type CodeBlockProps = {
  title?: string
  code: string
}

export function CodeBlock({ title = 'Code', code }: CodeBlockProps) {
  const config = useMaskedConfig()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    const ok = await copyToClipboard(code)
    if (ok) {
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 1600)
      config?.onSuccess?.('Copied to clipboard')
    } else {
      config?.onError?.('Could not copy')
    }
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle>{title}</BlockTitle>
        <MaskedButton variant="ghost" size="sm" onClick={copy} aria-live="polite">
          <CopyIcon $copied={copied}>
            {copied ? <BsClipboard2Check /> : <BsClipboard2 />}
          </CopyIcon>
          {copied ? 'Copied' : 'Copy'}
        </MaskedButton>
      </BlockHeader>
      <Pre>
        <code>{code}</code>
      </Pre>
    </Block>
  )
}
