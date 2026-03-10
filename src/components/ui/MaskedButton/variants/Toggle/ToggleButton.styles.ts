import { transitions } from '@/styles/MaskedAnimations/animations/transitions'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { css, styled } from 'styled-components'
import { BaseButtonContainer } from '../../Base/BaseButton.styles'

type props = {
  $isActive?: boolean
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

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`

export const ToggleButtonContainer = styled(BaseButtonContainer)<props>`
  background-color: ${({ $isActive }) => ($isActive ? maskedTheme.colors.baseBlue.light30 : maskedTheme.colors.baseBlack.light20)};
  border: 2px solid ${({ $isActive }) => ($isActive ? maskedTheme.colors.baseBlue.base : maskedTheme.colors.baseBlack.base)};
  width: 44px;
  height: 24px;
  border-radius: 999px;
  position: relative;
  padding: 0;

  ${transitions.slow}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 2px;
    transform: ${({ $isActive }) => ($isActive ? 'translate(20px, -50%)' : 'translate(0, -50%)')};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ $isActive }) => ($isActive ? maskedTheme.colors.baseBlue.light20 : maskedTheme.colors.baseBlack.base)};

    ${transitions.slow}
  }

  &:hover:not(:disabled) {
    transform: scale(1.05);
    background-color: ${({ $isActive }) => ($isActive ? maskedTheme.colors.baseBlue.light04 : maskedTheme.colors.baseBlack.light20)};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  ${({ $isActive }) => $isActive && activeStyles}
`
