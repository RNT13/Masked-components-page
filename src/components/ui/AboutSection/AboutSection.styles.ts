import { styled } from 'styled-components'
import { media } from '@/styles/MaskedThemes/MaskedThemes'

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`

export const StepCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.surfaceColor};
  overflow: hidden;
`

export const StepNumber = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.accentColor};
  opacity: 0.18;
  user-select: none;
`

export const StepIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.accentColor};
  background: ${({ theme }) => theme.colors.secondaryColor ?? theme.colors.primaryColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`

export const StepTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textColor};
`

export const StepText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.surfaceColor};
  text-align: center;
`

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-weight: 700;
  line-height: 1;
  background: ${({ theme }) =>
    theme.colors.primaryGradient ??
    `linear-gradient(135deg, ${theme.colors.accentColor}, ${theme.colors.secondaryColor ?? theme.colors.accentColor})`};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`
