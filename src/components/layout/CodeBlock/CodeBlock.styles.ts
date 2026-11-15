import styled, { css, keyframes } from 'styled-components'

const pop = keyframes`
  0% { transform: scale(0.6); }
  60% { transform: scale(1.25); }
  100% { transform: scale(1); }
`

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

/* ícone "pop" ao trocar para o check; cor segue o acento do tema */
export const CopyIcon = styled.span<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ $copied, theme }) => ($copied ? (theme.colors.successColor ?? theme.colors.accentColor) : 'inherit')};

  svg {
    animation: ${({ $copied }) =>
      $copied
        ? css`
            ${pop} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)
          `
        : 'none'};
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      animation: none;
    }
  }
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
