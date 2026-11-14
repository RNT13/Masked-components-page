import styled, { css } from 'styled-components'
import { maskedThemeConfig, media } from '@/styles/MaskedThemes/MaskedThemes'

export const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  ${media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

export const ThemeCard = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  background: ${({ theme }) => theme.colors.surfaceColor ?? 'transparent'};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
  font-family: inherit;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
    outline-offset: 2px;
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accentColor ?? theme.colors.baseBlue.base};
    `}
`

/* half accent, half page background: distinguishes similar themes */
export const ThemeSwatch = styled.span<{ $themeName: string }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0.45);
  background: ${({ $themeName }) => {
    const t = maskedThemeConfig[$themeName as keyof typeof maskedThemeConfig]
    const accent = t?.colors.accentColor ?? t?.colors.baseBlue?.base ?? '#888'
    const page = t?.colors.primaryColor ?? t?.colors.baseBlack?.base ?? '#111'
    return `linear-gradient(135deg, ${accent} 50%, ${page} 50%)`
  }};
`
