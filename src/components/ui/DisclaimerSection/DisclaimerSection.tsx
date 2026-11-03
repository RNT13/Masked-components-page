import { MinorTextH4, TitleH2 } from "@/styles/globalStyles";
import { MaskedAnimation } from "@/styles/MaskedAnimations/MaskedAnimation";
import { RiDownload2Line } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import BaseDiv from "../BaseDiv/BaseDiv";
import { MaskedButton } from "../MaskedButton/MaskedButton";
import { ButtonDiv, DisclaimerSectionContainer, DisclaimerSectionContent } from "./DisclaimerSection.styles";

export default function DisclaimerSection() {
  return (
    <MaskedAnimation trigger="scroll" variant="revealFadeInUp">

      <BaseDiv direction="column">
        <DisclaimerSectionContainer>
          <DisclaimerSectionContent>

            <MaskedAnimation trigger="always" variant="continuousShine">
              <WiStars className="svgGreen" />
            </MaskedAnimation>

            <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
              <TitleH2>Lets Get Started</TitleH2>
            </MaskedAnimation>


            <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
              <MinorTextH4>Install now and transform your formulas and interfaces with modern polymorphic components.</MinorTextH4>
            </MaskedAnimation>

            <MaskedAnimation trigger="scroll" variant="oneShotJumpRotate">
              <ButtonDiv>
                <MaskedButton variant="default" size='lg' href='#install' label="Install" leftIcon={<RiDownload2Line />} >Install Masked Components</MaskedButton>
              </ButtonDiv>
            </MaskedAnimation>

          </DisclaimerSectionContent>
        </DisclaimerSectionContainer>
      </BaseDiv>

    </MaskedAnimation>
  )
}
