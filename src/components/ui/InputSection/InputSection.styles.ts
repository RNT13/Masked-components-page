import styled from 'styled-components'

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

export const FieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;
`

export const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.baseBlack.light08};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
`

export const InfoDiv = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surfaceColor ?? theme.colors.baseBlack.light08};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.baseGray.base};
`
