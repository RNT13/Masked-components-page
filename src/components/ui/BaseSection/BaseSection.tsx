'use client'

import { MinorTextH4, TitleH2 } from '@/styles/globalStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { useState } from 'react'
import { FaCheck, FaRegCopy } from 'react-icons/fa'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { BaseSectionChildren, SectionContainer, SectionContent, SectionDiv, SectionDivBody, SectionDivHeader } from './BaseSection.styles'

type Props = {
  id?: string
  title?: string
  icon?: React.ReactNode
  fileType?: string
  description?: string
  content1?: React.ReactNode
  content2?: React.ReactNode
  content3?: React.ReactNode
  header?: boolean
  children?: React.ReactNode
}

export default function BaseSection({ title, id, children, icon, fileType, description, content1, content2, content3, header }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!content1) return

    await navigator.clipboard.writeText(String(content1))
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <SectionContainer id={id}>
      <SectionContent>
        <MaskedAnimation trigger='scroll' variant='revealFadeInUp' >
          <TitleH2>
            {icon}
            {title}
          </TitleH2>
        </MaskedAnimation>

        <MaskedAnimation trigger='scroll' variant='revealFadeInLeft'>
          <MinorTextH4>{description}</MinorTextH4>
        </MaskedAnimation>

        {fileType ? (
          <MaskedAnimation trigger='scroll' variant='revealFadeInLeft'>
            <SectionDiv>
              {header && (
                <SectionDivHeader>
                  <p>{fileType}</p>

                  <MaskedButton variant="ghost" size="sm" leftIcon={copied ? <FaCheck /> : <FaRegCopy />} onClick={handleCopy}>
                    {copied ? 'Copied' : 'Copy'}
                  </MaskedButton>
                </SectionDivHeader>
              )}

              <SectionDivBody>
                {content1 && content2 && content3 ? (
                  <pre>
                    <code>{content1}</code>
                    <code># or</code>
                    <code>{content2}</code>
                    <code># or</code>
                    <code>{content3}</code>
                  </pre>
                ) : content1 && content2 ? (
                  <pre>
                    <code>{content1}</code>
                    <code># or</code>
                    <code>{content2}</code>
                  </pre>
                ) : (
                  <pre>
                    <code>{content1 || content2 || content3}</code>
                  </pre>
                )}
              </SectionDivBody>
            </SectionDiv>
          </MaskedAnimation>
        ) : (
          <BaseSectionChildren>
            <>
              {children}
            </>
          </BaseSectionChildren>
        )}
      </SectionContent>
    </SectionContainer>
  )
}
