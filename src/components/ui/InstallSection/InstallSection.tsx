'use client'

import { CodeBlock } from '@/components/layout/CodeBlock/CodeBlock'
import { Tabs, type TabItem } from '@/components/layout/Tabs/Tabs'
import { TitleH3 } from '@/styles/globalStyles'
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

const CLI = 'masked-components-cli'

const ITEMS: TabItem[] = RUNNERS.map(({ id, label, run }) => ({
  id,
  label,
  panel: (
    <InstallSectionContent>
      <CodeBlock title="Pick components interactively" code={`${run} ${CLI}`} />
      <CodeBlock
        title="Add specific components"
        code={`${run} ${CLI} masked-buttons masked-input masked-toaster`}
      />
      <CodeBlock
        title="Preview before writing anything"
        code={`${run} ${CLI} --list\n${run} ${CLI} masked-cards --dry-run`}
      />
    </InstallSectionContent>
  )
}))

export default function InstallSection() {
  return (
    <BaseSection id="install">
      <BaseDiv>
        <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once>
          <TitleH3>Installation</TitleH3>
          <SectionLabel>Copy-in components: the files become yours</SectionLabel>
        </MaskedAnimation>

        <InstallSectionContainer>
          <Tabs items={ITEMS} ariaLabel="Package manager" />
        </InstallSectionContainer>
      </BaseDiv>
    </BaseSection>
  )
}
