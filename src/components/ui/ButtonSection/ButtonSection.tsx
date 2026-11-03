import { TitleH3 } from '@/styles/globalStyles'
import { LuMousePointerClick } from 'react-icons/lu'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { ButtonRow, ButtonSectionContainer, ButtonSectionContent, Section } from './ButtonSectionStyles'

export default function ButtonSection() {
  const [isActive, setIsActive] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <ButtonSectionContainer>
      <ButtonSectionContent>

        <BaseSection
          header
          icon={<FaCode />}
          title="Basic usage of MaskedButton"
          fileType="tsx"
          description="Simple example of using MaskedButton."
          content1={`
        <MaskedButton
          type="button"
          variant="default"
          state="default"
          size="sm"
          leftIcon={<FaCode />}
          rightIcon={<FaCode />}
          >
            Default
        </MaskedButton>
                    `}
        />


        <BaseSection
          icon={<LuMousePointerClick />}
          title="Masked Buttons"
          description='Buttons with multiple variants and states, including loading, disabled, and error.
          They support left and right icons and include an optional visual label displayed via a label, enhancing user feedback and overall experience.'
        />

        <BaseDiv direction="column">
          {/* ================= VARIANTS ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3> Variants</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" label="It's a default button" >Default</MaskedButton>
                <MaskedButton variant="outline" label="it's an outline button" >Outline</MaskedButton>
                <MaskedButton variant="ghost" label="it's a ghost button" >Ghost</MaskedButton>
                <MaskedButton variant="gradient" label="it's a gradient button">Gradient</MaskedButton>
                <MaskedButton variant="neon" label="it's a neon button">Neon</MaskedButton>
                <MaskedButton href="https://google.com" variant="link" label="Go to google" >Link</MaskedButton>
                <MaskedButton variant="toggle" label='Toggle' toggleLabel='Toggle' active={toggle} onClick={() => setToggle(!toggle)} />
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= STATES ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3>States</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" state="error" label="It has an error" >Default + Error</MaskedButton>
                <MaskedButton variant="default" state="loading" label="It's loading" >Default + Loading</MaskedButton>
                <MaskedButton variant="default" state="disabled" label="It's disabled" >Default + Disabled</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="outline" state="error" label="It has an error" >Outline + Error</MaskedButton>
                <MaskedButton variant="outline" state="loading" label="It's loading" >Outline + Loading</MaskedButton>
                <MaskedButton variant="outline" state="disabled" label="It's disabled" >Outline + Disabled</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="ghost" state="error" label="It has an error" >Ghost + Error</MaskedButton>
                <MaskedButton variant="ghost" state="loading" label="It's loading" >Ghost + Loading</MaskedButton>
                <MaskedButton variant="ghost" state="disabled" label="It's disabled" >Ghost + Disabled</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="gradient" state="error" label="It has an error" >Link + Error</MaskedButton>
                <MaskedButton variant="gradient" state="loading" label="It's loading" >Gradient + Loading</MaskedButton>
                <MaskedButton variant="gradient" state="disabled" label="It's disabled" >Gradient + Disabled</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="neon" state="error" label="It has an error" >Neon + Error</MaskedButton>
                <MaskedButton variant="neon" state="loading" label="It's loading" >Neon + Loading</MaskedButton>
                <MaskedButton variant="neon" state="disabled" label="It's disabled" >Neon + Disabled</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="link" state="error" label="It has an error" >Link + Error</MaskedButton>
                <MaskedButton variant="link" state="loading" label="It's loading" >Link + Loading</MaskedButton>
                <MaskedButton variant="link" state="disabled" label="It's disabled" >Link + Disabled</MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= VARIANT + STATE ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3> Variant + Active</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" label="Clique para ativar" active={isActive} onClick={() => setIsActive(!isActive)} >Default</MaskedButton>

                <MaskedButton
                  variant="outline"
                  label="Clique para ativar"
                  active={isActive}
                  onClick={() => setIsActive(!isActive)}
                >Outline</MaskedButton>

                <MaskedButton variant="ghost" label="Clique para ativar" active={isActive} onClick={() => setIsActive(!isActive)} >Ghost</MaskedButton>

                <MaskedButton
                  variant="gradient"
                  label="Clique para ativar"
                  active={isActive}
                  onClick={() => setIsActive(!isActive)}
                >Gradient</MaskedButton>

                <MaskedButton variant="neon" label="Clique para ativar" active={isActive} onClick={() => setIsActive(!isActive)} >Neon</MaskedButton>

                <MaskedButton variant="toggle" label="Clique para ativar" toggleLabel='on / off' active={isActive} onClick={() => setIsActive(!isActive)} />

                <MaskedButton variant="link" label="Clique para ativar" active={isActive} onClick={() => setIsActive(!isActive)} >Link</MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= ICONS ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3>Icons</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Default + leftIcon
                </MaskedButton>

                <MaskedButton variant="default" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Default + rightIcon
                </MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="outline" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Outline + leftIcon
                </MaskedButton>

                <MaskedButton variant="outline" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Outline + rightIcon
                </MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="ghost" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Ghost + leftIcon
                </MaskedButton>

                <MaskedButton variant="ghost" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Ghost + rightIcon
                </MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="gradient" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Gradient + leftIcon
                </MaskedButton>

                <MaskedButton variant="gradient" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Gradient + rightIcon
                </MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="link" href='www.google.com' label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Link + leftIcon
                </MaskedButton>

                <MaskedButton variant="link" href='www.google.com' label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Link + rightIcon
                </MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="neon" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Neon + leftIcon
                </MaskedButton>

                <MaskedButton variant="neon" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Neon + rightIcon
                </MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= SIZES ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3>Sizes</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" size="sm" label="It's a small default button" >Default</MaskedButton>
                <MaskedButton variant="default" size="md" label="It's a medium default button" >Default</MaskedButton>
                <MaskedButton variant="default" size="lg" label="It's a large default button" >Default</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="outline" size="sm" label="It's a small outline button" >Outline</MaskedButton>
                <MaskedButton variant="outline" size="md" label="It's a medium outline button" >Outline</MaskedButton>
                <MaskedButton variant="outline" size="lg" label="It's a large outline button" >Outline</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="ghost" size="sm" label="It's a small ghost button" >Ghost</MaskedButton>
                <MaskedButton variant="ghost" size="md" label="It's a medium ghost button" >Ghost</MaskedButton>
                <MaskedButton variant="ghost" size="lg" label="It's a large ghost button" >Ghost</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="gradient" size="sm" label="It's a small gradient button" >Gradient</MaskedButton>
                <MaskedButton variant="gradient" size="md" label="It's a medium gradient button" >Gradient</MaskedButton>
                <MaskedButton variant="gradient" size="lg" label="It's a large gradient button" >Gradient</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="neon" size="sm" label="It's a small neon button" >Neon</MaskedButton>
                <MaskedButton variant="neon" size="md" label="It's a medium neon button" >Neon</MaskedButton>
                <MaskedButton variant="neon" size="lg" label="It's a large neon button" >Neon</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="link" href='www.google.com' size="sm" label="It's a small link button" >Link</MaskedButton>
                <MaskedButton variant="link" href='www.google.com' size="md" label="It's a medium link button" > Link</MaskedButton>
                <MaskedButton variant="link" href='www.google.com' size="lg" label="It's a large link button" > Link</MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= shape ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3>shape</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" shape="circle" label="It's a default button" leftIcon={<BsStars />} />

                <MaskedButton variant="default" shape="rounded" label="It's a default button" >Default</MaskedButton>

                <MaskedButton variant="default" shape="square" label="It's a default button" >Default</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="outline" shape="circle" label="It's a outline button" leftIcon={<BsStars />} />

                <MaskedButton variant="outline" shape="rounded" label="It's a outline button" >Outline</MaskedButton>

                <MaskedButton variant="outline" shape="square" label="It's a outline button" >Outline</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="ghost" shape="circle" label="It's a ghost button" leftIcon={<BsStars />} />

                <MaskedButton variant="ghost" shape="rounded" label="It's a ghost button" >Ghost</MaskedButton>

                <MaskedButton variant="ghost" shape="square" label="It's a ghost button" >Ghost</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="gradient" shape="circle" label="It's a gradient button" leftIcon={<BsStars />} />

                <MaskedButton variant="gradient" shape="rounded" label="It's a gradient button" >Gradient</MaskedButton>

                <MaskedButton variant="gradient" shape="square" label="It's a gradient button" >Gradient</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="neon" shape="circle" label="It's a neon button" leftIcon={<BsStars />} />

                <MaskedButton variant="neon" shape="rounded" label="It's a neon button" >Neon</MaskedButton>

                <MaskedButton variant="neon" shape="square" label="It's a neon button" >Neon</MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>

          {/* ================= FULL WIDTH ================= */}
          <MaskedAnimation trigger='scroll' variant="revealFadeInLeft">
            <Section>
              <TitleH3> Full Width</TitleH3>

              <ButtonRow>
                <MaskedButton variant="default" size="md" fullWidth label="It's a full width button" >Full width</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="outline" size="md" fullWidth label="It's a full width button" >Full width</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="ghost" size="md" fullWidth label="It's a full width button" >Full width</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="gradient" size="md" fullWidth label="It's a full width button" >Full width</MaskedButton>
              </ButtonRow>

              <ButtonRow>
                <MaskedButton variant="neon" size="md" fullWidth label="It's a full width button" >Full width</MaskedButton>
              </ButtonRow>
            </Section>
          </MaskedAnimation>
        </BaseDiv>
      </ButtonSectionContent>
    </ButtonSectionContainer>
  )
}
