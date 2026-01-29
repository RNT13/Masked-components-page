import { GlobalDiv, MinorTextH4, TitleH2, TitleH3 } from '@/styles/globalStyles'
import { LuMousePointerClick } from 'react-icons/lu'

import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { MButton } from '../MaskedButton/MaskedButton'
import { ButtonRow, ButtonSectionContainer, Section } from './ButtonSectionStyles'

export default function ButtonSection() {
  const [isActive, setIsActive] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <ButtonSectionContainer>
      <div>
        <TitleH2>
          <LuMousePointerClick /> Masked Buttons
        </TitleH2>
        <MinorTextH4>
          Buttons with multiple variants and states, including loading, disabled, and error.
          They support left and right icons and include an optional visual tooltip displayed via a label, enhancing user feedback and overall experience.
        </MinorTextH4>
      </div>

      <GlobalDiv>
        {/* ================= VARIANTS ================= */}
        <Section>
          <TitleH3> Variants</TitleH3>

          <ButtonRow>
            <MButton variant="default" label="It's a default button" >Default</MButton>
            <MButton variant="outline" label="it's an outline button" >Outline</MButton>
            <MButton variant="ghost" label="it's a ghost button" >Ghost</MButton>
            <MButton variant="gradient" label="it's a gradient button">Gradient</MButton>
            <MButton variant="neon" label="it's a neon button">Neon</MButton>
            <MButton href="https://google.com" variant="link" label="Go to google" >Link</MButton>
            <MButton variant="toggle" $toggleLabel='Toggle' $isActive={toggle} onClick={() => setToggle(!toggle)} />
          </ButtonRow>
        </Section>

        {/* ================= STATES ================= */}
        <Section>
          <TitleH3>States</TitleH3>

          <ButtonRow>
            <MButton variant="default" state="error" label="It has an error" >Default + Error</MButton>
            <MButton variant="default" state="loading" label="It's loading" >Default + Loading</MButton>
            <MButton variant="default" state="disabled" label="It's disabled" >Default + Disabled</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="outline" state="error" label="It has an error" >Outline + Error</MButton>
            <MButton variant="outline" state="loading" label="It's loading" >Outline + Loading</MButton>
            <MButton variant="outline" state="disabled" label="It's disabled" >Outline + Disabled</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="ghost" state="error" label="It has an error" >Ghost + Error</MButton>
            <MButton variant="ghost" state="loading" label="It's loading" >Ghost + Loading</MButton>
            <MButton variant="ghost" state="disabled" label="It's disabled" >Ghost + Disabled</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="gradient" state="error" label="It has an error" >Link + Error</MButton>
            <MButton variant="gradient" state="loading" label="It's loading" >Gradient + Loading</MButton>
            <MButton variant="gradient" state="disabled" label="It's disabled" >Gradient + Disabled</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="neon" state="error" label="It has an error" >Neon + Error</MButton>
            <MButton variant="neon" state="loading" label="It's loading" >Neon + Loading</MButton>
            <MButton variant="neon" state="disabled" label="It's disabled" >Neon + Disabled</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="link" state="error" label="It has an error" >Link + Error</MButton>
            <MButton variant="link" state="loading" label="It's loading" >Link + Loading</MButton>
            <MButton variant="link" state="disabled" label="It's disabled" >Link + Disabled</MButton>
          </ButtonRow>
        </Section>

        {/* ================= VARIANT + STATE ================= */}
        <Section>
          <TitleH3> Variant + Active</TitleH3>

          <ButtonRow>
            <MButton variant="default" label="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Default</MButton>

            <MButton
              variant="outline"
              label="Clique para ativar"
              $isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            >Outline</MButton>

            <MButton variant="ghost" label="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Ghost</MButton>

            <MButton
              variant="gradient"
              label="Clique para ativar"
              $isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            >Gradient</MButton>

            <MButton variant="neon" label="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Neon</MButton>

            <MButton variant="toggle" label="Clique para ativar" $toggleLabel='Toggle' $isActive={isActive} onClick={() => setIsActive(!isActive)} />

            <MButton variant="link" label="Clique para ativar" $isActive={isActive} onClick={() => setIsActive(!isActive)} >Link</MButton>
          </ButtonRow>
        </Section>

        {/* ================= ICONS ================= */}
        <Section>
          <TitleH3>Icons</TitleH3>

          <ButtonRow>
            <MButton variant="default" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Default + leftIcon
            </MButton>

            <MButton variant="default" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Default + rightIcon
            </MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="outline" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Outline + leftIcon
            </MButton>

            <MButton variant="outline" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Outline + rightIcon
            </MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="ghost" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Ghost + leftIcon
            </MButton>

            <MButton variant="ghost" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Ghost + rightIcon
            </MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="gradient" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Gradient + leftIcon
            </MButton>

            <MButton variant="gradient" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Gradient + rightIcon
            </MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="link" href='www.google.com' label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Link + leftIcon
            </MButton>

            <MButton variant="link" href='www.google.com' label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Link + rightIcon
            </MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="neon" label="Clique para ativar" leftIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Neon + leftIcon
            </MButton>

            <MButton variant="neon" label="Clique para ativar" rightIcon={<BsStars />} onClick={() => setIsActive(!isActive)} >
              Neon + rightIcon
            </MButton>
          </ButtonRow>
        </Section>

        {/* ================= SIZES ================= */}
        <Section>
          <TitleH3>Sizes</TitleH3>

          <ButtonRow>
            <MButton variant="default" size="sm" label="It's a small default button" >Default</MButton>
            <MButton variant="default" size="md" label="It's a medium default button" >Default</MButton>
            <MButton variant="default" size="lg" label="It's a large default button" >Default</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="outline" size="sm" label="It's a small outline button" >Outline</MButton>
            <MButton variant="outline" size="md" label="It's a medium outline button" >Outline</MButton>
            <MButton variant="outline" size="lg" label="It's a large outline button" >Outline</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="ghost" size="sm" label="It's a small ghost button" >Ghost</MButton>
            <MButton variant="ghost" size="md" label="It's a medium ghost button" >Ghost</MButton>
            <MButton variant="ghost" size="lg" label="It's a large ghost button" >Ghost</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="gradient" size="sm" label="It's a small gradient button" >Gradient</MButton>
            <MButton variant="gradient" size="md" label="It's a medium gradient button" >Gradient</MButton>
            <MButton variant="gradient" size="lg" label="It's a large gradient button" >Gradient</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="neon" size="sm" label="It's a small neon button" >Neon</MButton>
            <MButton variant="neon" size="md" label="It's a medium neon button" >Neon</MButton>
            <MButton variant="neon" size="lg" label="It's a large neon button" >Neon</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="link" href='www.google.com' size="sm" label="It's a small link button" >Link</MButton>
            <MButton variant="link" href='www.google.com' size="md" label="It's a medium link button" > Link</MButton>
            <MButton variant="link" href='www.google.com' size="lg" label="It's a large link button" > Link</MButton>
          </ButtonRow>
        </Section>

        {/* ================= SHAPES ================= */}
        <Section>
          <TitleH3>Shapes</TitleH3>

          <ButtonRow>
            <MButton variant="default" shapes="circle" label="It's a default button" ><BsStars /></MButton>

            <MButton variant="default" shapes="rounded" label="It's a default button" >Default</MButton>

            <MButton variant="default" shapes="square" label="It's a default button" >Default</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="outline" shapes="circle" label="It's a outline button" ><BsStars /></MButton>

            <MButton variant="outline" shapes="rounded" label="It's a outline button" >Outline</MButton>

            <MButton variant="outline" shapes="square" label="It's a outline button" >Outline</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="ghost" shapes="circle" label="It's a ghost button" ><BsStars /></MButton>

            <MButton variant="ghost" shapes="rounded" label="It's a ghost button" >Ghost</MButton>

            <MButton variant="ghost" shapes="square" label="It's a ghost button" >Ghost</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="gradient" shapes="circle" label="It's a gradient button" ><BsStars /></MButton>

            <MButton variant="gradient" shapes="rounded" label="It's a gradient button" >Gradient</MButton>

            <MButton variant="gradient" shapes="square" label="It's a gradient button" >Gradient</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="neon" shapes="circle" label="It's a neon button" ><BsStars /></MButton>

            <MButton variant="neon" shapes="rounded" label="It's a neon button" >Neon</MButton>

            <MButton variant="neon" shapes="square" label="It's a neon button" >Neon</MButton>
          </ButtonRow>
        </Section>

        {/* ================= FULL WIDTH ================= */}
        <Section>
          <TitleH3> Full Width</TitleH3>

          <ButtonRow>
            <MButton variant="default" size="md" fullWidth label="It's a full width button" >Full width</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="outline" size="md" fullWidth label="It's a full width button" >Full width</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="ghost" size="md" fullWidth label="It's a full width button" >Full width</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="gradient" size="md" fullWidth label="It's a full width button" >Full width</MButton>
          </ButtonRow>

          <ButtonRow>
            <MButton variant="neon" size="md" fullWidth label="It's a full width button" >Full width</MButton>
          </ButtonRow>
        </Section>
      </GlobalDiv>
    </ButtonSectionContainer>
  )
}
