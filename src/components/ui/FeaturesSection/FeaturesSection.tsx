'use client'

import {
  FaBolt, FaCode, FaCubes, FaPalette, FaServer, FaShieldHalved, FaUniversalAccess, FaWandMagicSparkles
} from 'react-icons/fa6'

import { CodeBlock } from '@/components/layout/CodeBlock/CodeBlock'
import { CATALOG, STATS } from '@/components/layout/data/catalog'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import {
  Badge, Block, BlockTitle, CatalogCard, CatalogGrid, CatalogHead, CatalogName,
  Highlights, InstallLine, Tile, TileGrid, TileIcon, TileText, TileTitle
} from './FeaturesSection.styles'

const FEATURES = [
  { icon: <FaCode />, title: 'Copy-in, you own the code', text: 'The CLI copies readable source into your project. Edit anything; nothing hides behind node_modules.' },
  { icon: <FaCubes />, title: 'One API, many variants', text: `${STATS.buttonVariants} button, ${STATS.inputVariants} input and ${STATS.cardVariants} card variants behind a single polymorphic component each.` },
  { icon: <FaPalette />, title: 'Themes at runtime', text: `${STATS.themes} themes, plus colorTheme and --mc-* tokens for per-instance overrides.` },
  { icon: <FaWandMagicSparkles />, title: 'A real motion system', text: `${STATS.animations} animations: soft reveals, bold entrances, loops and one-shot feedback. All respect reduced motion.` },
  { icon: <FaUniversalAccess />, title: 'Accessible by default', text: 'Keyboard navigation, ARIA roles, focus traps, 44px touch targets and contrast-checked palettes.' },
  { icon: <FaServer />, title: 'SSR-safe', text: 'Works with Next.js, Vite, Remix and CRA. Portals and storage are guarded for the server.' },
  { icon: <FaShieldHalved />, title: 'Safe updates', text: 'Re-running the CLI never overwrites your edits unless you pass --force. Use --dry-run to preview.' },
  { icon: <FaBolt />, title: 'Install only what you need', text: 'Each package is independent. The CLI resolves internal dependencies for you.' }
]

export default function FeaturesSection() {
  return (
    <SectionShell
      id="features"
      title="Everything you need"
      description={`${STATS.packages} installable packages. Pick one or take them all: the CLI resolves what each one needs.`}
    >
      <Block>
        <BlockTitle>Why Masked Components</BlockTitle>
        <TileGrid>
          {FEATURES.map((f, i) => (
            <MaskedAnimation key={f.title} variant="revealGlideUp" trigger="scroll" once delay={i * 0.06}>
              <Tile>
                <TileIcon aria-hidden>{f.icon}</TileIcon>
                <TileTitle>{f.title}</TileTitle>
                <TileText>{f.text}</TileText>
              </Tile>
            </MaskedAnimation>
          ))}
        </TileGrid>
      </Block>

      <Block>
        <BlockTitle>The catalog</BlockTitle>
        <CatalogGrid>
          {CATALOG.map((entry, i) => (
            <MaskedAnimation key={entry.id} variant="revealGlideUp" trigger="scroll" once delay={(i % 2) * 0.08}>
              <CatalogCard>
                <CatalogHead>
                  <CatalogName>{entry.title}</CatalogName>
                  {entry.variants ? <Badge>{entry.variants} variants</Badge> : null}
                </CatalogHead>
                <TileText>{entry.summary}</TileText>
                <Highlights>
                  {entry.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </Highlights>
                <CodeBlock title="Usage" code={entry.snippet} />
                <InstallLine>npx masked-components-cli {entry.id}</InstallLine>
              </CatalogCard>
            </MaskedAnimation>
          ))}
        </CatalogGrid>
      </Block>
    </SectionShell>
  )
}
