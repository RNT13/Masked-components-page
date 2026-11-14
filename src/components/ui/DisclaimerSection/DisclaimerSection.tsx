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
              <WiStars className="svgGreen" />
            </SvgDiv>

            <TitleH2>Let&apos;s get started</TitleH2>

            <MinorTextH4>
              Install now and transform your forms and interfaces with modern polymorphic
              components.
            </MinorTextH4>

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
          </DisclaimerSectionContent>
        </DisclaimerSectionContainer>
      </BaseDiv>
    </MaskedAnimation>
  )
}
