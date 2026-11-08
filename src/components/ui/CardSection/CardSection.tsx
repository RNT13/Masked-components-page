'use client'

import { useState } from 'react'
import { BsCreditCard, BsStar, BsCheck2, BsGraphUp } from 'react-icons/bs'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedCards } from '../MaskedCards/MaskedCards'
import {
  CardSectionContainer,
  CardSectionContent,
  SectionLabel,
  CardGrid,
  CodeBlock
} from './CardSection.styles'

export default function CardSection() {
  const [plan, setPlan] = useState<'free' | 'pro'>('pro')

  return (
    <CardSectionContainer>
      <CardSectionContent>
        <BaseSection>
          <BaseDiv>
            <MaskedAnimation variant="revealFadeInDown" trigger="scroll" once>
              <SectionLabel>Masked Cards</SectionLabel>
              <TitleH3>
                <BsCreditCard /> Cards com variants e tokens
              </TitleH3>
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.1}>
              <CardGrid>
                <MaskedCards
                  $variant="metric"
                  icon={<BsGraphUp />}
                  value="12"
                  label="Componentes instaláveis"
                  trendValue="+4 na v2"
                  trend="up"
                  colorTheme="baseLilac"
                />

                <MaskedCards
                  $variant="feature"
                  icon={<BsStar />}
                  title="FeatureCard"
                  description="Variant com ícone, título, descrição e action prontos."
                  highlight
                  action={
                    <MaskedButton variant="outline" size="sm">
                      Saiba mais
                    </MaskedButton>
                  }
                />

                <MaskedCards
                  $variant="product"
                  title="ProductCard"
                  description="Variant de produto com preço, badge e status."
                  price={49}
                  originalPrice={79}
                  priceFormat={{ locale: 'pt-BR', currency: 'BRL' }}
                  badge="Novo"
                  status="active"
                  actions={
                    <MaskedButton variant="default" size="sm">
                      Comprar
                    </MaskedButton>
                  }
                />
              </CardGrid>
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.2}>
              <CardGrid>
                <MaskedCards
                  $variant="plan"
                  planName="Free"
                  active={plan === 'free'}
                  onClick={() => setPlan('free')}
                  description="Componentes essenciais para começar."
                  statusLabel={plan === 'free' ? 'Plano atual' : undefined}
                  action={
                    <MaskedButton variant="outline" size="sm">
                      Selecionar
                    </MaskedButton>
                  }
                />

                <MaskedCards
                  $variant="plan"
                  planName="Pro"
                  icon={<BsCheck2 />}
                  active={plan === 'pro'}
                  onClick={() => setPlan('pro')}
                  description="Todos os componentes + theme engine."
                  statusLabel={plan === 'pro' ? 'Plano atual' : undefined}
                  renewalDate="12/12/2026"
                  action={
                    <MaskedButton variant="gradient" size="sm">
                      Selecionar
                    </MaskedButton>
                  }
                />

                <MaskedCards
                  $variant="compare"
                  value="152 kB"
                  label="First Load JS"
                  compareText="vs 198 kB na v1"
                  compareTrend="down"
                />
              </CardGrid>
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInUp" trigger="scroll" once delay={0.3}>
              <CodeBlock>
                {`<MaskedCards
  $variant="metric"
  icon={<BsGraphUp />}
  value="12"
  label="Componentes instaláveis"
  trendValue="+4 na v2"
  trend="up"
/>

<MaskedCards
  $variant="feature"
  icon={<BsStar />}
  title="FeatureCard"
  description="Variant com ícone pronto."
  highlight
  action={<MaskedButton variant="outline" size="sm">Saiba mais</MaskedButton>}
/>

<MaskedCards
  $variant="plan"
  planName="Pro"
  active={plan === 'pro'}
  onClick={togglePlan}
  description="Todos os componentes + theme engine."
  action={<MaskedButton variant="gradient" size="sm">Selecionar</MaskedButton>}
/>`}
              </CodeBlock>
            </MaskedAnimation>
          </BaseDiv>
        </BaseSection>
      </CardSectionContent>
    </CardSectionContainer>
  )
}
