import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const DisclaimerSectionContainer = styled.div``

export const DisclaimerSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${maskedTheme.spacing.lg};

  .svgGreen {
    color: ${maskedTheme.colors.baseGreen.light20};
    font-size: 80px;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button,
  a {
    ${continuousAnimations.goldBorderPremium}
  }
`
