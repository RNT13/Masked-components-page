'use client'

import { useState } from 'react'
import { BsStar, BsCheck2, BsGraphUp, BsLightning } from 'react-icons/bs'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote } from '@/components/layout/DemoCard/DemoCard.styles'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedCards } from '../MaskedCards/MaskedCards'
import { MaskedCardGroup } from '../MaskedCards/Group/MaskedCardGroup'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardFooter,
  CardActions
} from '../MaskedCards/Base/CardParts'
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

const statHrefCode = `<MaskedCards $variant="stat" value="17" label="Themes" />

// any card becomes a link with href
<MaskedCards
  $variant="feature"
  icon={<BsStar />}
  title="Docs"
  description="Cards accept href and render as links."
  href="https://github.com/RNT13/masked-components"
/>`

const appearancesCode = `// the same variant in all six appearances
<MaskedCards $variant="feature" icon={<BsStar />} title="Elevated" appearance="elevated" />
<MaskedCards $variant="feature" icon={<BsStar />} title="Filled" appearance="filled" colorTheme="baseTeal" />
<MaskedCards $variant="feature" icon={<BsStar />} title="Outlined" appearance="outlined" />
<MaskedCards $variant="feature" icon={<BsStar />} title="Flat" appearance="flat" />
<MaskedCards $variant="feature" icon={<BsStar />} title="Gradient" appearance="gradient" colorTheme="baseLilac" />
<MaskedCards $variant="feature" icon={<BsStar />} title="Glass" appearance="glass" />`

const selectableCode = `// controlled or uncontrolled selection, radio or checkbox semantics
<MaskedCards
  $variant="feature"
  icon={<BsCheck2 />}
  title="Selectable"
  description="Click or press Enter/Space to toggle."
  selectable
  selectionMode="multiple"
  defaultSelected
/>

// expandable region with aria-expanded / aria-controls
<MaskedCards
  $variant="feature"
  icon={<BsLightning />}
  title="Expandable"
  description="Click to reveal more content."
  expandable
  expandContent={<p>Hidden details rendered inside an accessible region.</p>}
/>`

const groupCode = `const [plan, setPlan] = useState('pro')

<MaskedCardGroup
  selectionMode="single"
  value={plan}
  onValueChange={setPlan}
  ariaLabel="Choose a plan"
>
  <MaskedCards $variant="plan" planName="Free" selectionValue="free"
    description="Essential components." />
  <MaskedCards $variant="plan" planName="Pro" selectionValue="pro"
    description="All components + theme engine." />
</MaskedCardGroup>
// arrow keys move focus between cards (roving tabindex)`

const newVariantsCode = `<MaskedCards
  $variant="profile"
  name="Ada Lovelace"
  role="Engineer"
  company="Analytical Engines"
  avatarFallback="AL"
  actions={<MaskedButton variant="outline" size="sm">Follow</MaskedButton>}
/>

<MaskedCards
  $variant="article"
  title="Designing token-driven cards"
  excerpt="How --mc-card-* tokens decouple variants from palettes."
  date="Nov 17, 2026"
  author="R. Minoita"
  href="#"
/>

<MaskedCards
  $variant="service"
  title="Consulting"
  description="Design-system audit and migration plan."
  price={120}
  pricePrefix="From"
  priceFormat={{ locale: 'en-US', currency: 'USD' }}
  duration="2 weeks"
  badge="Popular"
/>

<MaskedCards
  $variant="testimonial"
  quote="The card system cut our UI code in half."
  author="Grace Hopper"
  authorRole="CTO, Compiler Inc."
  rating={5}
  avatarFallback="GH"
/>

<MaskedCards
  $variant="pricing"
  planName="Pro"
  price={29}
  priceFormat={{ locale: 'en-US', currency: 'USD' }}
  period="/mo"
  features={[
    { label: 'All components', included: true },
    { label: 'Theme engine', included: true },
    { label: 'Priority support', included: false }
  ]}
  appearance="gradient"
  action={<MaskedButton variant="default" size="sm">Subscribe</MaskedButton>}
/>`

const layoutsCode = `// media variants react to layout and mediaRatio
<MaskedCards
  $variant="article"
  layout="horizontal"
  title="Horizontal"
  excerpt="Media sits on the left at 40% width."
  image="https://picsum.photos/640/360"
/>

<MaskedCards
  $variant="article"
  layout="overlay"
  title="Overlay"
  excerpt="Content over the media with a readability gradient."
  image="https://picsum.photos/640/360"
/>

<MaskedCards
  $variant="service"
  layout="split"
  mediaRatio="1:1"
  title="Split 1:1"
  description="Half media, half content."
  image="https://picsum.photos/400/400"
/>`

const compositionCode = `import {
  Card, CardHeader, CardMedia, CardContent, CardFooter, CardActions
} from '@/components/ui/MaskedCards/Base/CardParts'

<Card appearance="outlined" href="#">
  <CardMedia src="https://picsum.photos/640/360" alt="Cover" mediaRatio="21:9" />
  <CardHeader>
    <h3>Composed card</h3>
  </CardHeader>
  <CardContent>
    <p>Free-form content inside the same token-driven container.</p>
  </CardContent>
  <CardFooter>
    <CardActions>
      <MaskedButton variant="outline" size="sm">Action</MaskedButton>
    </CardActions>
  </CardFooter>
</Card>`

export default function CardSection() {
  const [plan, setPlan] = useState<'free' | 'pro'>('pro')
  const [groupPlan, setGroupPlan] = useState('pro')

  return (
    <SectionShell
      id="cards"
      title="MaskedCards"
      description="Eleven variants driven by tokens and colorTheme — with appearances, layouts, selection, expansion, groups and composition."
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

        <DemoCard title="Appearances" description="The same variant in all six appearances." code={appearancesCode} stacked>
          <CardGrid>
            <MaskedCards $variant="feature" icon={<BsStar />} title="Elevated" description="Default shadowed surface." appearance="elevated" />
            <MaskedCards $variant="feature" icon={<BsStar />} title="Filled" description="Soft accent background." appearance="filled" colorTheme="baseTeal" />
            <MaskedCards $variant="feature" icon={<BsStar />} title="Outlined" description="Border only, transparent bg." appearance="outlined" />
            <MaskedCards $variant="feature" icon={<BsStar />} title="Flat" description="No border, no shadow." appearance="flat" />
            <MaskedCards $variant="feature" icon={<BsStar />} title="Gradient" description="Accent gradient surface." appearance="gradient" colorTheme="baseLilac" />
            <MaskedCards $variant="feature" icon={<BsStar />} title="Glass" description="Backdrop blur surface." appearance="glass" />
          </CardGrid>
        </DemoCard>

        <DemoCard title="Selectable & expandable" description="Selection with radio/checkbox semantics and an accessible expandable region." code={selectableCode} stacked>
          <CardGrid>
            <MaskedCards
              $variant="feature"
              icon={<BsCheck2 />}
              title="Selectable"
              description="Click or press Enter/Space to toggle."
              selectable
              selectionMode="multiple"
              defaultSelected
            />
            <MaskedCards
              $variant="feature"
              icon={<BsLightning />}
              title="Expandable"
              description="Click to reveal more content."
              expandable
              expandContent={<p>Hidden details rendered inside an accessible region.</p>}
            />
          </CardGrid>
        </DemoCard>

        <DemoCard title="MaskedCardGroup" description="Radiogroup semantics with roving tabindex — arrow keys move between cards." code={groupCode} stacked>
          <MaskedCardGroup
            selectionMode="single"
            value={groupPlan}
            onValueChange={setGroupPlan}
            ariaLabel="Choose a plan"
          >
            <CardGrid>
              <MaskedCards
                $variant="plan"
                planName="Free"
                selectionValue="free"
                description="Essential components to get started."
              />
              <MaskedCards
                $variant="plan"
                planName="Pro"
                selectionValue="pro"
                icon={<BsCheck2 />}
                description="All components + theme engine."
              />
            </CardGrid>
          </MaskedCardGroup>
        </DemoCard>

        <DemoCard title="New variants" description="profile, article, service, testimonial and pricing." code={newVariantsCode} stacked>
          <CardGrid>
            <MaskedCards
              $variant="profile"
              name="Ada Lovelace"
              role="Engineer"
              company="Analytical Engines"
              avatarFallback="AL"
              actions={<MaskedButton variant="outline" size="sm">Follow</MaskedButton>}
            />
            <MaskedCards
              $variant="article"
              title="Designing token-driven cards"
              excerpt="How --mc-card-* tokens decouple variants from palettes."
              date="Nov 17, 2026"
              author="R. Minoita"
              href="#"
            />
            <MaskedCards
              $variant="service"
              title="Consulting"
              description="Design-system audit and migration plan."
              price={120}
              pricePrefix="From"
              priceFormat={{ locale: 'en-US', currency: 'USD' }}
              duration="2 weeks"
              badge="Popular"
            />
            <MaskedCards
              $variant="testimonial"
              quote="The card system cut our UI code in half."
              author="Grace Hopper"
              authorRole="CTO, Compiler Inc."
              rating={5}
              avatarFallback="GH"
            />
            <MaskedCards
              $variant="pricing"
              planName="Pro"
              price={29}
              priceFormat={{ locale: 'en-US', currency: 'USD' }}
              period="/mo"
              features={[
                { label: 'All components', included: true },
                { label: 'Theme engine', included: true },
                { label: 'Priority support', included: false }
              ]}
              appearance="gradient"
              action={<MaskedButton variant="default" size="sm">Subscribe</MaskedButton>}
            />
          </CardGrid>
        </DemoCard>

        <DemoCard title="Layouts & mediaRatio" description="horizontal, overlay and split layouts on media variants." code={layoutsCode} stacked>
          <MaskedCards
            $variant="article"
            layout="horizontal"
            title="Horizontal"
            excerpt="Media sits on the left at 40% width."
            image="https://picsum.photos/640/360"
          />
          <CardGrid>
            <MaskedCards
              $variant="article"
              layout="overlay"
              title="Overlay"
              excerpt="Content over the media with a readability gradient."
              image="https://picsum.photos/640/360"
            />
            <MaskedCards
              $variant="service"
              layout="split"
              mediaRatio="1:1"
              title="Split 1:1"
              description="Half media, half content."
              image="https://picsum.photos/400/400"
            />
          </CardGrid>
        </DemoCard>

        <DemoCard title="Composition" description="Free-form cards built from Card parts." code={compositionCode} stacked>
          <CardGrid>
            <Card appearance="outlined" href="#">
              <CardMedia src="https://picsum.photos/640/360" alt="Cover" />
              <CardHeader>
                <h3>Composed card</h3>
              </CardHeader>
              <CardContent>
                <p>Free-form content inside the same token-driven container.</p>
              </CardContent>
              <CardFooter>
                <CardActions>
                  <MaskedButton variant="outline" size="sm">Action</MaskedButton>
                </CardActions>
              </CardFooter>
            </Card>
            <Card appearance="filled" colorTheme="baseTeal" selectable selectionMode="multiple">
              <CardHeader>
                <h3>Selectable composed</h3>
              </CardHeader>
              <CardContent>
                <p>Composition parts inherit selection, expansion and tokens.</p>
              </CardContent>
            </Card>
          </CardGrid>
        </DemoCard>
      </DemoStack>
    </SectionShell>
  )
}
