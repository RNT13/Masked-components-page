import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { css, styled } from 'styled-components'
import { BaseButton } from '../../Base/BaseButton'

type props = {
  $isActive?: boolean
  $isError?: boolean
}

const activeStyles = css`
  color: ${maskedTheme.colors.baseBlue.light20};
  background-color: transparent;
  border: 2px solid ${maskedTheme.colors.baseBlue.light20};

  box-shadow: 0px 0px 10px 1px ${maskedTheme.colors.baseBlue.light50};

  svg {
    color: inherit;
  }

  &:hover {
    color: ${maskedTheme.colors.baseBlue.dark20};
    background-color: ${maskedTheme.colors.baseBlue.light};
    border-color: transparent;
  }
`

const errorStyles = css`
  color: ${maskedTheme.colors.baseRed.light40};
  background-color: transparent;
  border: 2px solid transparent;

  &:hover {
    background-color: ${maskedTheme.colors.baseRed.light04};
    color: ${maskedTheme.colors.baseRed.light40};
    border-color: transparent;
  }
`

export const GhostButtonContainer = styled(BaseButton)<props>`
  color: ${maskedTheme.colors.baseBlue.base};
  background-color: transparent;
  border: 2px solid transparent;

  &:hover {
    background-color: ${maskedTheme.colors.baseBlue.base};
    color: ${maskedTheme.colors.baseBlue.dark20};
    border-color: transparent;
  }

  ${({ $isActive }) => $isActive && activeStyles}
  ${({ $isError }) => $isError && errorStyles}
`
