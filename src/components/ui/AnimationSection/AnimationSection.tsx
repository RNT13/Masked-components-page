"use client"

import { TitleH3 } from "@/styles/globalStyles"
import { BsStars } from "react-icons/bs"
import { FaCode } from "react-icons/fa6"

import { MaskedAnimation } from "@/styles/MaskedAnimations/MaskedAnimation"
import { useState } from "react"
import BaseDiv from "../BaseDiv/BaseDiv"
import BaseSection from "../BaseSection/BaseSection"
import { MaskedButton } from "../MaskedButton/MaskedButton"
import {
  AnimationCard,
  AnimationDiv,
  AnimationDropDown,
  AnimationSectionContainer,
  AnimationSectionContent,
  Section,
  Window
} from "./AnimationSection.tyles"

export default function AnimationSection() {
  const [open, setOpen] = useState(false)

  return (
    <AnimationSectionContainer>
      <AnimationSectionContent>

        <BaseSection
          header
          icon={<FaCode />}
          title="Basic usage of MaskedAnimation"
          fileType="tsx"
          description="Simple example of using MaskedAnimation."
          content1={`  
              <Div>  
                <MaskedAnimation trigger="hover" variant="revealBlurIn" center>  
                  <p>revealBlurIn</p>  
                </MaskedAnimation>  
              </Div>  
              `}

          content2={`  
              <MaskedAnimation trigger="hover" variant="continuousSpin">  
                <div>  
                  <BsStars />  
                  continuousSpin  
                </div>  
              </MaskedAnimation>  
              `}

          content3={`  
              <div>  
  
                <MaskedButton variant="default" onClick={() => setOpen(!open)}>  
                  Click here  
                </MaskedButton>  
  
                <MaskedAnimation trigger="controlled" variant="controlledDrawer" isOn={open}>  
                  <Window>  
                    Menu Content  
                  </Window>  
                </MaskedAnimation>  
  
              </div>  
              `}
        />

        <BaseSection
          icon={<BsStars />}
          title="Masked Animations"
          description="A collection of reusable animations designed for modern UI interactions. Includes reveal animations, continuous motion effects, and controlled state-based animations."
        />

        <BaseDiv direction="column">

          {/* ================= REVEAL ================= */}
          <MaskedAnimation trigger="scroll" variant="revealFadeInLeft">
            <Section>
              <TitleH3>Reveal Animations</TitleH3>

              <AnimationDiv>

                <MaskedAnimation trigger="hover" variant="revealBlurIn">
                  <AnimationCard>
                    <BsStars />
                    <p>revealBlurIn</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInLeft">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInLeft</p>
                  </AnimationCard >
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInRight">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInRight</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInUp">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInUp</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInUpRotate">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInUpRotate</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInDown">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInDown</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFlipX" >
                  <AnimationCard>
                    <BsStars />
                    <p>revealFlipX</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFlipY">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFlipY</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealFadeInUp">
                  <AnimationCard>
                    <BsStars />
                    <p>revealFadeInUp</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealPopElastic">
                  <AnimationCard>
                    <BsStars />
                    <p>revealPopElastic</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="oneShotJumpRotate" delay={0.5}>
                  <AnimationCard>
                    <BsStars />
                    <p>oneShotJumpRotate</p>
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="revealZoomFromDeep">
                  <AnimationCard>
                    <BsStars />
                    <p>revealZoomFromDeep</p>
                  </AnimationCard>
                </MaskedAnimation>

              </AnimationDiv>
            </Section>
          </MaskedAnimation>

          {/* ================= CONTINUOUS ================= */}
          <MaskedAnimation trigger="scroll" variant="revealFadeInLeft">
            <Section>
              <TitleH3>Continuous Animations</TitleH3>

              <AnimationDiv>

                <MaskedAnimation trigger="hover" variant="continuousSpin">
                  <AnimationCard>
                    <BsStars />
                    continuousSpin
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousShine" >
                  <AnimationCard >
                    <BsStars />
                    continuousShine
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousBounce">
                  <AnimationCard>
                    <BsStars />
                    continuousBounce
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousFloat">
                  <AnimationCard>
                    <BsStars />
                    continuousFloat
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousJumpRotate">
                  <AnimationCard>
                    <BsStars />
                    continuousJumpRotate
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousHorizontalLine">
                  <AnimationCard>
                    <BsStars />
                    continuousHorizontalLine
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="oneShotShakeX">
                  <AnimationCard>
                    <BsStars />
                    oneShotShakeX
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousSkeleton">
                  <AnimationCard>
                    <BsStars />
                    continuousSkeleton
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousGlowDiagonal">
                  <AnimationCard>
                    <BsStars />
                    continuousGlowDiagonal
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousGlowDiagonal">
                  <AnimationCard>
                    <BsStars />
                    continuousGlowDiagonal
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousGlowGold">
                  <AnimationCard>
                    <BsStars />
                    continuousGlowGold
                  </AnimationCard>
                </MaskedAnimation>

                <MaskedAnimation trigger="hover" variant="continuousGlow">
                  <AnimationCard>
                    <BsStars />
                    continuousGlow
                  </AnimationCard>
                </MaskedAnimation>

              </AnimationDiv>
            </Section>
          </MaskedAnimation>

          {/* ================= CONTROLLED ================= */}
          <MaskedAnimation trigger="scroll" variant="revealFadeInLeft">
            <Section>
              <TitleH3>State Based Animations</TitleH3>

              <AnimationDiv>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledDrawer" isOn={open}>
                    <Window >
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledFadeInOut" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledSlideFromLeft" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledSlideFromRight" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledSlideFromTop" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledSlideFromBottom" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledCollapse" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MaskedButton>

                  <MaskedAnimation trigger="controlled" variant="controlledHideLeft" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MaskedAnimation>

                </AnimationDropDown>

              </AnimationDiv>

            </Section>
          </MaskedAnimation>

        </BaseDiv>
      </AnimationSectionContent>
    </AnimationSectionContainer>
  )
}