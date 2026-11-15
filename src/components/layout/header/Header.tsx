'use client'

import { STATS } from '@/components/layout/data/catalog'
import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { GradientTextH2 } from '@/styles/globalStyles'
import { ThemeSwitcher } from '@/styles/ThemeEngine/ThemeSwitcher'
import { ComponentProps, ComponentType, useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { RiDownload2Line } from 'react-icons/ri'
import { HeaderContainer, HeaderContent, HeaderHero, InfoDiv, LogoDiv, NavDiv } from './HeaderStyles'

const CompactNavDiv = NavDiv as unknown as ComponentType<ComponentProps<typeof NavDiv> & { $compact: boolean }>
const ActiveLogoDiv = LogoDiv as unknown as ComponentType<ComponentProps<typeof LogoDiv> & { $active: boolean }>

export default function Header() {
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => setOnTop(window.scrollY === 0)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderContainer $active={onTop}>
      <HeaderContent>
        <HeaderHero className="container" $active={onTop}>
          <ActiveLogoDiv $active={onTop}>
            <GradientTextH2>{onTop ? 'Masked Components' : 'MC'}</GradientTextH2>
          </ActiveLogoDiv>

          <InfoDiv>
            {onTop && (
              <p>
                {STATS.packages} installable packages: {STATS.buttonVariants} button variants,{' '}
                {STATS.inputVariants} inputs, {STATS.cardVariants} cards, {STATS.animations}{' '}
                animations and {STATS.themes} themes. Copy-in components for React and TypeScript.
              </p>
            )}
          </InfoDiv>

          <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={0.15} width="auto">
            <CompactNavDiv $compact={!onTop}>
              <MaskedButton
                variant={onTop ? 'default' : 'ghost'}
                href="#install"
                size="md"
                label="Install"
                leftIcon={<RiDownload2Line />}
                className="shineButton"
              >
                Install
              </MaskedButton>

              <MaskedButton
                variant={onTop ? 'default' : 'ghost'}
                label="See on GitHub"
                size="md"
                leftIcon={<FaGithub />}
                href="https://github.com/RNT13/masked-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to GitHub
              </MaskedButton>

              <ThemeSwitcher />
            </CompactNavDiv>
          </MaskedAnimation>
        </HeaderHero>
      </HeaderContent>
    </HeaderContainer>
  )
}
