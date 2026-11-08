import styled from 'styled-components'

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
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &[aria-selected='true'] {
    background: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
    color: ${({ theme }) => theme.colors.basePureWhite.base};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
    outline-offset: 2px;
  }
`

export const TabPanel = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
    outline-offset: 4px;
  }
`
