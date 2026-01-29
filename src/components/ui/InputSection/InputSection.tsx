import { GlobalDiv, MinorTextH4, TitleH2 } from '@/styles/globalStyles'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineInput } from "react-icons/md"
import { MInput } from '../MaskedInput/MaskedInput'
import { InfoDiv, InputDiv, InputSectionContainer, InputSectionContent, RowContainer } from './InputSectionStyles'

export default function InputSection() {
  const [inputDefaultValue, setInputDefaultValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [inputTextareaValue, setInputTextareaValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')
  const [optionValue, setOptionValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [currencyValue, setCurrencyValue] = useState('')

  return (
    <InputSectionContainer>
      <InputSectionContent>
        <TitleH2>
          <MdOutlineInput /> <p>MaskedInput Variants</p>
        </TitleH2>
        <MinorTextH4>Inputs com máscaras inteligentes e formatação automática em tempo real. Digite nos campos abaixo para testar.</MinorTextH4>

        <RowContainer>
          <GlobalDiv>
            <InputDiv>
              <MInput
                variant="default"
                placeholder="Digite aqui"
                icon={<BsStars />}
                label="Input default"
                value={inputDefaultValue}
                onChange={v => setInputDefaultValue(v)}
              />
              Valor: {inputDefaultValue}
            </InputDiv>

            <InputDiv>
              <MInput
                variant="textarea"
                label="Input textarea"
                icon={<BsStars />}
                placeholder="Oque voce quer dizer?"
                value={inputTextareaValue}
                onChange={v => setInputTextareaValue(v)}
              />
              Valor: {inputTextareaValue}
            </InputDiv>

            <InputDiv>
              <MInput
                variant="masked"
                label="Telefone com mascara"
                icon={<BsStars />}
                mask="(00) 0000-0000"
                placeholder="Telefone"
                value={phoneValue}
                onChange={v => setPhoneValue(v)}
              />
              Valor: {phoneValue}
            </InputDiv>

            <InputDiv>
              <MInput
                variant="password"
                label="Input password"
                icon={<BsStars />}
                placeholder="Senha"
                value={inputPasswordValue}
                onChange={v => setInputPasswordValue(v)}
              />
              Valor: {inputPasswordValue}
            </InputDiv>
          </GlobalDiv>

          <GlobalDiv>
            <InputDiv>
              <MInput
                variant="select"
                label="Input select"
                icon={<BsStars />}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
                ]}
                value={optionValue}
                onChange={v => setOptionValue(v)}
              />
              Valor: {optionValue}
            </InputDiv>

            <InputDiv>
              <MInput label="Input file" icon={<BsStars />} variant="file" fileMode="cloudinary" multiple />
            </InputDiv>

            <InputDiv>
              <MInput
                variant="search"
                label="Input search"
                icon={<BsStars />}
                placeholder="Pesquisar"
                value={searchValue}
                onChange={v => setSearchValue(v)}
              />
              Valor: {searchValue}
            </InputDiv>

            <InputDiv>
              <MInput
                variant="currency"
                label="Input currency"
                icon={<BsStars />}
                placeholder="0,00"
                currencyConfig={{ symbol: 'U$', decimalScale: 2 }}
                value={currencyValue}
                onChange={v => setCurrencyValue(v)}
              />
              Valor: {currencyValue}
            </InputDiv>

            <InputDiv>
              <InfoDiv>
                <FaCheckCircle />
                <p>Todas as máscaras são aplicadas automaticamente enquanto você digita. Apenas números são aceitos e formatados em tempo real.</p>
              </InfoDiv>
            </InputDiv>
          </GlobalDiv>
        </RowContainer>
      </InputSectionContent>
    </InputSectionContainer>
  )
}
