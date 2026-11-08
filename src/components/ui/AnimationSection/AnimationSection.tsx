'use client'

import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { AnimationSectionContainer, AnimationSectionContent, SectionLabel, AnimationGrid, AnimationCard, CodeBlock, AnimationDropDown, DemoWindow } from './AnimationSection.styles'

const REVEAL_CODE = `<MaskedAnimation variant="revealFadeInUp" trigger="scroll">
  <Card>Aparece ao entrar na viewport</Card>
</MaskedAnimation>

// once={false} repete a cada entrada; delay em segundos
<MaskedAnimation variant="revealPopElastic" trigger="scroll" delay={0.2}>
  <Card>Com atraso</Card>
</MaskedAnimation>`

const CONTINUOUS_CODE = `<MaskedAnimation variant="continuousGlowDiagonal" trigger="always">
  <Button>Brilho em loop</Button>
</MaskedAnimation>

<MaskedAnimation variant="continuousFloat" trigger="always">
  <Badge>Flutuando</Badge>
</MaskedAnimation>`

const CONTROLLED_CODE = `const [open, setOpen] = useState(false)

<MaskedButton onClick={() => setOpen(!open)}>Toggle</MaskedButton>

<MaskedAnimation
  variant="controlledDrawer"
  trigger="controlled"
  isOn={open}
>
  <Menu>Conteúdo colapsável</Menu>
</MaskedAnimation>`

const ONESHOT_CODE = `<MaskedAnimation variant="oneShotShakeX" trigger="mount">
  <ErrorCard>Feedback de erro</ErrorCard>
</MaskedAnimation>

<MaskedAnimation variant="oneShotGlowSweep" trigger="mount">
  <Card>Varredura única de brilho</Card>
</MaskedAnimation>`

export default function AnimationSection() {
  const [open, setOpen] = useState(false)

  return (
    <AnimationSectionContainer>
      <AnimationSectionContent>
        <BaseSection>
          <BaseDiv>
            <SectionLabel>
              <BsStars /> MaskedAnimation
            </SectionLabel>
            <TitleH3>4 famílias de triggers, 60+ variants</TitleH3>
            <p>
              Um único componente controla quando a animação dispara:{' '}
              <code>scroll</code>, <code>always</code>, <code>controlled</code> ou{' '}
              <code>mount</code>. O prefixo da variant indica a família.
            </p>

            {/* ---------- REVEAL (scroll) ---------- */}
            <AnimationGrid>
              <AnimationCard>
                <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
                  <DemoWindow>revealFadeInUp</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="revealPopElastic" trigger="scroll">
                  <DemoWindow>revealPopElastic</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="revealClipUp" trigger="scroll">
                  <DemoWindow>revealClipUp</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="revealZoomFromDeep" trigger="scroll">
                  <DemoWindow>revealZoomFromDeep</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
            </AnimationGrid>
            <CodeBlock>{REVEAL_CODE}</CodeBlock>

            {/* ---------- CONTINUOUS (always) ---------- */}
            <AnimationGrid>
              <AnimationCard>
                <MaskedAnimation variant="continuousGlowDiagonal" trigger="always">
                  <DemoWindow>continuousGlowDiagonal</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="continuousFloat" trigger="always">
                  <DemoWindow>continuousFloat</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="continuousGoldBorderPremium" trigger="always">
                  <DemoWindow>continuousGoldBorderPremium</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="continuousShine" trigger="always">
                  <DemoWindow>continuousShine</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
            </AnimationGrid>
            <CodeBlock>{CONTINUOUS_CODE}</CodeBlock>

            {/* ---------- CONTROLLED ---------- */}
            <AnimationDropDown>
              <MaskedButton variant="default" onClick={() => setOpen(!open)}>
                {open ? 'Fechar' : 'Abrir'} menu
              </MaskedButton>
              <MaskedAnimation
                variant="controlledDrawer"
                trigger="controlled"
                isOn={open}
              >
                <DemoWindow>Menu Content — controlledDrawer</DemoWindow>
              </MaskedAnimation>
            </AnimationDropDown>
            <CodeBlock>{CONTROLLED_CODE}</CodeBlock>

            {/* ---------- ONE-SHOT (mount) ---------- */}
            <AnimationGrid>
              <AnimationCard>
                <MaskedAnimation variant="oneShotShakeX" trigger="mount">
                  <DemoWindow>oneShotShakeX</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="oneShotGlowSweep" trigger="mount">
                  <DemoWindow>oneShotGlowSweep</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="oneShotJumpRotate" trigger="mount">
                  <DemoWindow>oneShotJumpRotate</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
              <AnimationCard>
                <MaskedAnimation variant="oneShotRocketLaunch" trigger="mount">
                  <DemoWindow>oneShotRocketLaunch</DemoWindow>
                </MaskedAnimation>
              </AnimationCard>
            </AnimationGrid>
            <CodeBlock>{ONESHOT_CODE}</CodeBlock>

            <p>
              <FaCode /> Lista completa em{' '}
              <code>MaskedAnimations/animations/</code> — o autocomplete de{' '}
              <code>variant</code> mostra todas as chaves válidas.
            </p>
          </BaseDiv>
        </BaseSection>
      </AnimationSectionContent>
    </AnimationSectionContainer>
  )
}
