import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { styled } from 'styled-components'

export const DisclaimerSectionContainer = styled.div``

export const DisclaimerSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  .svgGreen {
    color: ${({ theme }) => theme.colors.successColor};
    font-size: 80px;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button,
  a {
    ${continuousAnimations.continuousGoldBorderPremium}
  }
`

export const SvgDiv = styled.div`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  ${continuousAnimations.continuousShine}
`
