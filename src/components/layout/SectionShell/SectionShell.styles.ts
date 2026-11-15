import styled from 'styled-components'
import { media } from '@/styles/MaskedThemes/MaskedThemes'

export const Shell = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.grid.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  scroll-margin-top: 80px; /* altura do header fixo + respiro */

  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.sm};
  }
`

export const ShellHeader = styled.header`
  max-width: 640px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

export const ShellTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export const ShellDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`

export const ShellBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  ${media.mobile} {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`
