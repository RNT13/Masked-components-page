import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  background: ${({ theme }) => theme.colors.surfaceColor ?? theme.colors.baseBlack.light08};
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: auto;
  text-align: center;

  /* filete em gradiente do tema no topo do footer */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.semantic?.accentGradient ?? theme.colors.accentGradient ?? theme.colors.accentColor};
    opacity: 0.9;
  }

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
  gap: ${({ theme }) => theme.spacing.xs};

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    /* nome da lib acompanha o tema ativo */
    background: ${({ theme }) => theme.colors.semantic?.accentGradient ?? theme.colors.accentGradient ?? theme.colors.accentColor};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`

export const FooterCommand = styled.code`
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.textColor};
  background: ${({ theme }) => theme.colors.primaryColor ?? 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius?.md ?? '8px'};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  a,
  button {
    transition: transform 0.15s ease;
  }

  a:hover,
  button:hover {
    transform: translateY(-2px);
  }

  ${media.tablet} {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  /* mobile: links empilham com alvo de toque confortável */
  ${media.mobile} {
    flex-direction: column;
    width: 100%;

    a,
    button {
      width: 100%;
      min-height: 44px;
      justify-content: center;
    }
  }
`
