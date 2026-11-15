'use client'

import { useCallback, useRef, useState } from 'react'
import { FiCheck, FiCopy, FiTerminal } from 'react-icons/fi'
import { toast } from '@/components/ui/MaskedToaster/toast'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import {
  FlagChip,
  FlagRow,
  HeroContent,
  HeroHeadline,
  HeroNote,
  HeroSectionContainer,
  HeroSub,
  InstallCommand
} from './HeroSection.styles'

const COMMAND = 'npx masked-components'

/* flags reais de src/cli.ts — se o CLI mudar, mude aqui */
const FLAGS = ['--all', '--dry-run', '--force', '--yes', '--pm npm | pnpm | yarn | bun', '--alias auto | keep | relative']

async function copyCommand(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(COMMAND)
    return true
  } catch {
    /* clipboard API falha fora de HTTPS/localhost — fallback legado */
    try {
      const ta = document.createElement('textarea')
      ta.value = COMMAND
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      ta.remove()
      return ok
    } catch {
      return false
    }
  }
}

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = useCallback(async () => {
    const ok = await copyCommand()
    if (ok) {
      setCopied(true)
      toast.success('Copied to clipboard')
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } else {
      toast.error('Could not copy — select and copy manually')
    }
  }, [])

  return (
    <HeroSectionContainer>
      <HeroContent>
        <MaskedAnimation variant="revealGlideUp" trigger="mount">
          <HeroHeadline>
            Polymorphic components, <span>copied into your project</span>
          </HeroHeadline>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.1} position="center">
          <HeroSub>
            Buttons, inputs, cards, overlays, toasts, animations and a theme engine. One command
            copies the source into your app: you own the code, and React is the only runtime
            requirement besides styled-components.
          </HeroSub>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.2} position="center">
          <InstallCommand
            type="button"
            onClick={handleCopy}
            $copied={copied}
            aria-label={`Copy install command: ${COMMAND}`}
          >
            <FiTerminal aria-hidden />
            <code>{COMMAND}</code>
            {copied ? <FiCheck aria-hidden data-check /> : <FiCopy aria-hidden />}
          </InstallCommand>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.3} position="center">
          <FlagRow aria-label="CLI flags">
            {FLAGS.map((flag) => (
              <FlagChip key={flag}>{flag}</FlagChip>
            ))}
          </FlagRow>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideUp" trigger="mount" delay={0.4} position="center">
          <HeroNote>
            Detects Next.js, Vite and CRA, your package manager and TypeScript. Resolves internal
            dependencies, rewrites <code>@/</code> imports when needed, and never overwrites your
            edits without <code>--force</code>. Destinations are configurable in{' '}
            <code>masked.config.json</code>.
          </HeroNote>
        </MaskedAnimation>
      </HeroContent>
    </HeroSectionContainer>
  )
}
