import { styled } from 'styled-components'
import { media } from '@/styles/MaskedThemes/MaskedThemes'

export const HeroSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing['3xl'] ?? '96px'} 0 ${({ theme }) => theme.spacing['2xl'] ?? '64px'};
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 820px;
  margin: 0 auto;
`

export const HeroHeadline = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textColor};

  span {
    /* acento -> texto: as duas pontas sempre contrastam com o fundo da página */
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accentColor ?? theme.colors.primaryColor},
      ${({ theme }) => theme.colors.textColor}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const HeroSub = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
  max-width: 640px;
`

export const InstallCommand = styled.button<{ $copied?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, $copied }) => ($copied ? (theme.colors.successColor ?? theme.colors.accentColor) : (theme.colors.borderColor ?? 'transparent'))};
  background: ${({ theme }) => theme.colors.surfaceColor ?? theme.colors.baseBlack.light08};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.15s ease;

  code {
    font-family: monospace;
  }

  svg {
    color: ${({ theme, $copied }) =>
      $copied ? (theme.colors.successColor ?? theme.colors.accentColor) : (theme.colors.textMuted ?? theme.colors.textColor)};
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  /* micro-animação do check: pop ao aparecer */
  svg[data-check] {
    animation: mcCopyPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes mcCopyPop {
    from {
      transform: scale(0.4);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.primaryColor};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`

export const FlagRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: 640px;
`

export const FlagChip = styled.li`
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.full ?? '999px'};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  background: ${({ theme }) => theme.colors.surfaceColor ?? theme.colors.baseBlack.light08};
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSize.xs};
  white-space: nowrap;
`

export const HeroNote = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
  max-width: 560px;
  margin: 0;

  code {
    font-family: monospace;
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.textColor};
  }
`

/* mantidos para compatibilidade — usados por outras seções/versões */
export const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`

export const StatsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};

  ${media.mobile} {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.primaryColor};
`

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
`
