import styled from 'styled-components'

export const Block = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? theme.colors.baseBlack.light20};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.baseBlack.light08};
`

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor ?? theme.colors.baseBlack.light20};
`

export const BlockTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`

export const CopyButton = styled.button<{ $copied?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? theme.colors.baseBlack.light20};
  background: transparent;
  color: ${({ theme, $copied }) => ($copied ? (theme.colors.baseGreen?.base ?? '#22c55e') : theme.colors.textColor)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  }
`

export const Pre = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textColor};
`
