import { MinorTextH4, TitleH2 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MaskedAnimations/MAnimation";
import { RiDownload2Line } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import BaseDiv from "../BaseDiv/BaseDiv";
import { MButton } from "../MaskedButton/MaskedButton";
import { ButtonDiv, DisclaimerSectionContainer, DisclaimerSectionContent } from "./DisclaimerSection.styles";

export default function DisclaimerSection() {
  return (
    <MAnimation trigger="scroll" variant="magneticRise">

      <BaseDiv direction="column">
        <DisclaimerSectionContainer>
          <DisclaimerSectionContent>

            <MAnimation trigger="always" variant="pulse" center>
              <WiStars className="svgGreen" />
            </MAnimation>

            <MAnimation trigger="scroll" variant="fadeInUp" center>
              <TitleH2>Lets Get Started</TitleH2>
            </MAnimation>


            <MAnimation trigger="scroll" variant="fadeInUp" center>
              <MinorTextH4>Install now and transform your formulas and interfaces with modern polymorphic components.</MinorTextH4>
            </MAnimation>

            <MAnimation trigger="scroll" variant="rotateDrop">
              <ButtonDiv>
                <MButton variant="default" size='lg' href='#install' tooltip="Install" leftIcon={<RiDownload2Line />} >Install Masked Components</MButton>
              </ButtonDiv>
            </MAnimation>

          </DisclaimerSectionContent>
        </DisclaimerSectionContainer>
      </BaseDiv>

    </MAnimation>
  )
}
