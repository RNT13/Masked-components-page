'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { Block, BlockHeader, BlockTitle, Pre } from './CodeBlock.styles'
import { useMaskedConfig } from '@/components/ui/MaskedConfigProvider'

type CodeBlockProps = {
  title?: string
  code: string
}

export function CodeBlock({ title = 'Code', code }: CodeBlockProps) {
  const config = useMaskedConfig()

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      config?.onSuccess?.('Copied to clipboard')
    } catch {
      config?.onError?.('Could not copy')
    }
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle>{title}</BlockTitle>
        <MaskedButton variant="ghost" size="sm" onClick={copy}>
          Copy
        </MaskedButton>
      </BlockHeader>
      <Pre>
        <code>{code}</code>
      </Pre>
    </Block>
  )
}
