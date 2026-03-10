import { TitleH3 } from '@/styles/globalStyles'
import { LuMousePointerClick } from 'react-icons/lu'

import { MAnimation } from '@/styles/MaskedAnimations/MAnimation'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MButton } from '../MaskedButton/MaskedButton'
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
          They support left and right icons and include an optional visual tooltip displayed via a label, enhancing user feedback and overall experience.'
        />

        <BaseDiv direction="column">
          {/* ================= VARIANTS ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3> Variants</TitleH3>

              <ButtonRow>
                <MButton variant="default" tooltip="It's a default button" >Default</MButton>
                <MButton variant="outline" tooltip="it's an outline button" >Outline</MButton>
                <MButton variant="ghost" tooltip="it's a ghost button" >Ghost</MButton>
                <MButton variant="gradient" tooltip="it's a gradient button">Gradient</MButton>
                <MButton variant="neon" tooltip="it's a neon button">Neon</MButton>
                <MButton href="https://google.com" variant="link" tooltip="Go to google" >Link</MButton>
                <MButton variant="toggle" tooltip='Toggle' $toggleLabel='Toggle' $isActive={toggle} onClick={() => setToggle(!toggle)} />
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= STATES ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3>States</TitleH3>

              <ButtonRow>
                <MButton variant="default" state="error" tooltip="It has an error" >Default + Error</MButton>
                <MButton variant="default" state="loading" tooltip="It's loading" >Default + Loading</MButton>
                <MButton variant="default" state="disabled" tooltip="It's disabled" >Default + Disabled</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="outline" state="error" tooltip="It has an error" >Outline + Error</MButton>
                <MButton variant="outline" state="loading" tooltip="It's loading" >Outline + Loading</MButton>
                <MButton variant="outline" state="disabled" tooltip="It's disabled" >Outline + Disabled</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="ghost" state="error" tooltip="It has an error" >Ghost + Error</MButton>
                <MButton variant="ghost" state="loading" tooltip="It's loading" >Ghost + Loading</MButton>
                <MButton variant="ghost" state="disabled" tooltip="It's disabled" >Ghost + Disabled</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="gradient" state="error" tooltip="It has an error" >Link + Error</MButton>
                <MButton variant="gradient" state="loading" tooltip="It's loading" >Gradient + Loading</MButton>
                <MButton variant="gradient" state="disabled" tooltip="It's disabled" >Gradient + Disabled</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="neon" state="error" tooltip="It has an error" >Neon + Error</MButton>
                <MButton variant="neon" state="loading" tooltip="It's loading" >Neon + Loading</MButton>
                <MButton variant="neon" state="disabled" tooltip="It's disabled" >Neon + Disabled</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="link" state="error" tooltip="It has an error" >Link + Error</MButton>
                <MButton variant="link" state="loading" tooltip="It's loading" >Link + Loading</MButton>
                <MButton variant="link" state="disabled" tooltip="It's disabled" >Link + Disabled</MButton>
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= VARIANT + STATE ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3> Variant + Active</TitleH3>

              <ButtonRow>
                <MButton variant="default" tooltip="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Default</MButton>

                <MButton
                  variant="outline"
                  tooltip="Clique para ativar"
                  $isActive={isActive}
                  onClick={() => setIsActive(!isActive)}
                >Outline</MButton>

                <MButton variant="ghost" tooltip="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Ghost</MButton>

                <MButton
                  variant="gradient"
                  tooltip="Clique para ativar"
                  $isActive={isActive}
                  onClick={() => setIsActive(!isActive)}
                >Gradient</MButton>

                <MButton variant="neon" tooltip="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Neon</MButton>

                <MButton variant="toggle" tooltip="Clique para ativar" $toggleLabel='on / off' $isActive={isActive} onClick={() => setIsActive(!isActive)} />

                <MButton variant="link" tooltip="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Link</MButton>
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= ICONS ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3>Icons</TitleH3>

              <ButtonRow>
                <MButton variant="default" tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Default + leftIcon
                </MButton>

                <MButton variant="default" tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Default + rightIcon
                </MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="outline" tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Outline + leftIcon
                </MButton>

                <MButton variant="outline" tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Outline + rightIcon
                </MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="ghost" tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Ghost + leftIcon
                </MButton>

                <MButton variant="ghost" tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Ghost + rightIcon
                </MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="gradient" tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Gradient + leftIcon
                </MButton>

                <MButton variant="gradient" tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Gradient + rightIcon
                </MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="link" href='www.google.com' tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Link + leftIcon
                </MButton>

                <MButton variant="link" href='www.google.com' tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Link + rightIcon
                </MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="neon" tooltip="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Neon + leftIcon
                </MButton>

                <MButton variant="neon" tooltip="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
                  Neon + rightIcon
                </MButton>
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= SIZES ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3>Sizes</TitleH3>

              <ButtonRow>
                <MButton variant="default" size="sm" tooltip="It's a small default button" >Default</MButton>
                <MButton variant="default" size="md" tooltip="It's a medium default button" >Default</MButton>
                <MButton variant="default" size="lg" tooltip="It's a large default button" >Default</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="outline" size="sm" tooltip="It's a small outline button" >Outline</MButton>
                <MButton variant="outline" size="md" tooltip="It's a medium outline button" >Outline</MButton>
                <MButton variant="outline" size="lg" tooltip="It's a large outline button" >Outline</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="ghost" size="sm" tooltip="It's a small ghost button" >Ghost</MButton>
                <MButton variant="ghost" size="md" tooltip="It's a medium ghost button" >Ghost</MButton>
                <MButton variant="ghost" size="lg" tooltip="It's a large ghost button" >Ghost</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="gradient" size="sm" tooltip="It's a small gradient button" >Gradient</MButton>
                <MButton variant="gradient" size="md" tooltip="It's a medium gradient button" >Gradient</MButton>
                <MButton variant="gradient" size="lg" tooltip="It's a large gradient button" >Gradient</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="neon" size="sm" tooltip="It's a small neon button" >Neon</MButton>
                <MButton variant="neon" size="md" tooltip="It's a medium neon button" >Neon</MButton>
                <MButton variant="neon" size="lg" tooltip="It's a large neon button" >Neon</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="link" href='www.google.com' size="sm" tooltip="It's a small link button" >Link</MButton>
                <MButton variant="link" href='www.google.com' size="md" tooltip="It's a medium link button" > Link</MButton>
                <MButton variant="link" href='www.google.com' size="lg" tooltip="It's a large link button" > Link</MButton>
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= SHAPES ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3>Shapes</TitleH3>

              <ButtonRow>
                <MButton variant="default" shapes="circle" tooltip="It's a default button" leftIcon={<BsStars />} />

                <MButton variant="default" shapes="rounded" tooltip="It's a default button" >Default</MButton>

                <MButton variant="default" shapes="square" tooltip="It's a default button" >Default</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="outline" shapes="circle" tooltip="It's a outline button" leftIcon={<BsStars />} />

                <MButton variant="outline" shapes="rounded" tooltip="It's a outline button" >Outline</MButton>

                <MButton variant="outline" shapes="square" tooltip="It's a outline button" >Outline</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="ghost" shapes="circle" tooltip="It's a ghost button" leftIcon={<BsStars />} />

                <MButton variant="ghost" shapes="rounded" tooltip="It's a ghost button" >Ghost</MButton>

                <MButton variant="ghost" shapes="square" tooltip="It's a ghost button" >Ghost</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="gradient" shapes="circle" tooltip="It's a gradient button" leftIcon={<BsStars />} />

                <MButton variant="gradient" shapes="rounded" tooltip="It's a gradient button" >Gradient</MButton>

                <MButton variant="gradient" shapes="square" tooltip="It's a gradient button" >Gradient</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="neon" shapes="circle" tooltip="It's a neon button" leftIcon={<BsStars />} />

                <MButton variant="neon" shapes="rounded" tooltip="It's a neon button" >Neon</MButton>

                <MButton variant="neon" shapes="square" tooltip="It's a neon button" >Neon</MButton>
              </ButtonRow>
            </Section>
          </MAnimation>

          {/* ================= FULL WIDTH ================= */}
          <MAnimation trigger='scroll' variant="fadeInLeft">
            <Section>
              <TitleH3> Full Width</TitleH3>

              <ButtonRow>
                <MButton variant="default" size="md" fullWidth tooltip="It's a full width button" >Full width</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="outline" size="md" fullWidth tooltip="It's a full width button" >Full width</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="ghost" size="md" fullWidth tooltip="It's a full width button" >Full width</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="gradient" size="md" fullWidth tooltip="It's a full width button" >Full width</MButton>
              </ButtonRow>

              <ButtonRow>
                <MButton variant="neon" size="md" fullWidth tooltip="It's a full width button" >Full width</MButton>
              </ButtonRow>
            </Section>
          </MAnimation>
        </BaseDiv>
      </ButtonSectionContent>
    </ButtonSectionContainer>
  )
}
