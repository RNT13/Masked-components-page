import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { css, styled } from 'styled-components'
import { BaseButton } from '../../Base/BaseButton'

type props = {
  $isActive?: boolean
  $isError?: boolean
}

export const activeStyles = css`
  color: ${maskedTheme.colors.baseBlue.light40};
  background-image: linear-gradient(180deg, ${maskedTheme.colors.baseBlue.light30}, ${maskedTheme.colors.baseBlue.dark30});
  border: 2px solid ${maskedTheme.colors.baseBlue.light30};

  svg {
    color: inherit;
  }

  &:hover {
    background-image: linear-gradient(180deg, ${maskedTheme.colors.baseBlue.dark30}, ${maskedTheme.colors.baseBlue.light30});
    color: ${maskedTheme.colors.baseBlue.dark40};
    border-color: ${maskedTheme.colors.baseBlue.base};
  }
`

export const errorStyles = css`
  background-image: linear-gradient(180deg, ${maskedTheme.colors.baseRed.light08}, ${maskedTheme.colors.baseRed.dark});
  color: ${maskedTheme.colors.baseRed.light30};
  border-color: ${maskedTheme.colors.baseRed.light08};

  &:hover {
    background-image: linear-gradient(180deg, ${maskedTheme.colors.baseRed.dark}, ${maskedTheme.colors.baseRed.light08});
    color: ${maskedTheme.colors.baseRed.light40};
    border-color: ${maskedTheme.colors.baseRed.light40};
  }
`

export const GradientButtonContainer = styled(BaseButton)<props>`
  color: ${maskedTheme.colors.baseBlue.light30};
  background-image: linear-gradient(180deg, ${maskedTheme.colors.baseBlue.light}, ${maskedTheme.colors.baseBlue.dark});
  border: 2px solid ${maskedTheme.colors.baseBlue.light02};

  &:hover {
    background-image: linear-gradient(180deg, ${maskedTheme.colors.baseBlue.dark}, ${maskedTheme.colors.baseBlue.light});
    color: ${maskedTheme.colors.baseBlue.dark30};
    border-color: ${maskedTheme.colors.baseBlue.base};
  }

  ${({ $isActive }) => $isActive && activeStyles}

  ${({ $isError }) => $isError && errorStyles}
`
