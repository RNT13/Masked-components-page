'use client'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote } from '@/components/layout/DemoCard/DemoCard.styles'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { ThemeSwitcher } from '@/styles/ThemeEngine/ThemeSwitcher'
import { useThemeEngine } from '@/styles/ThemeEngine/ThemeEngineProvider'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { ThemeCard, ThemeGrid, ThemeSwatch } from './ThemeSection.styles'

const DEFAULT_THEME = 'dark'

/* ---------- code shown ---------- */

const pickerCode = `const { themeName, availableThemes, setThemeName } = useThemeEngine()

<ThemeGrid>
  {availableThemes.map((name) => (
    <ThemeCard key={name} $active={name === themeName} onClick={() => setThemeName(name)}>
      <ThemeSwatch $themeName={name} />
      <span>{name}</span>
    </ThemeCard>
  ))}
</ThemeGrid>`

const setupCode = `// providers.tsx — one line and the whole app gets theme switching
<ThemeEngineProvider defaultTheme="dark" storageKey="mc-theme">
  {children}
</ThemeEngineProvider>

// ready-made switcher, or full control via the hook
<ThemeSwitcher label="Theme" />
setThemeName('dracula')   // persists to localStorage automatically`

const styledCode = `// every theme is a full DefaultTheme: colors, spacing, radius,
// fontSize, boxShadow, transition, zIndex, grid and media
const Card = styled.div\`
  padding: \${({ theme }) => theme.spacing.lg};
  border-radius: \${({ theme }) => theme.radius.lg};
  background: \${({ theme }) => theme.colors.surfaceColor};
  color: \${({ theme }) => theme.colors.textColor};
  border: 1px solid \${({ theme }) => theme.colors.borderColor};
  box-shadow: \${({ theme }) => theme.boxShadow.md()};
\`

// responsive helpers ship with the theme
\${media.tablet} { padding: \${({ theme }) => theme.spacing.md}; }`

const tokensCode = `// per-component theming without touching the global theme
<MaskedButton colorTheme="baseGreen">Save</MaskedButton>
<MaskedButton colorTheme="baseRed" variant="outline">Delete</MaskedButton>

// or register a brand theme at runtime
import { registerTheme } from 'masked-themes'

registerTheme('brand', {
  ...maskedThemeConfig.dark,
  colors: { ...maskedThemeConfig.dark.colors, accentColor: '#ff5722' }
})
setThemeName('brand')`

/* ---------- component ---------- */

export default function ThemeSection() {
  const { themeName, availableThemes, setThemeName } = useThemeEngine()

  return (
    <SectionShell
      id="themes"
      title="Masked Themes"
      description="A built-in theme engine: ThemeEngineProvider at the root, a ready-made ThemeSwitcher, and the useThemeEngine hook for full control. The choice persists in localStorage — this grid included."
    >
      <DemoStack>
        <InfoNote>
          {availableThemes.length} themes, all WCAG AA-checked for body and muted text.
          Click any swatch — the whole site reacts.
        </InfoNote>

        <DemoCard title="Pick a theme" description="Light and dark variants; the active theme is highlighted." code={pickerCode} stacked>
          <ThemeSwitcher label="Theme" />
          <ThemeGrid>
            {availableThemes.map((name) => (
              <ThemeCard
                key={name}
                type="button"
                $active={name === themeName}
                aria-pressed={name === themeName}
                onClick={() => setThemeName(name)}
              >
                <ThemeSwatch $themeName={name} />
                <span>{name}</span>
              </ThemeCard>
            ))}
          </ThemeGrid>
          <MaskedButton variant="soft" size="sm" onClick={() => setThemeName(DEFAULT_THEME)}>
            Reset to {DEFAULT_THEME}
          </MaskedButton>
        </DemoCard>

        <DemoCard title="Setup" description="Provider, switcher and hook — the three pieces of the engine." code={setupCode}>
          <p style={{ margin: 0 }}>
            The provider also exposes <code>--mc-*</code> CSS variables on <code>:root</code>{' '}
            and sets <code>data-mc-theme</code> for the anti-flash script.
          </p>
        </DemoCard>

        <DemoCard
          title="Using the theme in your styles"
          description="Every theme is a complete DefaultTheme — colors, spacing, radius, shadows, breakpoints."
          code={styledCode}
        >
          <p style={{ margin: 0 }}>
            Components read <code>theme.colors.*</code> with fallbacks, so they stay legible
            in all {availableThemes.length} themes — and outside a provider.
          </p>
        </DemoCard>

        <DemoCard
          title="Per-component theming"
          description="colorTheme and tokens restyle a single component; registerTheme adds brand themes at runtime."
          code={tokensCode}
        >
          <PreviewRowDemo />
        </DemoCard>
      </DemoStack>
    </SectionShell>
  )
}

function PreviewRowDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <MaskedButton colorTheme="baseGreen" size="sm">Save</MaskedButton>
      <MaskedButton colorTheme="baseRed" variant="outline" size="sm">Delete</MaskedButton>
      <MaskedButton colorTheme="basePurple" variant="soft" size="sm">Purple</MaskedButton>
    </div>
  )
}
