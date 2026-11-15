import { MinorTextH4, TitleH2 } from '@/styles/globalStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { RiDownload2Line } from 'react-icons/ri'
import { WiStars } from 'react-icons/wi'
import BaseDiv from '../BaseDiv/BaseDiv'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { ButtonDiv, DisclaimerSectionContainer, DisclaimerSectionContent, SvgDiv } from './DisclaimerSection.styles'

export default function DisclaimerSection() {
  return (
    <MaskedAnimation trigger="scroll" variant="revealFadeInUp" once>
      <BaseDiv direction="column">
        <DisclaimerSectionContainer>
          <DisclaimerSectionContent>

            <SvgDiv>
              <MaskedAnimation trigger="scroll" variant="revealBlurIn">
                <WiStars className="svgGreen" />
              </MaskedAnimation>
            </SvgDiv>

            <MaskedAnimation trigger="scroll" variant="revealFadeInUp" position='center' delay={0.2}>
              <TitleH2>Let&apos;s get started</TitleH2>
            </MaskedAnimation>

            <MaskedAnimation trigger="scroll" variant="revealFadeInUp" position='center' delay={0.4}>
              <MinorTextH4>
                Install now and transform your forms and interfaces with modern polymorphic
                components.
              </MinorTextH4>
            </MaskedAnimation>

            <MaskedAnimation trigger="scroll" variant="revealRotateDrop">
              <ButtonDiv>
                <MaskedButton
                  variant="default"
                  size="lg"
                  href="#install"
                  label="Install"
                  leftIcon={<RiDownload2Line />}
                >
                  Install Masked Components
                </MaskedButton>
              </ButtonDiv>
            </MaskedAnimation>

          </DisclaimerSectionContent>
        </DisclaimerSectionContainer>
      </BaseDiv>
    </MaskedAnimation>
  )
}
