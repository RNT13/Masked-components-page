import { maskedTheme, media, neonTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

type Props = {
  $direction?: 'row' | 'column'
}

export const BaseDivContainer = styled.div`
  width: 100%;
`

export const BaseDivContent = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.$direction};
  gap: ${maskedTheme.spacing.lg};
  background-image: linear-gradient(360deg, ${maskedTheme.colors.baseBlue.light02}, ${maskedTheme.colors.baseBlack.light08});
  border-radius: ${maskedTheme.radius.md};
  padding: ${maskedTheme.spacing.md};
  border: 2px solid ${maskedTheme.colors.baseBlue.light02};
  box-shadow: 3px 3px 8px 0px ${neonTheme.colors.neonBlue.base};

  ${media.mobile} {
    padding: ${maskedTheme.spacing.sm};
  }

  &:hover {
    box-shadow: 5px 5px 15px 0px ${neonTheme.colors.neonBlue.base};
    border-color: ${neonTheme.colors.neonBlue.base};
  }
`
