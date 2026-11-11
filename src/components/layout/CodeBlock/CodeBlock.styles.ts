import styled from 'styled-components'

export const Block = styled.div`
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  overflow: hidden;
`

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
`

export const BlockTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
`

export const Pre = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow: auto;
  max-height: 460px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.65;
  tab-size: 2;
  white-space: pre;
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
`
