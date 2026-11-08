'use client'

import { useState } from 'react'
import { BsStar } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedButtonGroup } from '../MaskedButton/MaskedButtonGroup'
import { SectionLabel } from '../AnimationSection/AnimationSection.styles'
import { DemoGrid } from '../InputSection/InputSection.styles'
import { InfoDiv, DemoCard, CodeBlock, ButtonRow } from './ButtonSection.styles'

const variantsCode = `import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'

<MaskedButton variant="default">Default</MaskedButton>
<MaskedButton variant="outline">Outline</MaskedButton>
<MaskedButton variant="ghost">Ghost</MaskedButton>
<MaskedButton variant="link">Link</MaskedButton>
<MaskedButton variant="gradient">Gradient</MaskedButton>
<MaskedButton variant="neon">Neon</MaskedButton>
<MaskedButton variant="soft">Soft</MaskedButton>`

const statesCode = `// loading: spinner + disabled automáticos
<MaskedButton variant="default" state="loading">
  Saving...
</MaskedButton>

// shape: 'rounded' | 'circle' | 'square'
<MaskedButton variant="default" shape="circle" icon={<BsStar />} />
<MaskedButton variant="outline" shape="square" icon={<BsStar />} />`

const fieldsCode = `// toggle / checkbox / switch / radio — variants de campo
<MaskedButton variant="toggle" $toggleLabel="Notifications" />
<MaskedButton variant="checkbox" $checkboxLabel="Accept terms" />
<MaskedButton
  variant="switch"
  switchLabel="Dark mode"
  checked={enabled}
  onCheckedChange={setEnabled}
/>
<MaskedButton variant="radio" name="plan" radioLabel="Pro" />`

const groupCode = `import { MaskedButtonGroup } from '@/components/ui/MaskedButton/MaskedButtonGroup'

<MaskedButtonGroup
  options={[
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' }
  ]}
  value={period}
  onChange={setPeriod}
  variant="toggle"
  role="radiogroup"
  ariaLabel="Select period"
/>`

const tokensCode = `// tokens: overrides granulares via CSS vars --mc-btn-*
<MaskedButton
  variant="default"
  tokens={{ bg: '#7C3AED', 'bg-hover': '#8B5CF6', fg: '#FFFFFF', radius: '999px' }}
>
  Custom tokens
</MaskedButton>

// colorTheme: paleta registrada via registerColorTheme()
<MaskedButton variant="default" colorTheme="baseBlue">
  Themed
</MaskedButton>`

export function ButtonSection() {
  const [lastClicked, setLastClicked] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [period, setPeriod] = useState('week')

  const click = (name: string) => () => setLastClicked(name)

  return (
    <BaseSection id="buttons">
      <BaseDiv>
        <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
          <SectionLabel>Component</SectionLabel>
          <TitleH3>
            <FaCode /> MaskedButton
          </TitleH3>
        </MaskedAnimation>

        <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.05}>
          <InfoDiv>
            One component, eleven variants — from plain buttons to form fields
            (toggle, checkbox, switch, radio) and segmented groups. Click any
            button to see the feedback below.
            {lastClicked && <strong> · Clicked: {lastClicked}</strong>}
          </InfoDiv>
        </MaskedAnimation>

        <DemoGrid>
          <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.1}>
            <DemoCard>
              <SectionLabel>Variants</SectionLabel>
              <ButtonRow>
                <MaskedButton variant="default" onClick={click('default')}>Default</MaskedButton>
                <MaskedButton variant="outline" onClick={click('outline')}>Outline</MaskedButton>
                <MaskedButton variant="ghost" onClick={click('ghost')}>Ghost</MaskedButton>
                <MaskedButton variant="link" onClick={click('link')}>Link</MaskedButton>
                <MaskedButton variant="gradient" onClick={click('gradient')}>Gradient</MaskedButton>
                <MaskedButton variant="neon" onClick={click('neon')}>Neon</MaskedButton>
                <MaskedButton variant="soft" onClick={click('soft')}>Soft</MaskedButton>
              </ButtonRow>
              <CodeBlock title="Variants">{variantsCode}</CodeBlock>
            </DemoCard>
          </MaskedAnimation>

          <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.15}>
            <DemoCard>
              <SectionLabel>States &amp; shapes</SectionLabel>
              <ButtonRow>
                <MaskedButton variant="default" state="loading">
                  Saving...
                </MaskedButton>
                <MaskedButton
                  variant="default"
                  shape="circle"
                  leftIcon={<BsStar />}
                  aria-label="Favorite"
                  onClick={click('circle icon')}
                />
                <MaskedButton
                  variant="outline"
                  shape="square"
                  leftIcon={<BsStar />}
                  aria-label="Favorite"
                  onClick={click('square icon')}
                />
              </ButtonRow>
              <CodeBlock title="States & shapes">{statesCode}</CodeBlock>
            </DemoCard>
          </MaskedAnimation>

          <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.2}>
            <DemoCard>
              <SectionLabel>Field variants</SectionLabel>
              <ButtonRow>
                <MaskedButton
                  variant="toggle"
                  $toggleLabel="Notifications"
                  onToggle={(active) => setLastClicked(`toggle: ${active}`)}
                />
                <MaskedButton
                  variant="checkbox"
                  $checkboxLabel="Accept terms"
                  onCheckedChange={(c) => setLastClicked(`checkbox: ${c}`)}
                />
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
                  name="plan"
                  radioLabel="Pro"
                  onCheckedChange={(c) => setLastClicked(`radio: ${c}`)}
                />
              </ButtonRow>
              <CodeBlock title="Field variants">{fieldsCode}</CodeBlock>
            </DemoCard>
          </MaskedAnimation>

          <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.25}>
            <DemoCard>
              <SectionLabel>MaskedButtonGroup — segmented control</SectionLabel>
              <ButtonRow>
                <MaskedButtonGroup
                  options={[
                    { value: 'day', label: 'Day' },
                    { value: 'week', label: 'Week' },
                    { value: 'month', label: 'Month' }
                  ]}
                  value={period}
                  onChange={(v) => {
                    setPeriod(v)
                    setLastClicked(`group: ${v}`)
                  }}
                  variant="toggle"
                  role="radiogroup"
                  ariaLabel="Select period"
                />
              </ButtonRow>
              <InfoDiv>Selected: {period}</InfoDiv>
              <CodeBlock title="Button group">{groupCode}</CodeBlock>
            </DemoCard>
          </MaskedAnimation>

          <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.3}>
            <DemoCard>
              <SectionLabel>colorTheme &amp; tokens</SectionLabel>
              <ButtonRow>
                <MaskedButton
                  variant="default"
                  tokens={{ bg: '#7C3AED', 'bg-hover': '#8B5CF6', fg: '#FFFFFF', radius: '999px' }}
                  onClick={click('custom tokens')}
                >
                  Custom tokens
                </MaskedButton>
                <MaskedButton
                  variant="default"
                  colorTheme="baseBlue"
                  onClick={click('colorTheme baseBlue')}
                >
                  Themed
                </MaskedButton>
                <MaskedButton
                  variant="outline"
                  colorTheme="baseLilac"
                  onClick={click('colorTheme baseLilac')}
                >
                  Lilac outline
                </MaskedButton>
              </ButtonRow>
              <CodeBlock title="colorTheme & tokens">{tokensCode}</CodeBlock>
            </DemoCard>
          </MaskedAnimation>
        </DemoGrid>
      </BaseDiv>
    </BaseSection>
  )
}
