'use client'

import { useState } from 'react'
import { BsClipboard2, BsClipboard2Check, BsGithub } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa6'

import { STATS } from '@/components/layout/data/catalog'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import {
  HeroActions,
  HeroContent,
  HeroHeadline,
  HeroSectionContainer,
  HeroSub,
  InstallCommand,
  StatItem,
  StatLabel,
  StatsRow,
  StatValue
} from './HeroSection.styles'

const INSTALL_CMD = 'npx masked-components-cli'

const stats = [
  { value: STATS.packages, label: 'Installable packages' },
  { value: STATS.buttonVariants, label: 'Button variants' },
  { value: STATS.inputVariants, label: 'Input variants' },
  { value: STATS.cardVariants, label: 'Card variants' },
  { value: STATS.animations, label: 'Animations' },
  { value: STATS.themes, label: 'Themes' }
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
        <MaskedAnimation variant="revealGlideUp" trigger="mount">
          <HeroHeadline>
            Polymorphic components, <span>copied into your project</span>
          </HeroHeadline>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.1}>
          <HeroSub>
            Buttons, inputs, cards, overlays, toasts, animations and a theme engine. One command
            copies the source into your app: you own the code, and React is the only runtime
            requirement besides styled-components.
          </HeroSub>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.2}>
          <HeroActions>
            <MaskedButton variant="gradient" size="lg" rightIcon={<FaRocket />} href="#install">
              Get started
            </MaskedButton>
            <MaskedButton
              variant="outline"
              size="lg"
              rightIcon={<BsGithub />}
              href="https://github.com/RNT13/masked-components-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </MaskedButton>
          </HeroActions>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.3}>
          <InstallCommand onClick={copyInstall} aria-label={`Copy: ${INSTALL_CMD}`}>
            <code>$ {INSTALL_CMD}</code>
            {copied ? <BsClipboard2Check /> : <BsClipboard2 />}
          </InstallCommand>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.4}>
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
