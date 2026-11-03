'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { GradientTextH2 } from '@/styles/globalStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { RiDownload2Line } from 'react-icons/ri'
import { HeaderContainer, HeaderContent, HeaderHero, InfoDiv, LogoDiv, NavDiv } from './HeaderStyles'

export default function Header() {
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setOnTop(scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <HeaderContainer $active={onTop}>
      <HeaderContent>

        <MaskedAnimation trigger='controlled' variant='revealFadeInUp' isOn={onTop}>
          <HeaderHero className="container" $active={onTop}>
            <LogoDiv>
              <GradientTextH2>{onTop ? 'Masked Components' : 'MC'}</GradientTextH2>
            </LogoDiv>

            <InfoDiv>
              {onTop && (
                <p>
                  A complete library of polymorphic components for React. Intelligent inputs, interactive buttons, and adaptive cards with modern design and a simplified API.
                </p>
              )}
            </InfoDiv>

            <NavDiv>
              {onTop ? (
                <>
                  <MaskedButton
                    variant="default"
                    href="#install"
                    size='md'
                    label='Install'
                    leftIcon={<RiDownload2Line />}
                    className="shineButton"
                  >
                    Install
                  </MaskedButton>

                  <MaskedButton
                    variant="default"
                    label="See on GitHub"
                    size='md'
                    leftIcon={<FaGithub />}
                    href="https://github.com/RNT13/masked-components-cli"
                  >
                    Go to GitHub
                  </MaskedButton>
                </>
              ) : (
                <>
                  <MaskedButton
                    variant="link"
                    href="#install"
                    size='md'
                    label='Install'
                    leftIcon={<RiDownload2Line />}
                    className="shineButton"
                  >
                    Install
                  </MaskedButton>

                  <MaskedButton
                    variant="link"
                    label="See on GitHub"
                    size='md'
                    leftIcon={<FaGithub />}
                    href="https://github.com/RNT13/masked-components-cli"
                  >
                    Go to GitHub
                  </MaskedButton>
                </>
              )}
            </NavDiv>
          </HeaderHero>
        </MaskedAnimation>

      </HeaderContent>
    </HeaderContainer >
  )
}
