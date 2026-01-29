'use client'

import Link from 'next/link'
import React, { forwardRef } from 'react'
import { ButtonContent, IconWrapper, StyledButton } from './MaskedButtonStyles'
import {
  ButtonShape,
  ButtonSize,
  ButtonState,
  ButtonVariant
} from './MaskedButtonTypes'

export interface CommonButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  state?: ButtonState
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
  shapes?: ButtonShape
}

export type ButtonProps = CommonButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      href,
      target,
      rel,
      type = 'button',
      shapes = 'rounded',
      disabled,
      ...props
    },
    ref
  ) => {
    const computedState: ButtonState =
      disabled ? 'disabled' : state

    const isDisabled =
      computedState === 'disabled' || computedState === 'loading'

    const innerContent = (
      <ButtonContent $state={computedState}>
        {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
        {children}
        {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
      </ButtonContent>
    )

    if (href) {
      return (
        <Link href={href} target={target} rel={rel}>
          <StyledButton
            ref={ref as React.Ref<HTMLButtonElement>}
            as="span"
            $variant={variant}
            $size={size}
            $state={computedState}
            $fullWidth={fullWidth}
            $shapes={shapes}
            aria-disabled={isDisabled}
            data-variant={variant}
            {...props}
          >
            {innerContent}
          </StyledButton>
        </Link>
      )
    }

    return (
      <StyledButton
        ref={ref as React.Ref<HTMLButtonElement>}
        $variant={variant}
        $size={size}
        $state={computedState}
        $fullWidth={fullWidth}
        $shapes={shapes}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        type={type}
        data-variant={variant}
        {...props}
      >
        {innerContent}
      </StyledButton>
    )
  }
)

Button.displayName = 'MaskedButton'
export default Button
