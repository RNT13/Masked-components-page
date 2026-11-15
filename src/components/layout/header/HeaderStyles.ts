import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { transitions } from '@/styles/MaskedAnimations/animations/transitions'
import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ $active: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${maskedTheme.zIndex.sticky};
  background-color: ${({ $active, theme }) => ($active ? 'transparent' : (theme.colors.surfaceColor ?? theme.colors.primaryColor))};
  border-bottom: ${({ $active, theme }) => ($active ? 'none' : `3px solid ${theme.colors.accentColor ?? theme.colors.borderColor}`)};
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
  ${transitions.slow}

  ${media.mobile} {
    gap: ${maskedTheme.spacing.md};
    padding: ${maskedTheme.spacing.sm};
  }
`

export const LogoDiv = styled.div`
  h2 {
    ${transitions.slow}
    font-size: 55px;
    background: ${({ theme }) => theme.colors.semantic?.accentGradient ?? theme.colors.accentColor};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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
  max-width: 720px;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
    line-height: 1.6;
  }

  ${media.mobile} {
    p {
      font-size: ${maskedTheme.fontSize.sm};
    }
  }
`

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${maskedTheme.spacing.md};

  ${media.tablet} {
    gap: ${maskedTheme.spacing.sm};
  }

  /* 360px: botões ocupam a linha inteira, alvos >= 44px */
  ${media.mobile} {
    a,
    button {
      flex: 1 1 140px;
      justify-content: center;
      min-height: 44px;
    }
  }

  .shineButton {
    ${continuousAnimations.continuousGlowDiagonal}
  }
`
