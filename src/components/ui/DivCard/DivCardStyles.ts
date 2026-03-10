import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const DivCardContainer = styled.div`
  width: 100%;
`

export const DivCardContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${maskedTheme.spacing.xl};
`

export const DivCardIcon = styled.div<{ $glow?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${maskedTheme.fontSize['2xl']};
  padding: ${maskedTheme.spacing.xs};
  border-radius: ${maskedTheme.radius.lg};
  background-image: linear-gradient(180deg, ${maskedTheme.colors.baseBlue.base}, ${maskedTheme.colors.baseBlue.dark});
  border: 2px solid ${maskedTheme.colors.baseBlue.light02};
  box-shadow: 5px 5px 15px 0px ${maskedTheme.colors.baseBlack.base};

  ${continuousAnimations.shineInfinite}
`
