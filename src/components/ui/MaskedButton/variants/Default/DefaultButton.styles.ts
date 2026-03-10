import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import styled, { css } from 'styled-components'
import { BaseButton } from '../../Base/BaseButton'

type props = {
  $isActive?: boolean
  $isError?: boolean
}

const activeStyles = css`
  color: ${maskedTheme.colors.baseBlue.light20};
  background-color: ${maskedTheme.colors.baseBlue.dark20};
  border: 2px solid ${maskedTheme.colors.baseBlue.light20};

  box-shadow: 0px 0px 10px 1px ${maskedTheme.colors.baseBlue.base};

  svg {
    color: inherit;
  }

  &:hover {
    color: ${maskedTheme.colors.baseBlue.dark20};
    background-color: ${maskedTheme.colors.baseBlue.light};
    border-color: ${maskedTheme.colors.baseBlue.dark20};
  }
`

const errorStyles = css`
  background-color: ${maskedTheme.colors.baseRed.light08};
  color: ${maskedTheme.colors.baseRed.light30};
  border-color: ${maskedTheme.colors.baseRed.light08};

  &:hover {
    background-color: ${maskedTheme.colors.baseRed.dark};
    color: ${maskedTheme.colors.baseRed.dark30};
    border-color: ${maskedTheme.colors.baseRed.dark30};
  }
`

export const DefaultButtonContainer = styled(BaseButton)<props>`
  color: ${maskedTheme.colors.baseBlue.dark20};
  background-color: ${maskedTheme.colors.baseBlue.light20};
  border: 2px solid ${maskedTheme.colors.baseBlue.dark20};

  &:hover {
    background-color: ${maskedTheme.colors.baseBlue.light20};
    color: ${maskedTheme.colors.baseBlue.base};
    border-color: ${maskedTheme.colors.baseBlue.base};
  }

  ${({ $isActive }) => $isActive && activeStyles}

  ${({ $isError }) => $isError && errorStyles}
`
