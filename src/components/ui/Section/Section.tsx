'use client'

import { MinorTextH4, TitleH2 } from '@/styles/globalStyles'
import { useState } from 'react'
import { FaCheck, FaRegCopy } from 'react-icons/fa'
import { MButton } from '../MaskedButton/MaskedButton'
import { SectionContainer, SectionContent, SectionDiv, SectionDivBody, SectionDivHeader } from './SectionStyles'

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

export default function Section({ title, id, children, icon, fileType, description, content1, content2, content3, header }: Props) {
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
        <TitleH2>
          {icon}
          {title}
        </TitleH2>
        <MinorTextH4>{description}</MinorTextH4>

        {fileType ? (
          <SectionDiv>
            {header && (
              <SectionDivHeader>
                <p>{fileType}</p>

                <MButton variant="ghost" size="sm" leftIcon={copied ? <FaCheck /> : <FaRegCopy />} onClick={handleCopy}>
                  {copied ? 'Copied' : 'Copy'}
                </MButton>
              </SectionDivHeader>
            )}

            <SectionDivBody>
              {content1 && content2 && content3 ? (
                <>
                  <p>{content1}</p>
                  <p># or</p>
                  <p>{content2}</p>
                  <p># or</p>
                  <p>{content3}</p>
                </>
              ) : content1 && content2 ? (
                <>
                  <p>{content1}</p>
                  <p># or</p>
                  <p>{content2}</p>
                </>
              ) : (
                <pre>
                  <code>{content1 || content2 || content3}</code>
                </pre>
              )}
            </SectionDivBody>
          </SectionDiv>
        ) : (
          <div>{children}</div>
        )}
      </SectionContent>
    </SectionContainer>
  )
}
