'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { GradientTextH2 } from '@/styles/globalStyles'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { RiDownload2Line } from 'react-icons/ri'
import { HeaderContainer, HeaderContent, HeaderHero, InfoDiv, LogoDiv, NavDiv } from './HeaderStyles'

export default function Header() {
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer $active={onTop}>
      <HeaderContent>
        <HeaderHero className="container" $active={onTop}>
          <LogoDiv>
            <GradientTextH2>{onTop ? 'Masked Components' : 'MC'}</GradientTextH2>
          </LogoDiv>

          <InfoDiv>
            {onTop && (
              <p>
                A complete library of polymorphic components for React. Intelligent inputs,
                interactive buttons, and adaptive cards with modern design and a simplified API.
              </p>
            )}
          </InfoDiv>

          <NavDiv>
            <MaskedButton
              variant={onTop ? 'default' : 'link'}
              href="#install"
              size="md"
              label="Install"
              leftIcon={<RiDownload2Line />}
              className="shineButton"
            >
              Install
            </MaskedButton>

            <MaskedButton
              variant={onTop ? 'default' : 'link'}
              label="See on GitHub"
              size="md"
              leftIcon={<FaGithub />}
              href="https://github.com/RNT13/masked-components-cli"
            >
              Go to GitHub
            </MaskedButton>
          </NavDiv>
        </HeaderHero>
      </HeaderContent>
    </HeaderContainer>
  )
}
