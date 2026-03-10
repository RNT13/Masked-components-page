"use client"

import { TitleH3 } from "@/styles/globalStyles"
import { BsStars } from "react-icons/bs"
import { FaCode } from "react-icons/fa6"

import { MAnimation } from "@/styles/MaskedAnimations/MAnimation"
import { useState } from "react"
import BaseDiv from "../BaseDiv/BaseDiv"
import BaseSection from "../BaseSection/BaseSection"
import { MButton } from "../MaskedButton/MaskedButton"
import { AnimationCard, AnimationDiv, AnimationDropDown, AnimationSectionContainer, AnimationSectionContent, Section, Window } from "./AnimationSection.tyles"

export default function AnimationSection() {
  const [open, setOpen] = useState(false)

  return (
    <AnimationSectionContainer>
      <AnimationSectionContent>

        <BaseSection
          header
          icon={<FaCode />}
          title="Basic usage of MAnimation"
          fileType="tsx"
          description="Simple example of using MAnimation."
          content1={`
              <Div>
                <MAnimation trigger="hover" variant="blurIn" center>
                  <p>blurIn</p>
                </MAnimation>
              </Div>
              `}

          content2={`
              <MAnimation trigger="hover" variant="spin"  >
                <div>
                  <BsStars />
                  spin
                </div>
              </MAnimation>
              `}

          content3={`
              <div>

                <MButton variant="default" onClick={() => setOpen(!open)}>
                  Click here
                </MButton>

                <MAnimation trigger="controlled" variant="drawer" isOn={open}>
                  <Window>
                    Menu Content
                  </Window>
                </MAnimation>

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
          <MAnimation trigger="scroll" variant="fadeInLeft">
            <Section>
              <TitleH3>Reveal Animations</TitleH3>

              <AnimationDiv>

                <MAnimation trigger="hover" variant="blurIn" center>
                  <AnimationCard>
                    <BsStars />
                    <p>blurIn</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="fadeInLeft">
                  <AnimationCard>
                    <BsStars />
                    <p>fadeInLeft</p>
                  </AnimationCard >
                </MAnimation>

                <MAnimation trigger="hover" variant="fadeInRight">
                  <AnimationCard>
                    <BsStars />
                    <p>fadeInRight</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="fadeInUp">
                  <AnimationCard>
                    <BsStars />
                    <p>fadeInUp</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="fadeInUpRotate">
                  <AnimationCard>
                    <BsStars />
                    <p>fadeInUpRotate</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="fadeOutDown">
                  <AnimationCard>
                    <BsStars />
                    <p>fadeOutDown</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="flipX" >
                  <AnimationCard>
                    <BsStars />
                    <p>flipX</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="flipY">
                  <AnimationCard>
                    <BsStars />
                    <p>flipY</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="magneticRise">
                  <AnimationCard>
                    <BsStars />
                    <p>magneticRise</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="popElastic">
                  <AnimationCard>
                    <BsStars />
                    <p>popElastic</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="rotateDrop" delay={0.5}>
                  <AnimationCard>
                    <BsStars />
                    <p>rotateDrop</p>
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="zoomFromDeep">
                  <AnimationCard>
                    <BsStars />
                    <p>zoomFromDeep</p>
                  </AnimationCard>
                </MAnimation>

              </AnimationDiv>
            </Section>
          </MAnimation>

          {/* ================= CONTINUOUS ================= */}
          <MAnimation trigger="scroll" variant="fadeInLeft">
            <Section>
              <TitleH3>Continuous Animations</TitleH3>

              <AnimationDiv>

                <MAnimation trigger="hover" variant="spin"  >
                  <AnimationCard>
                    <BsStars />
                    spin
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="pulse" >
                  <AnimationCard >
                    <BsStars />
                    pulse
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="bounce">
                  <AnimationCard>
                    <BsStars />
                    bounce
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="float">
                  <AnimationCard>
                    <BsStars />
                    float
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="jumpRotate">
                  <AnimationCard>
                    <BsStars />
                    jumpRotate
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="horizontalLine">
                  <AnimationCard>
                    <BsStars />
                    horizontalLine
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="shakeX">
                  <AnimationCard>
                    <BsStars />
                    shakeX
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="skeleton">
                  <AnimationCard>
                    <BsStars />
                    skeleton
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="glow">
                  <AnimationCard>
                    <BsStars />
                    glow
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="InfinityGlowDiagonal">
                  <AnimationCard>
                    <BsStars />
                    InfinityGlowDiagonal
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="InfinityGlowGold">
                  <AnimationCard>
                    <BsStars />
                    InfinityGlowGold
                  </AnimationCard>
                </MAnimation>

                <MAnimation trigger="hover" variant="goldBorderPremium">
                  <AnimationCard>
                    <BsStars />
                    goldBorderPremium
                  </AnimationCard>
                </MAnimation>

              </AnimationDiv>
            </Section>
          </MAnimation>

          {/* ================= CONTROLLED ================= */}
          <MAnimation trigger="scroll" variant="fadeInLeft">
            <Section>
              <TitleH3>State Based Animations</TitleH3>

              <AnimationDiv>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="drawer" isOn={open}>
                    <Window >
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="fadeInOut" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="slideFromLeft" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="slideFromRight" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="slideFromTop" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="slideFromBottom" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="colapse" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

                <AnimationDropDown>

                  <MButton variant="default" onClick={() => setOpen(!open)}>
                    Click here
                  </MButton>

                  <MAnimation trigger="controlled" variant="hideLeft" isOn={open}>
                    <Window>
                      Menu Content
                    </Window>
                  </MAnimation>

                </AnimationDropDown>

              </AnimationDiv>

            </Section>
          </MAnimation>

        </BaseDiv>
      </AnimationSectionContent>
    </AnimationSectionContainer>
  )
}
