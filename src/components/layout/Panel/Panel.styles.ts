import styled, { css } from 'styled-components'

export const PanelRoot = styled.section<{ $elevated?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.secondaryColor ?? 'transparent'};
  overflow: hidden;

  ${({ $elevated, theme }) =>
    $elevated &&
    css`
      background: ${theme.colors.surfaceColor ?? theme.colors.secondaryColor};
      box-shadow: ${theme.boxShadow.md()};
    `}
`

export const PanelHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
`

export const PanelTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
`

export const PanelBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`
