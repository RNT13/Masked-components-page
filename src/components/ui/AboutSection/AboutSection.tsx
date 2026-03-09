import { MAnimation } from "@/styles/MaskedAnimations/MAnimation";
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

          <MAnimation trigger="scroll" variant="popElastic" >
            <DivCard
              icon={<FaCode />}
              title="Polymorphic & Flexible"
              description="Components that adapt to any use case with a simple API and intuitive TypeScript for better DX."
            />
          </MAnimation>

          <MAnimation trigger="scroll" variant="popElastic" >
            <DivCard
              icon={<AiFillThunderbolt />}
              title="Performance Optimized"
              description="Efficient rendering, optimized bundle size and zero unnecessary dependencies. Built for scale."
            />
          </MAnimation>

          <MAnimation trigger="scroll" variant="popElastic" >
            <DivCard
              icon={<FaPalette />}
              title="Modern Design"
              description="Contemporary styles with theme support, smooth animations and accessibility in mind."
            />
          </MAnimation>

        </AboutSectionContent>
      </AboutSectionContainer>
    </BaseSection>
  )
}
