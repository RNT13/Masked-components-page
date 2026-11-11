import type { ButtonVariant } from '@/components/ui/MaskedButton/MaskedButton.types'
import type { InputProps } from '@/components/ui/MaskedInput/MaskedInput.types'
import type { CardProps } from '@/components/ui/MaskedCards/MaskedCards.types'

export const BUTTON_VARIANTS = [
  'default',
  'outline',
  'ghost',
  'link',
  'gradient',
  'neon',
  'soft',
  'toggle',
  'checkbox',
  'switch',
  'radio'
] as const satisfies readonly ButtonVariant[]

export const INPUT_VARIANTS = [
  'default',
  'masked',
  'password',
  'search',
  'select',
  'textarea',
  'time',
  'currency',
  'file'
] as const satisfies readonly InputProps['variant'][]

export const CARD_VARIANTS = ['metric', 'stat', 'compare', 'product', 'feature', 'plan'] as const satisfies readonly CardProps['$variant'][]
