import { MAnimation } from '@/styles/MaskedAnimations/MAnimation'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCheckCircle, FaCode } from 'react-icons/fa'
import { MdOutlineInput } from "react-icons/md"
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MInput } from '../MaskedInput/MaskedInput'
import { InfoDiv, InputColumn, InputContainer, InputDiv, InputSectionContainer, InputSectionContent } from './InputSectionStyles'

export default function InputSection() {
  const [inputDefaultValue, setInputDefaultValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [inputTextareaValue, setInputTextareaValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')
  const [optionValue, setOptionValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [currencyValue, setCurrencyValue] = useState('')

  const [errorInputDefaultValue, setErrorInputDefaultValue] = useState('')
  const [errorPhoneValue, setErrorPhoneValue] = useState('')
  const [errorInputTextareaValue, setErrorInputTextareaValue] = useState('')
  const [errorInputPasswordValue, setErrorInputPasswordValue] = useState('')
  const [errorOptionValue, setErrorOptionValue] = useState('')
  const [errorSearchValue, setErrorSearchValue] = useState('')
  const [errorCurrencyValue, setErrorCurrencyValue] = useState('')

  return (
    <InputSectionContainer>
      <InputSectionContent>

        <BaseSection
          header
          icon={<FaCode />}
          title="Basic Usage of MaskedInput"
          fileType="tsx"
          description="Simple example of using MaskedInput."
          content1={`
        import { MInput } from
        '../MaskedInput/MaskedInput'

        function MyForm() {
          const [value, setValue] = useState('')

          return (
            <MInput
              radius={4}
              variant="masked"
              label="Phone number"
              icon={<BsStars />}
              mask="(00) 0000-0000"
              placeholder="Telefone"
              value={phoneValue}
              onChange={v => setPhoneValue(v)}
            />
          )
        }
                    `}
        />

        <BaseSection
          title='MaskedInput Variants'
          icon={<MdOutlineInput />}
          description="Inputs with intelligent masks and automatic formatting in real-time. Type into the fields below to test."
        >


          <MAnimation trigger='scroll' variant='fadeInLeft'>

            <BaseDiv direction="column">

              <InputContainer>

                <InputColumn>
                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        variant="default"
                        placeholder="Type here"
                        icon={<BsStars />}
                        label="Input default"
                        value={inputDefaultValue}
                        onChange={v => setInputDefaultValue(v)}
                      />
                      Value: {inputDefaultValue}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        variant="textarea"
                        label="Input textarea"
                        icon={<BsStars />}
                        placeholder="Type here"
                        value={inputTextareaValue}
                        onChange={v => setInputTextareaValue(v)}
                      />
                      Value: {inputTextareaValue.length > 30 ? inputTextareaValue.slice(0, 30) + '...' : inputTextareaValue}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        variant="masked"
                        label="Input masked"
                        icon={<BsStars />}
                        mask="(00) 0000-0000"
                        placeholder="(00) 0000-0000"
                        value={phoneValue}
                        onChange={v => setPhoneValue(v)}
                      />
                      Value: {phoneValue}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        variant="password"
                        label="Input password"
                        icon={<BsStars />}
                        placeholder="Type here"
                        value={inputPasswordValue}
                        onChange={v => setInputPasswordValue(v)}
                      />
                      Value: {inputPasswordValue}
                    </InputDiv>
                  </MAnimation>

                </InputColumn>

                <InputColumn>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
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
                      Value: {optionValue}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput label="Input file" icon={<BsStars />} variant="file" fileMode="cloudinary" multiple />
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput
                        variant="search"
                        label="Input search"
                        icon={<BsStars />}
                        placeholder="Search"
                        value={searchValue}
                        onChange={v => setSearchValue(v)}
                      />
                      Value: {searchValue}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput
                        variant="currency"
                        label="Input currency"
                        icon={<BsStars />}
                        placeholder="0,00"
                        value={currencyValue}
                        onChange={v => setCurrencyValue(v)}
                      />
                      Value: {currencyValue}
                    </InputDiv>
                  </MAnimation>

                </InputColumn>


              </InputContainer>

              <MAnimation trigger='scroll' variant='slideImpactUp'>
                <InfoDiv>
                  <FaCheckCircle />
                  <p>All masks are applied automatically as you type. Numbers are accepted and formatted in real-time.</p>
                </InfoDiv>
              </MAnimation>

            </BaseDiv>

          </MAnimation>

        </BaseSection>

        <BaseSection
          title='MaskedInput with errors'
          icon={<MdOutlineInput />}
          description="Inputs with intelligent masks and automatic formatting in real-time. Type into the fields below to test."
        >

          <MAnimation trigger='scroll' variant='fadeInLeft'>

            <BaseDiv direction="column">

              <InputContainer>


                <InputColumn>
                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="default"
                        placeholder="Type here"
                        icon={<BsStars />}
                        label="Input default"
                        value={errorInputDefaultValue}
                        onChange={v => setErrorInputDefaultValue(v)}
                      />
                      Value: {errorInputDefaultValue.length ? errorInputDefaultValue : 'No value'}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="textarea"
                        label="Input textarea"
                        icon={<BsStars />}
                        placeholder="Type here"
                        value={errorInputTextareaValue}
                        onChange={v => setErrorInputTextareaValue(v)}
                      />
                      Value: {errorInputTextareaValue.length > 30 ? errorInputTextareaValue.slice(0, 30) + '...' : 'No value'}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="masked"
                        label="Input masked"
                        icon={<BsStars />}
                        mask="(00) 0000-0000"
                        placeholder="(00) 0000-0000"
                        value={errorPhoneValue}
                        onChange={v => setErrorPhoneValue(v)}
                      />
                      Value: {errorPhoneValue ? errorPhoneValue : 'No value'}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceRight'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="password"
                        label="Input password"
                        icon={<BsStars />}
                        placeholder="Type here"
                        value={errorInputPasswordValue}
                        onChange={v => setErrorInputPasswordValue(v)}
                      />
                      Value: {errorInputPasswordValue ? errorInputPasswordValue : 'No value'}
                    </InputDiv>
                  </MAnimation>
                </InputColumn>

                <InputColumn>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="select"
                        label="Input select"
                        icon={<BsStars />}
                        options={[
                          { value: 'option1', label: 'Option 1' },
                          { value: 'option2', label: 'Option 2' },
                          { value: 'option3', label: 'Option 3' }
                        ]}
                        value={errorOptionValue}
                        onChange={v => setErrorOptionValue(v)}
                      />
                      Value: {errorOptionValue ? errorOptionValue : 'No value'}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="search"
                        label="Input search"
                        icon={<BsStars />}
                        placeholder="Search"
                        value={errorSearchValue}
                        onChange={v => setErrorSearchValue(v)}
                      />
                      Value: {errorSearchValue ? errorSearchValue : 'No value'}
                    </InputDiv>
                  </MAnimation>

                  <MAnimation trigger='scroll' variant='slideBounceLeft'>
                    <InputDiv>
                      <MInput
                        touched={true}
                        error="Some error message"
                        showError
                        variant="currency"
                        label="Input currency"
                        icon={<BsStars />}
                        placeholder="0,00"
                        value={errorCurrencyValue}
                        onChange={v => setErrorCurrencyValue(v)}
                      />
                      Value: {errorCurrencyValue ? errorCurrencyValue : 'No value'}
                    </InputDiv>
                  </MAnimation>

                </InputColumn>


              </InputContainer>

              <MAnimation trigger='scroll' variant='slideImpactUp'>
                <InfoDiv>
                  <FaCheckCircle />
                  <p>All masks are applied automatically as you type. Numbers are accepted and formatted in real-time.</p>
                </InfoDiv>
              </MAnimation>

            </BaseDiv>

          </MAnimation>

        </BaseSection>

      </InputSectionContent>
    </InputSectionContainer>
  )
}
