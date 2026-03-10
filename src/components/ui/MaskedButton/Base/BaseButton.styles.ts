import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { transitions } from '@/styles/MaskedAnimations/animations/transitions'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import styled, { css } from 'styled-components'
import { ButtonShape, ButtonSize, ButtonState, TooltipPlacement } from '../MaskedButton.types'

type TooltipProps = {
  $placement?: TooltipPlacement
}

/* =========================
   SIZE DO BOTÃO
========================= */

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 6px 10px;
    font-size: 14px;
  `,
  md: css`
    padding: 12px 14px;
    font-size: 16px;
  `,
  lg: css`
    padding: 16px 20px;
    font-size: 18px;
  `
}

/* =========================
   TAMANHO DO ÍCONE
========================= */

const iconSizes: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    width: 16px;
    height: 16px;
  `,
  md: css`
    width: 20px;
    height: 20px;
  `,
  lg: css`
    width: 24px;
    height: 24px;
  `
}

/* =========================
   CIRCLE DINÂMICO
========================= */

const circleSizes: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    width: 40px;
    height: 40px;
  `,
  md: css`
    width: 55px;
    height: 55px;
  `,
  lg: css`
    width: 70px;
    height: 70px;
  `
}

const getShapeStyles = ($shape?: ButtonShape, $size: ButtonSize = 'md') => {
  if ($shape === 'circle') {
    return css`
      ${circleSizes[$size]}
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .btn-text {
        display: none;
      }
    `
  }

  if ($shape === 'square') {
    return css`
      border-radius: 6px;
    `
  }

  return css`
    border-radius: 18px;
  `
}

/* =========================
   ESTADOS
========================= */

const stateStyles: Record<ButtonState, ReturnType<typeof css>> = {
  loading: css`
    cursor: not-allowed;

    svg {
      ${continuousAnimations.spin}
      stroke-width: 2;
    }
  `,
  default: css``,
  disabled: css`
    cursor: not-allowed;
    opacity: 0.5;
  `,
  error: css`
    &:hover {
      ${continuousAnimations.shakeX}
    }
  `
}

/* =========================
   TOOLTIP
========================= */
export const TooltipWrapper = styled.span<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${({ $fullWidth }) => ($fullWidth ? 'flex' : 'inline-flex')};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`

export const TooltipDiv = styled.div<TooltipProps>`
  position: absolute;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;

  background-color: ${maskedTheme.colors.baseBlue.light};
  color: white;

  opacity: 0;
  pointer-events: none;

  transition: all 0.25s ease;
  ${transitions.delay}

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  ${({ $placement }) => {
    switch ($placement) {
      case 'bottom':
        return css`
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);

          ${TooltipWrapper}:hover & {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }

          ${TooltipWrapper}:not(:hover) & {
            transition-delay: 0s;
          }

          &::after {
            top: -5px;
            left: 50%;
            transform: translateX(-50%);

            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${maskedTheme.colors.baseBlue.light} transparent;
          }
        `

      case 'left':
        return css`
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);

          ${TooltipWrapper}:hover & {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }

          ${TooltipWrapper}:not(:hover) & {
            transition-delay: 0s;
          }

          &::after {
            right: -5px;
            top: 50%;
            transform: translateY(-50%);

            border-width: 5px 0 5px 5px;
            border-color: transparent transparent transparent ${maskedTheme.colors.baseBlue.light};
          }
        `

      case 'right':
        return css`
          left: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) translateX(-6px);

          ${TooltipWrapper}:hover & {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }

          ${TooltipWrapper}:not(:hover) & {
            transition-delay: 0s;
          }

          &::after {
            left: -5px;
            top: 50%;
            transform: translateY(-50%);

            border-width: 5px 5px 5px 0;
            border-color: transparent ${maskedTheme.colors.baseBlue.light} transparent transparent;
          }
        `

      default:
        return css`
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);

          ${TooltipWrapper}:hover & {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }

          ${TooltipWrapper}:not(:hover) & {
            transition-delay: 0s;
          }

          &::after {
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);

            border-width: 5px 5px 0 5px;
            border-color: ${maskedTheme.colors.baseBlue.light} transparent transparent transparent;
          }
        `
    }
  }}
`

/* =========================
   CONTENT
========================= */

export const ButtonContent = styled.span<{ $state: ButtonState }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`

/* =========================
   ICON WRAPPER
========================= */

export const IconWrapper = styled.span<{ $size?: ButtonSize }>`
  display: flex;
  align-items: center;

  svg {
    ${({ $size = 'md' }) => iconSizes[$size]}
  }
`

/* =========================
   BOTÃO BASE
========================= */

export const BaseButtonContainer = styled.button<{
  $size?: ButtonSize
  $state?: ButtonState
  $fullWidth?: boolean
  $shape?: ButtonShape
}>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  ${({ $size = 'md' }) => sizeStyles[$size]}
  ${({ $fullWidth }) => $fullWidth && 'width: 100%; justify-content: center;'}
  ${({ $state = 'default' }) => stateStyles[$state]}
  ${({ $shape, $size }) => getShapeStyles($shape, $size)}

    ${transitions.slow}

  &:active {
    transform: scale(0.97);
  }
`
