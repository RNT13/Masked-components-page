import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { css, styled } from 'styled-components'
import { BaseButton } from '../../Base/BaseButton'

type props = {
  $isActive?: boolean
  $isError?: boolean
}

const activeStyles = css`
  color: ${maskedTheme.colors.baseBlue.light20};
  background-color: ${maskedTheme.colors.baseBlue.dark02};
  border: 2px solid ${maskedTheme.colors.baseBlue.light20};

  box-shadow: 0px 0px 10px 1px ${maskedTheme.colors.baseBlue.base};

  svg {
    color: inherit;
  }

  &:hover {
    color: ${maskedTheme.colors.baseBlue.dark20};
    background-color: ${maskedTheme.colors.baseBlue.light08};
    border-color: ${maskedTheme.colors.baseBlue.dark08};
  }
`

const errorStyles = css`
  background-color: transparent;
  color: ${maskedTheme.colors.baseRed.light30};
  border-color: ${maskedTheme.colors.baseRed.light08};

  &:hover {
    background-color: ${maskedTheme.colors.baseRed.light04};
    color: ${maskedTheme.colors.baseRed.light40};
    border-color: ${maskedTheme.colors.baseRed.light40};
  }
`

export const OutlineButtonContainer = styled(BaseButton)<props>`
  color: ${maskedTheme.colors.baseBlue.base};
  background-color: transparent;
  border: 2px solid ${maskedTheme.colors.baseBlue.base};

  &:hover {
    background-color: ${maskedTheme.colors.baseBlue.base};
    color: ${maskedTheme.colors.baseBlue.dark20};
    border-color: ${maskedTheme.colors.baseBlue.dark20};
  }

  ${({ $isActive }) => $isActive && activeStyles}

  ${({ $isError }) => $isError && errorStyles}
`
