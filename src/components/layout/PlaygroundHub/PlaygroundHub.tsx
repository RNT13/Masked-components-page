'use client'

import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { Tabs, type TabItem } from '@/components/layout/Tabs/Tabs'
import AnimationSection from '@/components/ui/AnimationSection/AnimationSection'
import { ButtonSection } from '@/components/ui/ButtonSection/ButtonSection'
import CardSection from '@/components/ui/CardSection/CardSection'
import { InputSection } from '@/components/ui/InputSection/InputSection'
import OverlaySection from '@/components/ui/OverlaySection/OverlaySection'
import ThemeSection from '@/components/ui/ThemeSection/ThemeSection'

/* fora do componente: referência estável (o Tabs usa `items` em useEffect) */
const ITEMS: TabItem[] = [
  { id: 'buttons', label: 'Buttons', panel: <ButtonSection /> },
  { id: 'inputs', label: 'Inputs', panel: <InputSection /> },
  { id: 'cards', label: 'Cards', panel: <CardSection /> },
  { id: 'overlays', label: 'Overlays', panel: <OverlaySection /> },
  { id: 'animations', label: 'Animations', panel: <AnimationSection /> },
  { id: 'themes', label: 'Themes', panel: <ThemeSection /> }
]

export function PlaygroundHub() {
  return (
    <SectionShell
      id="playground"
      title="Playground"
      description="Every component below is the real thing, running live. Pick a tab, click, type, and switch the theme."
    >
      <Tabs items={ITEMS} defaultTab="buttons" syncHash ariaLabel="Component playground" />
    </SectionShell>
  )
}
