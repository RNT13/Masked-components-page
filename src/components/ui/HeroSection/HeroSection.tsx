'use client'

import { useState } from 'react'
import { BsGithub, BsClipboard2, BsClipboard2Check } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import {
  HeroSectionContainer,
  HeroContent,
  HeroHeadline,
  HeroSub,
  HeroActions,
  InstallCommand,
  StatsRow,
  StatItem,
  StatValue,
  StatLabel
} from './HeroSection.styles'

const INSTALL_CMD = 'npx masked-components-cli'

const stats = [
  { value: '9', label: 'Input variants' },
  { value: '11', label: 'Button variants' },
  { value: '6', label: 'Card variants' },
  { value: '9', label: 'Themes' }
]

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <HeroSectionContainer>
      <HeroContent>
        <MaskedAnimation variant="revealFadeInUp" trigger="mount">
          <HeroHeadline>
            Componentes com máscara,{' '}
            <span>prontos para produção</span>
          </HeroHeadline>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.1}>
          <HeroSub>
            Buttons, inputs, cards, overlays, skeletons, animações e um motor de
            temas — instalados no seu projeto com um comando, sem dependência de
            runtime escondida.
          </HeroSub>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.2}>
          <HeroActions>
            <MaskedButton
              variant="gradient"
              size="lg"
              rightIcon={<FaRocket />}
              href="#install"
            >
              Get started
            </MaskedButton>
            <MaskedButton
              variant="outline"
              size="lg"
              rightIcon={<BsGithub />}
              href="https://github.com/RNT13/masked-components-cli"
              target="_blank"
            >
              GitHub
            </MaskedButton>
          </HeroActions>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.3}>
          <InstallCommand onClick={copyInstall} title="Click to copy">
            <code>$ {INSTALL_CMD}</code>
            {copied ? <BsClipboard2Check /> : <BsClipboard2 />}
          </InstallCommand>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.4}>
          <StatsRow>
            {stats.map((s) => (
              <StatItem key={s.label}>
                <StatValue>{s.value}</StatValue>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            ))}
          </StatsRow>
        </MaskedAnimation>
      </HeroContent>
    </HeroSectionContainer>
  )
}
