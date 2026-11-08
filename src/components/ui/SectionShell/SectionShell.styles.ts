import styled from 'styled-components'

export const Shell = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl'] ?? '64px'} ${({ theme }) => theme.spacing.lg};
`

export const ShellHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const ShellLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const ShellTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`

export const ShellDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 640px;
  line-height: 1.6;
  margin: 0;
`

export const ShellBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`
