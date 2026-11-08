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
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

export const ThemeCard = styled.button<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
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

  ${({ $active, theme }) =>
    $active &&
    css`
      border-color: ${theme.colors.accentColor ?? theme.colors.baseBlue.base};
    `}
`

export const ThemeSwatch = styled.span<{ $themeName: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  background: ${({ $themeName }) => {
    const t = maskedThemeConfig[$themeName as keyof typeof maskedThemeConfig]
    const a = t?.colors.accentColor ?? t?.colors.baseBlue?.base ?? '#888'
    const b = t?.colors.surfaceColor ?? t?.colors.baseBlack?.base ?? '#111'
    return `linear-gradient(135deg, ${a} 50%, ${b} 50%)`
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
