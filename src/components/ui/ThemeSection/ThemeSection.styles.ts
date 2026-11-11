import styled, { css } from 'styled-components'
import { maskedThemeConfig } from '@/styles/MaskedThemes/MaskedThemes'

export const ThemeSectionContainer = styled.section`
  width: 100%;
`

export const ThemeSectionContent = styled.div`
  width: 100%;
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
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

/* metade acento, metade fundo da página: dá para distinguir temas parecidos */
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

export const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.baseBlack.light08};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.md};
`
