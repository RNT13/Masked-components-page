'use client'

import { CodeBlock } from '@/components/layout/CodeBlock/CodeBlock'
import { Tabs, type TabItem } from '@/components/layout/Tabs/Tabs'
import { TitleH2 } from '@/styles/globalStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import {
  InstallSectionContainer,
  InstallSectionContent,
  SectionLabel
} from './InstallSection.styles'

const RUNNERS = [
  { id: 'install-npx', label: 'npx', run: 'npx' },
  { id: 'install-pnpm', label: 'pnpm', run: 'pnpm dlx' },
  { id: 'install-yarn', label: 'yarn 2+', run: 'yarn dlx' },
  { id: 'install-bun', label: 'bun', run: 'bunx' }
]

const CLI = 'masked-components'

const ITEMS: TabItem[] = RUNNERS.map(({ id, label, run }) => ({
  id,
  label,
  panel: (
    <InstallSectionContent>

      <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once delay={0.3}>
        <CodeBlock title="Pick components interactively" code={`${run} ${CLI}`} />
      </MaskedAnimation>

      <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once delay={0.4}>
        <CodeBlock
          title="Add specific components"
          code={`${run} ${CLI} masked-buttons masked-input masked-toaster`}
        />
      </MaskedAnimation>

      <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once delay={0.5}>
        <CodeBlock
          title="Preview before writing anything"
          code={`${run} ${CLI} --list\n${run} ${CLI} masked-cards --dry-run`}
        />
      </MaskedAnimation>
    </InstallSectionContent>

  )
}))

export default function InstallSection() {
  return (
    <BaseSection id="install">
      <BaseDiv>
        <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once>
          <TitleH2>Installation</TitleH2>
          <SectionLabel>Copy-in components: the files become yours</SectionLabel>
        </MaskedAnimation>

        <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once delay={0.2}>
          <InstallSectionContainer>
            <Tabs items={ITEMS} ariaLabel="Package manager" />
          </InstallSectionContainer>
        </MaskedAnimation>
      </BaseDiv>
    </BaseSection>
  )
}
