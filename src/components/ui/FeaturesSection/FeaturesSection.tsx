
import { MinorTextH4 } from "@/styles/globalStyles";
import { MAnimation } from "@/styles/MaskedAnimations/MAnimation";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import BaseDiv from "../BaseDiv/BaseDiv";
import BaseSection from "../BaseSection/BaseSection";
import { FeaturesDiv, FeaturesSectionContainer, FeaturesSectionContent } from "./FeaturesSection.styles";

export default function FeaturesSection() {
  return (
    <BaseSection
      header
      icon={<FaRegStar />}
      title="Features"
      description="Everything you need to create modern and functional interfaces."
    >
      <FeaturesSectionContainer>
        <FeaturesSectionContent>

          <MAnimation trigger="scroll" variant="fadeInLeft">
            <BaseDiv direction="column" >

              <MAnimation trigger="scroll" variant="slideImpactRight">
                <FeaturesDiv >
                  <FaRegCheckCircle className='svgGreen' />
                  <div>
                    <p>TypeScript Native</p>
                    <MinorTextH4>Full typing and intelligent autocomplete.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactRight">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgGreen' />
                  <div>
                    <p>Polymorphic & Flexible</p>
                    <MinorTextH4>Components that adapt to any use case with a simple and intuitive API.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactRight">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgGreen' />
                  <div>
                    <p>Modern Design</p>
                    <MinorTextH4>Contemporary styles with theme support, smooth animations, and accessibility first.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactRight">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgGreen' />
                  <div>
                    <p>Customizable</p>
                    <MinorTextH4>Easy to replace CSS classes and styles.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>
            </BaseDiv>
          </MAnimation>

          <MAnimation trigger="scroll" variant="fadeInRight">
            <BaseDiv direction="column">
              <MAnimation trigger="scroll" variant="slideImpactLeft">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgBlue' />
                  <div>
                    <p>Responsive</p>
                    <MinorTextH4>Works perfectly on all devices.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactLeft">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgBlue' />
                  <div>
                    <p>Tree Shaking</p>
                    <MinorTextH4>Import only what you need.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactLeft">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgBlue' />
                  <div>
                    <p>Complete Documentation</p>
                    <MinorTextH4>Detailed examples and guides.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

              <MAnimation trigger="scroll" variant="slideImpactLeft">
                <FeaturesDiv>
                  <FaRegCheckCircle className='svgBlue' />
                  <div>
                    <p>Optimized Performance</p>
                    <MinorTextH4>Efficient rendering, optimized bundle size, and zero unnecessary dependencies.</MinorTextH4>
                  </div>
                </FeaturesDiv>
              </MAnimation>

            </BaseDiv>
          </MAnimation>

        </FeaturesSectionContent>
      </FeaturesSectionContainer>
    </BaseSection>
  )
}
