import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  background: ${({ theme }) => theme.colors.surfaceColor ?? theme.colors.baseBlack.light08};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor ?? theme.colors.baseBlack.light20};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.baseGray.base};
    font-size: ${({ theme }) => theme.fontSize.sm};
    opacity: 0.9;
  }

  .tagline {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`

export const ButtonDiv = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);

  button {
    ${continuousAnimations.continuousGlowDiagonal}
  }
`

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  h3 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  ${media.tablet} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`
