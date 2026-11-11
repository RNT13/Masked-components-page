'use client'

import { BsPalette } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { ThemeSwitcher } from '@/styles/ThemeEngine/ThemeSwitcher'
import { useThemeEngine } from '@/styles/ThemeEngine/ThemeEngineProvider'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import {
  ThemeSectionContainer,
  ThemeSectionContent,
  SectionLabel,
  ThemeGrid,
  ThemeCard,
  ThemeSwatch,
  CodeBlock
} from './ThemeSection.styles'

const DEFAULT_THEME = 'dark'

const codeProvider = `// providers.tsx — uma linha e todo o app ganha troca de tema
import { ThemeEngineProvider } from '@/styles/ThemeEngine/ThemeEngineProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeEngineProvider defaultTheme="${DEFAULT_THEME}">
      {children}
    </ThemeEngineProvider>
  )
}`

const codeSwitcher = `// Botão pronto da lib — cicla pelos temas registrados
import { ThemeSwitcher } from '@/styles/ThemeEngine/ThemeSwitcher'

<ThemeSwitcher label="Theme" />`

const codeHook = `// Controle total via hook
import { useThemeEngine } from '@/styles/ThemeEngine/ThemeEngineProvider'

const { themeName, availableThemes, setThemeName } = useThemeEngine()

setThemeName('${DEFAULT_THEME}')   // persiste em localStorage automaticamente`

export default function ThemeSection() {
  const { themeName, availableThemes, setThemeName } = useThemeEngine()

  return (
    <ThemeSectionContainer>
      <ThemeSectionContent>
        <BaseSection>
          <MaskedAnimation variant="revealFadeInDown" trigger="scroll">
            <SectionLabel>Theme Engine</SectionLabel>
            <TitleH3>
              <BsPalette /> Masked Themes
            </TitleH3>
          </MaskedAnimation>

          <BaseDiv>
            <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
              <p>
                Um motor de temas embutido na lib: <code>ThemeEngineProvider</code> no root,
                <code>ThemeSwitcher</code> pronto para usar, e o hook <code>useThemeEngine</code>
                para controle total. A escolha persiste em <code>localStorage</code> e todo o
                site reage — este card inclusive.
              </p>

              <ThemeSwitcher label="Theme" />

              <ThemeGrid>
                {availableThemes.map((name) => (
                  <ThemeCard
                    key={name}
                    type="button"
                    $active={name === themeName}
                    onClick={() => setThemeName(name)}
                  >
                    <ThemeSwatch $themeName={name} />
                    <span>{name}</span>
                  </ThemeCard>
                ))}
              </ThemeGrid>

              <MaskedButton variant="soft" onClick={() => setThemeName(DEFAULT_THEME)}>
                Reset to default
              </MaskedButton>
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
              <TitleH3>
                <FaCode /> Setup
              </TitleH3>
              <CodeBlock>{codeProvider}</CodeBlock>
              <CodeBlock>{codeSwitcher}</CodeBlock>
              <CodeBlock>{codeHook}</CodeBlock>
            </MaskedAnimation>
          </BaseDiv>
        </BaseSection>
      </ThemeSectionContent>
    </ThemeSectionContainer>
  )
}
