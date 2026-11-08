'use client'

import { BsGithub } from 'react-icons/bs'
import { FaTerminal } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { CodeBlock } from '../AnimationSection/AnimationSection.styles'
import { HeroContainer, HeroContent, HeroBadge, HeroTitle, HeroGradient, HeroSubtitle, HeroActions, HeroStats, Stat, StatValue, StatLabel } from './HeroSection.styles'

const INSTALL_CODE = `npx masked-components-cli`

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <MaskedAnimation variant="revealFadeInDown" trigger="mount">
          <HeroBadge>v2.0 — styled-components 6 · React 19 · Next.js 15</HeroBadge>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.1}>
          <HeroTitle>
            Componentes com <HeroGradient>máscara</HeroGradient>,
            <br />
            tema e animação. Prontos.
          </HeroTitle>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.2}>
          <HeroSubtitle>
            Instale só o que precisa via CLI. Inputs mascarados, botões, cards,
            drawer, popup, skeleton, animações e um motor de temas — tudo tipado
            e sem dependência de UI kit externo.
          </HeroSubtitle>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.3}>
          <HeroActions>
            <MaskedButton variant="gradient" href="#install" leftIcon={<FaTerminal />}>
              Get started
            </MaskedButton>
            <MaskedButton
              variant="outline"
              href="https://github.com/RNT13/masked-components-cli"
              target="_blank"
              leftIcon={<BsGithub />}
            >
              GitHub
            </MaskedButton>
          </HeroActions>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.4}>
          <CodeBlock title="Terminal">{INSTALL_CODE}</CodeBlock>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.5}>
          <HeroStats>
            <Stat>
              <StatValue>9</StatValue>
              <StatLabel>input variants</StatLabel>
            </Stat>
            <Stat>
              <StatValue>11</StatValue>
              <StatLabel>button variants</StatLabel>
            </Stat>
            <Stat>
              <StatValue>6</StatValue>
              <StatLabel>card variants</StatLabel>
            </Stat>
            <Stat>
              <StatValue>5</StatValue>
              <StatLabel>built-in themes</StatLabel>
            </Stat>
          </HeroStats>
        </MaskedAnimation>
      </HeroContent>
    </HeroContainer>
  )
}
