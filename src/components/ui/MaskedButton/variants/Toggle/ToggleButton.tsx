'use client'

import { ButtonVariantMap } from '../../MaskedButton.types'
import { ToggleButtonContainer, ToggleWrapper } from './ToggleButton.styles'

type Props = { varient: "toggle" } & ButtonVariantMap['toggle']

export default function ToggleButton(props: Props) {
  return (
    <ToggleWrapper>
      {props.$toggleLabel}
      <ToggleButtonContainer $isActive={props.$isActive} {...props} />
    </ToggleWrapper>
  )
}
