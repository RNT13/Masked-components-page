'use client'

import { useState } from 'react'
import { FaGithub, FaHeart } from 'react-icons/fa6'
import { RiDownload2Line } from 'react-icons/ri'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedButtonGroup } from '../MaskedButton/MaskedButtonGroup'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { TitleH3 } from '@/styles/globalStyles'
import { SectionSubtitle, DemoCard, DemoCardTitle, ButtonShowcase, CodeBlock, ButtonGrid } from './ButtonSection.styles'

/* ---------- exemplos de código exibidos na página ---------- */

const codeVariants = `<MaskedButton variant="default">Default</MaskedButton>
<MaskedButton variant="outline">Outline</MaskedButton>
<MaskedButton variant="ghost">Ghost</MaskedButton>
<MaskedButton variant="soft">Soft</MaskedButton>
<MaskedButton variant="gradient">Gradient</MaskedButton>
<MaskedButton variant="neon">Neon</MaskedButton>
<MaskedButton variant="link">Link</MaskedButton>`

const codeStates = `<MaskedButton state="loading" loadingText="Instalando...">
  Instalar
</MaskedButton>

<MaskedButton disabled>Desabilitado</MaskedButton>

<MaskedButton shape="circle" ariaLabel="GitHub"
  leftIcon={<FaGithub />} />`

const codeFields = `// switch controlado
const [on, setOn] = useState(false)
<MaskedButton
  variant="switch"
  checked={on}
  onCheckedChange={setOn}
  switchLabel="Notificações"
/>

// segmented control
<MaskedButtonGroup
  variant="radio"
  defaultValue="react"
  onChange={(v) => console.log(v)}
  options={[
    { value: 'react', label: 'React' },
    { value: 'next', label: 'Next.js' },
    { value: 'vite', label: 'Vite' }
  ]}
/>`

const codeTokens = `// colorTheme: paleta registrada em masked-themes
<MaskedButton variant="default" colorTheme="ruby">
  Ruby
</MaskedButton>

// tokens: override granular (prop > colorTheme > default)
<MaskedButton
  variant="outline"
  tokens={{ 'bg-hover': '#FF2DAA', 'fg': '#fff', 'radius': 999 }}
>
  Custom
</MaskedButton>`

/* ---------- componente ---------- */

export default function ButtonSection() {
  const [notify, setNotify] = useState(true)
  const [framework, setFramework] = useState('next')

  return (
    <BaseSection id="buttons">
      <BaseDiv>
        <MaskedAnimation variant="revealFadeInUp" trigger="mount" >
          <TitleH3>MaskedButton</TitleH3>
          <SectionSubtitle>
            Um componente, onze variantes. Toda a aparência é controlada por
            tokens CSS <code>--mc-btn-*</code> — sem classes utilitárias, sem
            props de cor soltas.
          </SectionSubtitle>
        </MaskedAnimation>

        {/* ---- 1. Variantes visuais ---- */}
        <MaskedAnimation variant="revealFadeInUp" trigger="mount" >
          <DemoCard>
            <DemoCardTitle>Variantes</DemoCardTitle>
            <ButtonShowcase>
              <MaskedButton variant="default">Default</MaskedButton>
              <MaskedButton variant="outline">Outline</MaskedButton>
              <MaskedButton variant="ghost">Ghost</MaskedButton>
              <MaskedButton variant="soft">Soft</MaskedButton>
              <MaskedButton variant="gradient">Gradient</MaskedButton>
              <MaskedButton variant="neon">Neon</MaskedButton>
              <MaskedButton variant="link">Link</MaskedButton>
            </ButtonShowcase>
            <CodeBlock>{codeVariants}</CodeBlock>
          </DemoCard>
        </MaskedAnimation>

        {/* ---- 2. Estados e formas ---- */}
        <MaskedAnimation variant="revealFadeInUp" trigger="mount">
          <DemoCard>
            <DemoCardTitle>Estados, formas e ícones</DemoCardTitle>
            <ButtonShowcase>
              <MaskedButton state="loading" loadingText="Instalando...">
                Instalar
              </MaskedButton>
              <MaskedButton disabled>Desabilitado</MaskedButton>
              <MaskedButton
                shape="circle"
                ariaLabel="GitHub"
                leftIcon={<FaGithub />}
              />
              <MaskedButton
                variant="outline"
                leftIcon={<RiDownload2Line />}
                label="Baixar pacote"
              >
                Download
              </MaskedButton>
              <MaskedButton variant="soft" rightIcon={<FaHeart />}>
                Favoritar
              </MaskedButton>
            </ButtonShowcase>
            <CodeBlock>{codeStates}</CodeBlock>
          </DemoCard>
        </MaskedAnimation>

        {/* ---- 3. Variantes de campo (switch/toggle/checkbox/radio + group) ---- */}
        <MaskedAnimation variant="revealFadeInUp" trigger="mount">
          <DemoCard>
            <DemoCardTitle>Campos: switch, toggle e grupo</DemoCardTitle>
            <ButtonGrid>
              <MaskedButton
                variant="switch"
                checked={notify}
                onCheckedChange={setNotify}
                switchLabel="Notificações"
              />
              <MaskedButton
                variant="toggle"
                toggleLabel="Modo compacto"
                onToggle={(active) => console.log('toggle', active)}
              >
                Compacto
              </MaskedButton>
              <MaskedButton
                variant="checkbox"
                defaultChecked
                checkboxLabel="Aceito os termos"
              />
            </ButtonGrid>

            <MaskedButtonGroup
              variant="radio"
              value={framework}
              onChange={setFramework}
              ariaLabel="Framework favorito"
              options={[
                { value: 'react', label: 'React' },
                { value: 'next', label: 'Next.js' },
                { value: 'vite', label: 'Vite' }
              ]}
            />
            <CodeBlock>{codeFields}</CodeBlock>
          </DemoCard>
        </MaskedAnimation>

        {/* ---- 4. Temas e tokens ---- */}
        <MaskedAnimation variant="revealFadeInUp" trigger="mount">
          <DemoCard>
            <DemoCardTitle>colorTheme e tokens</DemoCardTitle>
            <ButtonShowcase>
              <MaskedButton variant="default" colorTheme="ruby">
                Ruby
              </MaskedButton>
              <MaskedButton variant="default" colorTheme="ocean">
                Ocean
              </MaskedButton>
              <MaskedButton
                variant="outline"
                tokens={{ 'bg-hover': '#FF2DAA', fg: '#fff', radius: 999 }}
              >
                Pill custom
              </MaskedButton>
            </ButtonShowcase>
            <CodeBlock>{codeTokens}</CodeBlock>
          </DemoCard>
        </MaskedAnimation>
      </BaseDiv>
    </BaseSection>
  )
}
