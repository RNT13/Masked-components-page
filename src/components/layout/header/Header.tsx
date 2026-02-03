'use client'

import { MButton } from '@/components/ui/MaskedButton/MaskedButton'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'
import { GradientTextH2 } from '@/styles/globalStyles'
import { FaGithub } from 'react-icons/fa'
import { RiDownload2Line } from "react-icons/ri"
import { HeaderContainer, HeaderContent, HeaderHero, HeroNav, InfoDiv, LogoDiv, NavDiv } from './HeaderStyles'

const Header = () => {
  const scrolled = useHeaderScroll(125)

  return (
    <HeaderContainer $scrolled={scrolled}>
      <HeaderContent>

        <HeaderHero $scrolled={scrolled} className='container'>
          <LogoDiv >
            <GradientTextH2>Masked Components</GradientTextH2>
          </LogoDiv>
          <InfoDiv >
            <p>
              A complete library of polymorphic components for React. Intelligent inputs, interactive buttons, and adaptive cards with modern design and a simplified API.
            </p>
          </InfoDiv>
          <NavDiv >
            <MButton variant='default' href='#install' leftIcon={<RiDownload2Line />} className='shineButton'>
              Install
            </MButton>
            <MButton variant='default' leftIcon={<FaGithub />} href='https://github.com/RNT13/masked-components-cli'>
              See on GitHub
            </MButton>
          </NavDiv>
        </HeaderHero>

        <HeroNav $scrolled={scrolled} $isOpen={scrolled} className='container'>
          <LogoDiv >
            <GradientTextH2>MC</GradientTextH2>
          </LogoDiv>
          <NavDiv >
            <MButton variant='link' href='#install' className='shineButton' leftIcon={<RiDownload2Line />}>
              Install
            </MButton>

            <MButton variant="ghost" size='sm' label="See on GitHub" href='https://github.com/RNT13/masked-components-cli' leftIcon={<FaGithub />} >Go to GitHub</MButton>
          </NavDiv>
        </HeroNav>

      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
