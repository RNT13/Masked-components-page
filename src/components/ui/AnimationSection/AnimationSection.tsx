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
        />

        <BaseSection
          icon={<BsStars />}
          title="Masked Animations"
          description="A collection of reusable animations designed for modern UI interactions. Includes reveal animations, continuous motion effects, and controlled state-based animations."
        />

        <BaseDiv direction="column">

          {/* ================= REVEAL ================= */}
          <Section>
            <TitleH3>Reveal Animations</TitleH3>

            <AnimationDiv>

              <AnimationCard>
                <MAnimation trigger="hover" variant="blurIn" center>
                  <p>blurIn</p>
                </MAnimation>
              </AnimationCard>

              <MAnimation trigger="hover" variant="fadeInLeft">
                <AnimationCard>
                  <p>fadeInLeft</p>
                </AnimationCard >
              </MAnimation>

              <MAnimation trigger="hover" variant="fadeInRight">
                <AnimationCard>
                  <p>fadeInRight</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="fadeInUp">
                <AnimationCard>
                  <p>fadeInUp</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="fadeInUpRotate">
                <AnimationCard>
                  <p>fadeInUpRotate</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="fadeOutDown">
                <AnimationCard>
                  <p>fadeOutDown</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="flipX" >
                <AnimationCard>
                  <p>flipX</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="flipY">
                <AnimationCard>
                  <p>flipY</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="magneticRise">
                <AnimationCard>
                  <p>magneticRise</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="popElastic">
                <AnimationCard>
                  <p>popElastic</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="rotateDrop" delay={0.5}>
                <AnimationCard>
                  <p>rotateDrop</p>
                </AnimationCard>
              </MAnimation>

              <MAnimation trigger="hover" variant="zoomFromDeep">
                <AnimationCard>
                  <p>zoomFromDeep</p>
                </AnimationCard>
              </MAnimation>

            </AnimationDiv>
          </Section>

          {/* ================= CONTINUOUS ================= */}
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

          {/* ================= CONTROLLED ================= */}
          <Section>
            <TitleH3>State Based Animations</TitleH3>

            <AnimationDiv>

              <AnimationDropDown>

                <MButton variant="default" onClick={() => setOpen(!open)}>
                  Click here
                </MButton>

                <MAnimation trigger="controlled" variant="drawer" isOn={open}>
                  <Window>
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

        </BaseDiv>
      </AnimationSectionContent>
    </AnimationSectionContainer>
  )
}
