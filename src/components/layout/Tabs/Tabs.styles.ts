import { readableTextOn } from '@/utils/masked-utils'
import styled, { type DefaultTheme } from 'styled-components'

const accent = (theme: DefaultTheme) => theme.colors.accentColor ?? theme.colors.baseBlue.base

export const TabList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  scrollbar-width: thin;
`

export const Tab = styled.button`
  flex: 0 0 auto;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover:not([aria-selected='true']) {
    color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
  }

  &[aria-selected='true'] {
    background: ${({ theme }) => accent(theme)};
    color: ${({ theme }) => readableTextOn(accent(theme))};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => accent(theme)};
    outline-offset: 2px;
  }
`

export const TabPanel = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => accent(theme)};
    outline-offset: 4px;
  }
`
