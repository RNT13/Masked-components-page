import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { styled } from 'styled-components'

export const DivCardContainer = styled.div`
  width: 100%;
`

export const DivCardContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
`

export const DivCardIcon = styled.div<{ $glow?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.accentColor};
  background: ${({ theme }) => theme.colors.secondaryColor ?? theme.colors.surfaceColor};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: ${({ theme }) => theme.boxShadow.sm()};

  ${continuousAnimations.continuousShine}
`
