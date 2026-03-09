import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { transitions } from '@/styles/MaskedAnimations/animations/transitions'
import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ $active: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ $active }) => ($active ? 'transparent' : maskedTheme.colors.baseBlack.base)};
  border-bottom: ${({ $active }) => ($active ? 'none' : `3px solid ${maskedTheme.colors.baseBlue.base}`)};
  ${transitions.slow}
`

export const HeaderContent = styled.div``

export const HeaderHero = styled.div<{ $active: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $active }) => ($active ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  gap: ${maskedTheme.spacing.lg};
  padding: ${maskedTheme.spacing.md};
`

export const LogoDiv = styled.div`
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
  gap: ${maskedTheme.spacing.sm};

  p {
    overflow: hidden;
    color: ${maskedTheme.colors.baseBlue.light30};
  }
`

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${maskedTheme.spacing.lg};

  ${media.tablet} {
    gap: ${maskedTheme.spacing.sm};
  }

  .shineButton {
    ${continuousAnimations.InfinityGlowDiagonal}
  }
`
