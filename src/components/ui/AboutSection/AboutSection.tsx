import { MaskedAnimation } from "@/styles/MaskedAnimations/MaskedAnimation";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCode, FaPalette } from "react-icons/fa6";
import BaseSection from "../BaseSection/BaseSection";
import DivCard from "../DivCard/DivCard";
import { AboutSectionContainer, AboutSectionContent } from "./AboutSection.styles";

export default function AboutSection() {
  return (
    <BaseSection >
      <AboutSectionContainer>
        <AboutSectionContent>

          <MaskedAnimation trigger="scroll" variant="revealPopElastic" >
            <DivCard
              icon={<FaCode />}
              title="Polymorphic & Flexible"
              description="Components that adapt to any use case with a simple API and intuitive TypeScript for better DX."
            />
          </MaskedAnimation>

          <MaskedAnimation trigger="scroll" variant="revealPopElastic" >
            <DivCard
              icon={<AiFillThunderbolt />}
              title="Performance Optimized"
              description="Efficient rendering, optimized bundle size and zero unnecessary dependencies. Built for scale."
            />
          </MaskedAnimation>

          <MaskedAnimation trigger="scroll" variant="revealPopElastic" >
            <DivCard
              icon={<FaPalette />}
              title="Modern Design"
              description="Contemporary styles with theme support, smooth animations and accessibility in mind."
            />
          </MaskedAnimation>

        </AboutSectionContent>
      </AboutSectionContainer>
    </BaseSection>
  )
}
