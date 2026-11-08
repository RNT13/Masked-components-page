'use client'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { InstallSectionContainer, InstallSectionContent, SectionLabel } from './InstallSection.styles'
import { CodeBlock } from '@/components/layout/CodeBlock/CodeBlock'

export default function InstallSection() {
  return (
    <BaseSection id="install">
      <BaseDiv>
        <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
          <TitleH3>Installation</TitleH3>
          <SectionLabel>Get started in seconds</SectionLabel>
        </MaskedAnimation>

        <InstallSectionContainer>
          <InstallSectionContent>
            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
              <CodeBlock
                title="Install the CLI"
                code={`npx masked-components-cli`}
              />
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.1}>
              <CodeBlock
                title="Add a component"
                code={`npx masked-components-cli masked-button\nnpx masked-components-cli masked-input\nnpx masked-components-cli masked-cards`}
              />
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.2}>
              <CodeBlock
                title="Add themes + animations"
                code={`npx masked-components-cli masked-themes\nnpx masked-components-cli masked-animations`}
              />
            </MaskedAnimation>
          </InstallSectionContent>
        </InstallSectionContainer>
      </BaseDiv>
    </BaseSection>
  )
}
