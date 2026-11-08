'use client'

import { useState } from 'react'
import { FaKeyboard } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedInput } from '../MaskedInput/MaskedInput'
import {
  CodeBlock,
  DemoGrid,
  FieldColumn,
  SectionLabel
} from './InputSection.styles'

const SELECT_OPTIONS = [
  { value: 'br', label: 'Brasil' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'pt', label: 'Portugal' }
]

export default function InputSection() {
  const [search, setSearch] = useState('')

  return (
    <BaseSection id="inputs">
      <MaskedAnimation variant="revealFadeInDown" trigger="scroll">
        <SectionLabel>Componentes</SectionLabel>
        <TitleH3>
          <FaKeyboard /> MaskedInput
        </TitleH3>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
        <BaseDiv>
          <DemoGrid>
            <FieldColumn>
              <MaskedInput
                variant="default"
                label="Nome"
                placeholder="Digite seu nome"
                helperText="Variant default com label e helperText"
              />

              <MaskedInput
                variant="password"
                label="Senha"
                placeholder="••••••••"
                helperText="Toggle de visibilidade embutido"
              />

              <MaskedInput
                variant="search"
                label="Busca"
                placeholder="Buscar componente..."
                value={search}
                onChange={setSearch}
              />
            </FieldColumn>

            <FieldColumn>
              <MaskedInput
                variant="select"
                label="País"
                options={SELECT_OPTIONS}
                placeholder="Selecione..."
              />

              <MaskedInput
                variant="masked"
                label="Data"
                mask="00/00/0000"
                placeholder="DD/MM/AAAA"
                helperText="Variant masked — máscara livre"
              />

              <MaskedInput
                variant="currency"
                label="Preço"
                currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }}
              />
            </FieldColumn>

            <FieldColumn>
              <MaskedInput
                variant="time"
                label="Horário"
                minuteStep={15}
                clearable
              />

              <MaskedInput
                variant="file"
                label="Avatar"
                selectFilesLabel="Selecionar imagem"
              />

              <MaskedInput
                variant="default"
                label="Com erro"
                error="Campo obrigatório"
                touched
                showError
              />
            </FieldColumn>
          </DemoGrid>
        </BaseDiv>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
        <CodeBlock>{`<MaskedInput variant="default" label="Nome" helperText="..." />
<MaskedInput variant="password" label="Senha" />
<MaskedInput variant="search" value={v} onChange={setV} />
<MaskedInput variant="select" options={options} />
<MaskedInput variant="masked" mask="00/00/0000" />
<MaskedInput variant="currency" currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }} />
<MaskedInput variant="time" minuteStep={15} clearable />
<MaskedInput variant="file" selectFilesLabel="Selecionar imagem" />`}</CodeBlock>
      </MaskedAnimation>
    </BaseSection>
  )
}
