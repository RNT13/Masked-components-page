'use client'

import { useState } from 'react'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote } from '@/components/layout/DemoCard/DemoCard.styles'
import { animationRegistry, type AnimationName } from '@/styles/MaskedAnimations/AnimationRegistry'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { AnimationDemo } from './AnimationDemo'
import { AnimBox, AnimationGrid } from './AnimationSection.styles'


const REVEAL: AnimationName[] = [
  'revealSoftFade', 'revealGlideUp', 'revealSoftScale', 'revealSoftBlur', 'revealCurtain',
  'revealFadeInUp', 'revealPopElastic', 'revealClipUp', 'revealBlurRise', 'revealFlipX',
  'revealDropBounce', 'revealSwingIn', 'revealStretchIn', 'revealSpiralIn', 'revealTiltRise',
  'revealZoomSnap', 'revealSkewSlide', 'revealSlideImpactLeft', 'revealRotateDrop'
]
const CONTINUOUS: AnimationName[] = [
  'continuousBreathe', 'continuousSoftFloat', 'continuousSway', 'continuousHeartbeat',
  'continuousGlowPulse', 'continuousHueShift', 'continuousTilt', 'continuousWobble',
  'continuousFloat', 'continuousPulse', 'continuousBounce', 'continuousShine',
  'continuousGlowDiagonal', 'continuousGlowGold',
  'continuousGoldBorderPremium', 'continuousSilverBorderPremium'
]
const ONE_SHOT: AnimationName[] = [
  'oneShotRubberBand', 'oneShotTada', 'oneShotHeadShake', 'oneShotFlash', 'oneShotFlipSpin',
  'oneShotSwing', 'oneShotShakeX', 'oneShotJumpRotate', 'oneShotGlowSweep',
  'oneShotRocketLaunch', 'oneShotLightningStrike'
]
const CONTROLLED: AnimationName[] = [
  'controlledSoftFade', 'controlledSoftRise', 'controlledScaleSoft',
  'controlledFadeLift', 'controlledBlurIn', 'controlledPopBounce', 'controlledSlideFromBottomSoft'
]

const DEPRECATED = new Set(['revealFadeOutDown', 'controlledColapse'])
const TOTAL = Object.keys(animationRegistry).filter((n) => !DEPRECATED.has(n)).length

const REVEAL_CODE = `// trigger="scroll": anima ao entrar na viewport (once = só na primeira vez)
<MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
  <Card>Aparece ao entrar na viewport</Card>
</MaskedAnimation>

<MaskedAnimation variant="revealPopElastic" trigger="scroll" delay={0.2}>
  <Card>Com atraso (segundos)</Card>
</MaskedAnimation>`

const CONTINUOUS_CODE = `// trigger="always": roda sem parar
<MaskedAnimation variant="continuousGlowDiagonal" trigger="always">
  <Button>Brilho em loop</Button>
</MaskedAnimation>

// efeitos de borda/brilho usam o border-radius do elemento animado
<MaskedAnimation variant="continuousGoldBorderPremium" trigger="always">
  <Card>Borda premium</Card>
</MaskedAnimation>`

const ONE_SHOT_CODE = `// trigger="mount": dispara uma vez (feedback, entrada dramática)
<MaskedAnimation variant="oneShotShakeX" trigger="mount">
  <ErrorCard>Feedback de erro</ErrorCard>
</MaskedAnimation>

// ou dispare quando o elemento aparecer:
<MaskedAnimation variant="oneShotGlowSweep" trigger="scroll" once>
  <Card>Varredura única de brilho</Card>
</MaskedAnimation>`

const CONTROLLED_CODE = `const [open, setOpen] = useState(false)

<MaskedButton onClick={() => setOpen(!open)}>Toggle</MaskedButton>

<MaskedAnimation variant="controlledDrawer" trigger="controlled" isOn={open}>
  <Menu>Conteúdo colapsável</Menu>
</MaskedAnimation>`

export default function AnimationSection() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <InfoNote>
        <strong>{TOTAL} variants</strong> in four families. A single component controls when the
        animation fires: <code>scroll</code>, <code>always</code>, <code>controlled</code> or{' '}
        <code>mount</code>. In this playground the demos replay on a loop and on hover, so you never
        miss one.
      </InfoNote>

      <DemoCard title="Reveal (scroll)" code={REVEAL_CODE} stacked>
        <AnimationGrid>
          {REVEAL.map((v) => (
            <AnimationDemo key={v} variant={v} family="reveal" />
          ))}
        </AnimationGrid>
      </DemoCard>

      <DemoCard title="Continuous (always)" code={CONTINUOUS_CODE} stacked>
        <AnimationGrid>
          {CONTINUOUS.map((v) => (
            <AnimationDemo key={v} variant={v} family="continuous" />
          ))}
        </AnimationGrid>
      </DemoCard>

      <DemoCard title="One-shot (mount)" code={ONE_SHOT_CODE} stacked>
        <AnimationGrid>
          {ONE_SHOT.map((v) => (
            <AnimationDemo key={v} variant={v} family="oneShot" />
          ))}
        </AnimationGrid>
      </DemoCard>

      <DemoCard title="Controlled (state)" code={CONTROLLED_CODE} stacked>
        <AnimationGrid>
          {CONTROLLED.map((v) => (
            <AnimationDemo key={v} variant={v} family="controlled" />
          ))}
        </AnimationGrid>

        <div>
          <MaskedButton variant="default" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} menu
          </MaskedButton>
          <MaskedAnimation variant="controlledDrawer" trigger="controlled" isOn={open}>
            <AnimBox>Menu content — controlledDrawer</AnimBox>
          </MaskedAnimation>
        </div>
      </DemoCard>
    </DemoStack>
  )
}
