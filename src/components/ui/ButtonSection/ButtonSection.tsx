'use client'

import { useState } from 'react'
import { BsStar } from 'react-icons/bs'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote, PreviewRow } from '@/components/layout/DemoCard/DemoCard.styles'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { readableTextOn } from '@/utils/masked-utils'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedButtonGroup } from '../MaskedButton/MaskedButtonGroup'
import { CustomColor, Swatch, SwatchRow } from './ButtonSection.styles'

/* ---------- dados ---------- */

const COLORS = [
  { id: 'default', label: 'Default', swatch: maskedTheme.colors.baseBlue.base },
  { id: 'baseGreen', label: 'Green', swatch: maskedTheme.colors.baseGreen.base },
  { id: 'baseRed', label: 'Red', swatch: maskedTheme.colors.baseRed.base },
  { id: 'baseOrange', label: 'Orange', swatch: maskedTheme.colors.baseOrange.base },
  { id: 'baseGold', label: 'Gold', swatch: maskedTheme.colors.baseGold.base },
  { id: 'baseTeal', label: 'Teal', swatch: maskedTheme.colors.baseTeal.base },
  { id: 'baseRose', label: 'Rose', swatch: maskedTheme.colors.baseRose.base },
  { id: 'baseLilac', label: 'Lilac', swatch: maskedTheme.colors.baseLilac.base }
] as const

const PR_OPTIONS = [
  {
    value: 'create',
    label: 'Create pull request',
    description: 'Open a pull request that is ready for review'
  },
  {
    value: 'draft',
    label: 'Create draft pull request',
    description: 'Cannot be merged until marked ready for review'
  }
]

const PERIODS = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
]

const PLANS = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team' }
]

/** Cor livre -> tokens (fundo, borda, texto legível, neon, gradiente e switches). */
function customTokens(color: string): Record<string, string> {
  const fg = readableTextOn(color)
  const light = `color-mix(in srgb, ${color} 72%, white)`
  return {
    bg: color,
    'bg-hover': color,
    border: color,
    'border-hover': color,
    fg,
    'fg-hover': fg,
    'neon-color': color,
    'ring-focus': color,
    gradient: `linear-gradient(180deg, ${light}, ${color})`,
    'gradient-hover': `linear-gradient(180deg, ${color}, ${light})`,
    'switch-track-on': color,
    'switch-border-on': color
  }
}

/* ---------- código mostrado ---------- */

const variantsCode = `import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'

<MaskedButton variant="default">Default</MaskedButton>
<MaskedButton variant="outline">Outline</MaskedButton>
<MaskedButton variant="ghost">Ghost</MaskedButton>
<MaskedButton variant="link">Link</MaskedButton>
<MaskedButton variant="gradient">Gradient</MaskedButton>
<MaskedButton variant="neon">Neon</MaskedButton>
<MaskedButton variant="soft">Soft</MaskedButton>`

const colorsCode = `// colorTheme: qualquer chave da paleta (ou preset registrado)
<MaskedButton variant="default" colorTheme="baseGreen">Green</MaskedButton>
<MaskedButton variant="gradient" colorTheme="baseRose">Rose</MaskedButton>
<MaskedButton variant="switch" colorTheme="baseTeal" switchLabel="Teal" />

// tokens: overrides granulares (--mc-btn-*)
<MaskedButton
  variant="default"
  tokens={{ bg: '#7C3AED', fg: '#FFFFFF', radius: 999 }}
>
  Custom
</MaskedButton>`

const statesCode = `// loading: spinner + disabled automáticos
<MaskedButton variant="default" state="loading">Saving...</MaskedButton>

// shape: 'rounded' | 'circle' | 'square'
<MaskedButton variant="default" shape="circle" leftIcon={<BsStar />} ariaLabel="Favorite" />
<MaskedButton variant="outline" shape="square" leftIcon={<BsStar />} ariaLabel="Favorite" />`

const fieldsCode = `<MaskedButton variant="toggle" toggleLabel="Notifications" />
<MaskedButton variant="checkbox" checkboxLabel="Accept terms" />

// switch: interruptor vertical
<MaskedButton
  variant="switch"
  switchLabel="Dark mode"
  checked={enabled}
  onCheckedChange={setEnabled}
/>

// radio avulso: deselectable permite desmarcar
<MaskedButton
  variant="radio"
  radioLabel="Pro"
  deselectable
  checked={pro}
  onCheckedChange={setPro}
/>`

const splitCode = `const [pr, setPr] = useState('create')

<MaskedButton
  variant="split"
  colorTheme="baseGreen"
  options={[
    { value: 'create', label: 'Create pull request',
      description: 'Open a pull request that is ready for review' },
    { value: 'draft', label: 'Create draft pull request',
      description: 'Cannot be merged until marked ready for review' }
  ]}
  selectedValue={pr}
  onOptionSelect={setPr}
  onClick={submit}
>
  {pr === 'create' ? 'Create pull request' : 'Create draft pull request'}
</MaskedButton>`

const groupCode = `import { MaskedButtonGroup } from '@/components/ui/MaskedButton/MaskedButtonGroup'

// segmented (padrão): trilho com indicador deslizante e setas do teclado
<MaskedButtonGroup
  options={[
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' }
  ]}
  value={period}
  onChange={setPeriod}
  ariaLabel="Select period"
/>

// grupo de campos: variant="radio" | "checkbox" | "toggle" | "switch"
<MaskedButtonGroup variant="radio" orientation="vertical" options={plans} value={plan} onChange={setPlan} />`

/* ---------- componente ---------- */

export function ButtonSection() {
  const [lastClicked, setLastClicked] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [pro, setPro] = useState(true)
  const [period, setPeriod] = useState('week')
  const [plan, setPlan] = useState('pro')
  const [pr, setPr] = useState('create')
  const [colorKey, setColorKey] = useState<string>('baseGreen')
  const [custom, setCustom] = useState<string | null>(null)

  const click = (name: string) => () => setLastClicked(name)

  const themeProps: { colorTheme?: string; tokens?: Record<string, string> } = custom
    ? { tokens: customTokens(custom) }
    : colorKey === 'default'
      ? {}
      : { colorTheme: colorKey }

  const currentPr = PR_OPTIONS.find((o) => o.value === pr) ?? PR_OPTIONS[0]

  return (
    <DemoStack>
      <InfoNote>
        One component, twelve variants: plain buttons, form fields (toggle, checkbox, switch,
        radio), a split button and segmented groups. Click anything to see the feedback.
        {lastClicked && <strong> · Last: {lastClicked}</strong>}
      </InfoNote>

      <DemoCard title="Variants" code={variantsCode}>
        <PreviewRow>
          <MaskedButton variant="default" onClick={click('default')}>Default</MaskedButton>
          <MaskedButton variant="outline" onClick={click('outline')}>Outline</MaskedButton>
          <MaskedButton variant="ghost" onClick={click('ghost')}>Ghost</MaskedButton>
          <MaskedButton variant="link" onClick={click('link')}>Link</MaskedButton>
          <MaskedButton variant="gradient" onClick={click('gradient')}>Gradient</MaskedButton>
          <MaskedButton variant="neon" onClick={click('neon')}>Neon</MaskedButton>
          <MaskedButton variant="soft" onClick={click('soft')}>Soft</MaskedButton>
        </PreviewRow>
      </DemoCard>

      <DemoCard
        title="Colors"
        description="Pick a palette (colorTheme) or any custom color (tokens). It applies to the filled variants and to the field variants."
        code={colorsCode}
      >
        <SwatchRow role="group" aria-label="Button color">
          {COLORS.map((c) => (
            <Swatch
              key={c.id}
              type="button"
              $color={c.swatch}
              $active={!custom && colorKey === c.id}
              aria-pressed={!custom && colorKey === c.id}
              aria-label={c.label}
              title={c.label}
              onClick={() => {
                setColorKey(c.id)
                setCustom(null)
              }}
            />
          ))}
          <CustomColor>
            <input
              type="color"
              value={custom ?? '#7c3aed'}
              onChange={(e) => setCustom(e.target.value)}
              aria-label="Custom color"
            />
            Custom
          </CustomColor>
        </SwatchRow>

        <PreviewRow>
          <MaskedButton variant="default" {...themeProps} onClick={click('color: default')}>
            Default
          </MaskedButton>
          <MaskedButton variant="gradient" {...themeProps} onClick={click('color: gradient')}>
            Gradient
          </MaskedButton>
          <MaskedButton variant="neon" {...themeProps} onClick={click('color: neon')}>
            Neon
          </MaskedButton>
        </PreviewRow>
        <PreviewRow>
          <MaskedButton variant="toggle" toggleLabel="Toggle" defaultChecked {...themeProps} />
          <MaskedButton variant="switch" switchLabel="Switch" defaultChecked {...themeProps} />
          <MaskedButton variant="checkbox" checkboxLabel="Checkbox" defaultChecked {...themeProps} />
          <MaskedButton variant="radio" radioLabel="Radio" defaultChecked deselectable {...themeProps} />
        </PreviewRow>
      </DemoCard>

      <DemoCard title="Split button" code={splitCode}>
        <PreviewRow>
          <MaskedButton
            variant="split"
            colorTheme="baseGreen"
            options={PR_OPTIONS}
            selectedValue={pr}
            onOptionSelect={setPr}
            menuLabel="More pull request options"
            onClick={click(`split: ${pr}`)}
          >
            {currentPr.label}
          </MaskedButton>
        </PreviewRow>
      </DemoCard>

      <DemoCard title="States & shapes" code={statesCode}>
        <PreviewRow>
          <MaskedButton variant="default" state="loading">Saving...</MaskedButton>
          <MaskedButton
            variant="default"
            shape="circle"
            leftIcon={<BsStar />}
            ariaLabel="Favorite"
            onClick={click('circle icon')}
          />
          <MaskedButton
            variant="outline"
            shape="square"
            leftIcon={<BsStar />}
            ariaLabel="Favorite"
            onClick={click('square icon')}
          />
        </PreviewRow>
      </DemoCard>

      <DemoCard title="Field variants" code={fieldsCode}>
        <PreviewRow>
          <MaskedButton
            variant="toggle"
            toggleLabel="Notifications"
            onToggle={(a) => setLastClicked(`toggle: ${a}`)}
          />
          <MaskedButton
            variant="checkbox"
            checkboxLabel="Accept terms"
            onCheckedChange={(c) => setLastClicked(`checkbox: ${c}`)}
          />
        </PreviewRow>
        <PreviewRow>
          <MaskedButton
            variant="switch"
            switchLabel="Dark mode"
            checked={enabled}
            onCheckedChange={(c) => {
              setEnabled(c)
              setLastClicked(`switch: ${c}`)
            }}
          />
          <MaskedButton
            variant="radio"
            radioLabel="Pro"
            deselectable
            checked={pro}
            onCheckedChange={(c) => {
              setPro(c)
              setLastClicked(`radio: ${c}`)
            }}
          />
        </PreviewRow>
      </DemoCard>

      <DemoCard title="MaskedButtonGroup" code={groupCode}>
        <PreviewRow>
          <MaskedButtonGroup
            options={PERIODS}
            value={period}
            onChange={(v) => {
              setPeriod(v)
              setLastClicked(`group: ${v}`)
            }}
            ariaLabel="Select period"
          />
        </PreviewRow>
        <PreviewRow>
          <MaskedButtonGroup
            variant="radio"
            orientation="vertical"
            options={PLANS}
            value={plan}
            onChange={setPlan}
            ariaLabel="Select plan"
          />
        </PreviewRow>
      </DemoCard>
    </DemoStack>
  )
}

export default ButtonSection
