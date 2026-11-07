'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { TitleH3 } from '@/styles/globalStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedInput } from '@/components/ui/MaskedInput/MaskedInput'
import { FormikTextInput } from '@/components/ui/MaskedInput/formikVariants/FormikTextInput'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { SectionLabel, DemoGrid, FieldColumn, CodeBlock } from './InputSection.styles'

const selectOptions = [
  { value: 'react', label: 'React' },
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' }
]

export default function InputSection() {
  const [search, setSearch] = useState('')

  return (
    <BaseSection id="inputs">
      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
        <BaseDiv>
          <SectionLabel>MaskedInput</SectionLabel>
          <TitleH3>Um componente, todas as variantes de input</TitleH3>
          <p>
            O <code>MaskedInput</code> resolve text, password, search, select, date, time,
            currency e file pela prop <code>variant</code>. Validação, label, helperText e
            tokens <code>--mc-input-*</code> vêm de fábrica.
          </p>
        </BaseDiv>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={100}>
        <DemoGrid>
          <FieldColumn>
            <MaskedInput
              variant="textarea"
              label="Nome"
              placeholder="Seu nome"
              helperText="Como aparece no perfil"
            />
            <MaskedInput
              variant="password"
              label="Senha"
              placeholder="••••••••"
              helperText="Mínimo de 8 caracteres"
            />
            <MaskedInput
              variant="search"
              label="Buscar"
              placeholder="Buscar componente..."
              value={search}
              onChange={setSearch}
            />
            <MaskedInput
              variant="select"
              label="Framework"
              options={selectOptions}
              placeholder="Selecione"
            />
          </FieldColumn>

          <FieldColumn>
            <MaskedInput variant="time" label="Horário" minuteStep={15} clearable />
            <MaskedInput
              variant="currency"
              label="Preço"
              currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }}
            />
            <MaskedInput
              variant="textarea"
              label="Com erro"
              placeholder="Campo obrigatório"
              error="Este campo é obrigatório"
              touched
              showError
            />
          </FieldColumn>
        </DemoGrid>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={150}>
        <CodeBlock>
          {`<MaskedInput variant="textarea" label="Nome" helperText="Como aparece no perfil" />
<MaskedInput variant="password" label="Senha" />
<MaskedInput variant="search" value={q} onChange={setQ} />
<MaskedInput variant="select" options={options} />
<MaskedInput variant="date" label="Data" />
<MaskedInput variant="time" minuteStep={15} clearable />
<MaskedInput variant="currency" currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }} />
<MaskedInput variant="file" multiple previewMode="grid" />`}
        </CodeBlock>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={200}>
        <BaseDiv>
          <SectionLabel>Formik</SectionLabel>
          <p>
            Para formulários, cada variante tem um wrapper <code>Formik*Input</code> que
            conecta <code>useField</code> automaticamente — basta passar <code>name</code>:
          </p>
          <CodeBlock>
            {`import { FormikTextInput } from '@/components/ui/MaskedInput/formikVariants/FormikTextInput'

<FormikTextInput name="email" label="E-mail" placeholder="voce@email.com" />`}
          </CodeBlock>
        </BaseDiv>
      </MaskedAnimation>
    </BaseSection>
  )
}
