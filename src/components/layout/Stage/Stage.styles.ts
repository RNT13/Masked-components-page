import styled from 'styled-components'

export const StageRoot = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
`

export const StageToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};

  > span {
    margin-right: auto;
  }
`

export const StageSurface = styled.div<{ $mode: 'light' | 'dark' }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 160px;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ $mode }) => ($mode === 'dark' ? '#1A1D26' : '#FAFAFA')};
  transition: background 0.2s ease;
`
