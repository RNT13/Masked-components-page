import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import styled, { css } from 'styled-components'
import { BaseCard } from '../../Base/BaseCard'
import { CardIconBadge } from '../../Base/BaseCard.styles'

export const FeatureCardContainer = styled(BaseCard)<{ $highlight?: boolean }>`
  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      border-color: var(--mc-card-accent, ${theme.colors.accentColor ?? maskedTheme.colors.baseBlue.base});
      background-image: var(
        --mc-card-accent-soft,
        linear-gradient(
          160deg,
          ${theme.colors.surfaceColor ?? theme.colors.primaryColor},
          ${theme.colors.secondaryColor ?? theme.colors.primaryColor}
        )
      );
      box-shadow: var(--mc-card-shadow-hover, ${theme.boxShadow.md()});
    `}

  ${media.mobile} {
    padding: ${maskedTheme.spacing.md};
    gap: ${maskedTheme.spacing.sm};
  }
`

export const FeatureIcon = styled(CardIconBadge)`
  ${media.mobile} {
    width: 36px;
    height: 36px;

    svg {
      font-size: 18px;
    }
  }
`

export const FeatureTitle = styled.h3`
  font-size: ${maskedTheme.fontSize.md};
  font-weight: 700;
  color: var(--mc-card-fg, ${({ theme }) => theme.colors.textColor});
  margin: 0;

  ${media.mobile} {
    font-size: ${maskedTheme.fontSize.sm};
  }
`

export const FeatureDescription = styled.p`
  font-size: ${maskedTheme.fontSize.sm};
  color: var(--mc-card-muted-fg, ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor});
  margin: 0;
  flex: 1;

  ${media.mobile} {
    font-size: ${maskedTheme.fontSize.xs};
    line-height: 1.5;
  }
`

export const FeatureAction = styled.div`
  margin-top: auto;
`
