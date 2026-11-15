'use client'

import { useState } from 'react'
import { BsStar, BsCheck2, BsGraphUp } from 'react-icons/bs'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote } from '@/components/layout/DemoCard/DemoCard.styles'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedCards } from '../MaskedCards/MaskedCards'
import { CardGrid } from './CardSection.styles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'

const metricCode = `<MaskedCards
  $variant="metric"
  icon={<BsGraphUp />}
  value="12"
  label="Installable components"
  trendValue="+4 in v2"
  trend="up"
  colorTheme="baseLilac"
/>`

const featureProductCode = `<MaskedCards
  $variant="feature"
  icon={<BsStar />}
  title="FeatureCard"
  description="Icon, title, description and action slot."
  highlight
  action={<MaskedButton variant="outline" size="sm">Learn more</MaskedButton>}
/>

<MaskedCards
  $variant="product"
  title="ProductCard"
  price={49}
  originalPrice={79}
  priceFormat={{ locale: 'en-US', currency: 'USD' }}
  badge="New"
  status="active"
  actions={<MaskedButton variant="default" size="sm">Buy</MaskedButton>}
/>`

const planCompareCode = `const [plan, setPlan] = useState<'free' | 'pro'>('pro')

<MaskedCards
  $variant="plan" planName="Pro" active={plan === 'pro'}
  onClick={() => setPlan('pro')}
  statusLabel={plan === 'pro' ? 'Current plan' : undefined}
  action={<MaskedButton variant="gradient" size="sm">Select</MaskedButton>}
/>

<MaskedCards
  $variant="compare"
  value="152 kB" label="First Load JS"
  compareText="vs 198 kB in v1" compareTrend="down"
/>`

const statHrefCode = `// TODO confirm: 'stat' variant name
<MaskedCards $variant="stat" value="17" label="Themes" />

// any card becomes a link with href
<MaskedCards
  $variant="feature"
  icon={<BsStar />}
  title="Docs"
  description="Cards accept href and render as links."
  href="https://github.com/RNT13/masked-components"
/>`

export default function CardSection() {
  const [plan, setPlan] = useState<'free' | 'pro'>('pro')

  return (
    <SectionShell
      id="cards"
      title="MaskedCards"
      description="Six variants driven by tokens and colorTheme — metric, feature, product, plan, compare and stat."
    >
      <DemoStack>
        <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once>
          <InfoNote>
            All cards stretch to equal height per row and react to the active theme.
          </InfoNote>
        </MaskedAnimation>

        <DemoCard title="Metric" code={metricCode}>
          <MaskedCards
            $variant="metric"
            icon={<BsGraphUp />}
            value="12"
            label="Installable components"
            trendValue="+4 in v2"
            trend="up"
            colorTheme="baseLilac"
          />
        </DemoCard>

        <DemoCard title="Feature & product" code={featureProductCode} stacked>
          <CardGrid>
            <MaskedCards
              $variant="feature"
              icon={<BsStar />}
              title="FeatureCard"
              description="Icon, title, description and action slot."
              highlight
              action={<MaskedButton variant="outline" size="sm">Learn more</MaskedButton>}
            />
            <MaskedCards
              $variant="product"
              title="ProductCard"
              description="Product variant with price, badge and status."
              price={49}
              originalPrice={79}
              priceFormat={{ locale: 'en-US', currency: 'USD' }}
              badge="New"
              status="active"
              actions={<MaskedButton variant="default" size="sm">Buy</MaskedButton>}
            />
          </CardGrid>
        </DemoCard>

        <DemoCard title="Plan & compare" description="Plan cards are selectable; compare shows a trend against a baseline." code={planCompareCode} stacked>
          <CardGrid>
            <MaskedCards
              $variant="plan"
              planName="Free"
              active={plan === 'free'}
              onClick={() => setPlan('free')}
              description="Essential components to get started."
              statusLabel={plan === 'free' ? 'Current plan' : undefined}
              action={<MaskedButton variant="outline" size="sm">Select</MaskedButton>}
            />
            <MaskedCards
              $variant="plan"
              planName="Pro"
              icon={<BsCheck2 />}
              active={plan === 'pro'}
              onClick={() => setPlan('pro')}
              description="All components + theme engine."
              statusLabel={plan === 'pro' ? 'Current plan' : undefined}
              renewalDate="12/12/2026"
              action={<MaskedButton variant="gradient" size="sm">Select</MaskedButton>}
            />
            <MaskedCards
              $variant="compare"
              value="152 kB"
              label="First Load JS"
              compareText="vs 198 kB in v1"
              compareTrend="down"
            />
          </CardGrid>
        </DemoCard>

        <DemoCard title="Stat & href" description="Stat variant and cards rendered as links via href." code={statHrefCode} stacked>
          <CardGrid>
            {/* TODO confirm: 'stat' variant name */}
            <MaskedCards $variant="stat" value="17" label="Themes" />
            <MaskedCards
              $variant="feature"
              icon={<BsStar />}
              title="Docs"
              description="Cards accept href and render as links."
              href="https://github.com/RNT13/masked-components"
            />
          </CardGrid>
        </DemoCard>
      </DemoStack>
    </SectionShell>
  )
}
