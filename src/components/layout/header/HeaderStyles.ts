import { drawer, transitions } from '@/styles/animations'
import { media, theme } from '@/styles/theme'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  padding-top: 50px;

  transform: ${({ $scrolled }) => ($scrolled ? 'translateY(-262px)' : 'translateY(0)')};
  background-color: ${({ $scrolled }) => ($scrolled ? theme.colors.baseBlack.base : 'transparent')};
  border-bottom: ${({ $scrolled }) => ($scrolled ? `2px solid ${theme.colors.baseBlue.light}` : 'none')};

  ${transitions.fast}

  ${media.tablet} {
    padding-top: 40px;
    transform: ${({ $scrolled }) => ($scrolled ? 'translateY(-233px)' : 'translateY(0)')};
  }

  ${media.mobile} {
    padding-top: 40px;
    transform: ${({ $scrolled }) => ($scrolled ? 'translateY(-223px)' : 'translateY(0)')};
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

export const HeaderHero = styled.div<{ $scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  opacity: ${({ $scrolled }) => ($scrolled ? 0 : 1)};
  ${transitions.fast}
`

export const HeroNav = styled.div<{ $scrolled: boolean; $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  opacity: ${({ $scrolled }) => ($scrolled ? 1 : 0)};
  ${transitions.fast}
  ${drawer}

  ${media.tablet} {
    flex-direction: column;
    gap: 10px;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;

  h2 {
    ${transitions.slow}
    font-size: 55px;
  }

  ${media.tablet} {
    h2 {
      font-size: 40px;
    }
  }

  ${media.mobile} {
    h2 {
      font-size: 30px;
    }
  }
`

export const InfoDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    overflow: hidden;
    color: ${theme.colors.baseBlue.light30};
  }
`

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${media.tablet} {
    gap: 10px;
  }
`
