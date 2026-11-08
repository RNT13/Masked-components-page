'use client'

import { useState } from 'react'
import { BsInputCursorText } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedInput } from '../MaskedInput/MaskedInput'
import { CodeBlock } from '../../layout/CodeBlock/CodeBlock'
import { DemoGrid, FieldColumn, SectionLabel, InfoDiv } from './InputSection.styles'

export function InputSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [plan, setPlan] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [price, setPrice] = useState('')

  return (
    <BaseSection id="inputs">
      <BaseDiv>
        <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
          <SectionLabel>MaskedInput</SectionLabel>
        </MaskedAnimation>

        <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
          <TitleH3>
            <BsInputCursorText /> One component, nine variants
          </TitleH3>
        </MaskedAnimation>

        <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
          <InfoDiv>
            Every variant shares the same props contract — <code>label</code>,{' '}
            <code>icon</code>, <code>error</code>, <code>colorTheme</code>,{' '}
            <code>tokens</code>. Switch behavior with a single{' '}
            <code>variant</code> prop.
          </InfoDiv>
        </MaskedAnimation>

        <DemoGrid>
          <FieldColumn>
            <MaskedInput
              variant="default"
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={setName}
            />
            <MaskedInput
              variant="default"
              label="Email"
              type="email"
              placeholder="you@mail.com"
              value={email}
              onChange={setEmail}
              colorTheme="baseBlue"
            />
            <MaskedInput
              variant="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
            />
            <MaskedInput
              variant="search"
              label="Search"
              placeholder="Search components..."
              value={search}
              onChange={setSearch}
            />
          </FieldColumn>

          <FieldColumn>
            <MaskedInput
              variant="select"
              label="Plan"
              placeholder="Choose a plan"
              value={plan}
              onChange={setPlan}
              options={[
                { value: 'free', label: 'Free' },
                { value: 'pro', label: 'Pro' },
                { value: 'team', label: 'Team' }
              ]}
            />
            <MaskedInput
              variant="masked"
              label="Birth date"
              mask="00/00/0000"
              placeholder="DD/MM/YYYY"
              value={date}
              onChange={setDate}
            />
            <MaskedInput
              variant="time"
              label="Meeting time"
              value={time}
              onChange={setTime}
            />
            <MaskedInput
              variant="currency"
              label="Price"
              value={price}
              onChange={setPrice}
              currencyConfig={{ locale: 'en-US', currency: 'USD' }}
            />
          </FieldColumn>
        </DemoGrid>

        <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
          <TitleH3>
            <FaCode /> Usage
          </TitleH3>
        </MaskedAnimation>

        <CodeBlock
          title="Controlled inputs"
          code={`const [value, setValue] = useState('')

<MaskedInput
  variant="select"
  label="Plan"
  value={value}
  onChange={setValue}
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' }
  ]}

<MaskedInput
  variant="time"
  label="Meeting time"
  value={time}
  onChange={setTime}
/>

<MaskedInput
  variant="masked"
  label="Birth date"
  mask="00/00/0000"
  value={date}
  onChange={setDate}
/>`}
        />

        <CodeBlock
          title="Formik integration"
          code={`import { FormikTextInput } from '@/components/ui/MaskedInput/formikVariants/FormikTextInput'

// Inside <Formik> — wires useField() automatically
<FormikTextInput name="email" label="Email" />`}
        />
      </BaseDiv>
    </BaseSection>
  )
}
