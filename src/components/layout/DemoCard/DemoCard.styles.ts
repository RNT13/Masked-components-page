import styled from 'styled-components'
import { media } from '@/styles/MaskedThemes/MaskedThemes'

export const DemoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  min-width: 0;
`

export const InfoNote = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};

  strong {
    color: ${({ theme }) => theme.colors.accentColor ?? 'inherit'};
  }

  code {
    padding: 1px 6px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.secondaryColor ?? 'transparent'};
  }
`

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.secondaryColor ?? 'transparent'};
  min-width: 0;
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? 'inherit'};
`

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
`

/* demo à esquerda, código à direita; empilha em telas menores (ou com $stacked) */
export const Split = styled.div<{ $stacked?: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;
  grid-template-columns: ${({ $stacked }) => ($stacked ? 'minmax(0, 1fr)' : 'minmax(0, 5fr) minmax(0, 7fr)')};

  ${media.desktop} {
    grid-template-columns: minmax(0, 1fr);
  }
`

/* sem overflow:hidden — menus (split) e brilhos das animações precisam transbordar */
export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primaryColor ?? 'transparent'};
`

export const PreviewRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`
