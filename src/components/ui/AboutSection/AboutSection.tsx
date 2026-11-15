'use client'

import { FaTerminal, FaFolderOpen, FaPenToSquare } from 'react-icons/fa6'

import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { STATS } from '@/components/layout/data/catalog'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import {
  AboutGrid,
  StepCard,
  StepIcon,
  StepNumber,
  StepText,
  StepTitle,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel
} from './AboutSection.styles'

const STEPS = [
  {
    icon: <FaTerminal />,
    title: 'Pick packages',
    text: 'Run npx masked-components and choose what to install. Each package is independent — the CLI resolves internal dependencies for you.'
  },
  {
    icon: <FaFolderOpen />,
    title: 'Source lands in your repo',
    text: 'Readable TypeScript is copied into your components folder, with imports rewritten to your path alias. Nothing hides inside node_modules.'
  },
  {
    icon: <FaPenToSquare />,
    title: 'Make it yours',
    text: 'Edit styles, tokens and behavior freely. Re-running the CLI never overwrites your changes unless you pass --force.'
  }
]

const STATS_ITEMS = [
  { value: STATS.packages, label: 'installable packages' },
  { value: STATS.components, label: 'component families' },
  { value: STATS.buttonVariants + STATS.inputVariants + STATS.cardVariants, label: 'total variants' },
  { value: STATS.animations, label: 'animations' },
  { value: STATS.themes, label: 'themes' }
]

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="How it works"
      description="Masked Components is not a dependency — it is source code you install once and own forever."
    >
      <AboutGrid>
        {STEPS.map((step, i) => (
          <MaskedAnimation key={step.title} variant="revealGlideUp" trigger="scroll" once delay={i * 0.08}>
            <StepCard>
              <StepNumber aria-hidden>{String(i + 1).padStart(2, '0')}</StepNumber>
              <StepIcon aria-hidden>{step.icon}</StepIcon>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.text}</StepText>
            </StepCard>
          </MaskedAnimation>
        ))}
      </AboutGrid>

      <StatsGrid>
        {STATS_ITEMS.map((stat, i) => (
          <MaskedAnimation key={stat.label} variant="revealPopElastic" trigger="scroll" once delay={i * 0.05}>
            <StatCard>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          </MaskedAnimation>
        ))}
      </StatsGrid>
    </SectionShell>
  )
}
