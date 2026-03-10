'use client'

import { MButton } from '@/components/ui/MaskedButton/MaskedButton'
import { GradientTextH2 } from '@/styles/globalStyles'
import { MAnimation } from '@/styles/MaskedAnimations/MAnimation'
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

        <MAnimation trigger='controlled' variant='fadeInUp' isOn={onTop}>
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
                  <MButton
                    variant="default"
                    href="#install"
                    size='md'
                    tooltip='Install'
                    leftIcon={<RiDownload2Line />}
                    className="shineButton"
                  >
                    Install
                  </MButton>

                  <MButton
                    variant="default"
                    tooltip="See on GitHub"
                    size='md'
                    leftIcon={<FaGithub />}
                    href="https://github.com/RNT13/masked-components-cli"
                  >
                    Go to GitHub
                  </MButton>
                </>
              ) : (
                <>
                  <MButton
                    variant="link"
                    href="#install"
                    size='md'
                    tooltip='Install'
                    leftIcon={<RiDownload2Line />}
                    className="shineButton"
                  >
                    Install
                  </MButton>

                  <MButton
                    variant="link"
                    tooltip="See on GitHub"
                    size='md'
                    leftIcon={<FaGithub />}
                    href="https://github.com/RNT13/masked-components-cli"
                  >
                    Go to GitHub
                  </MButton>
                </>
              )}
            </NavDiv>
          </HeaderHero>
        </MAnimation>

      </HeaderContent>
    </HeaderContainer >
  )
}
