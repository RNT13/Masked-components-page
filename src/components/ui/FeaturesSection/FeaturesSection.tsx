'use client'

import { FaRegCheckCircle } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa6'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MinorTextH4, TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import {
  FeaturesDiv,
  FeaturesSectionContainer,
  FeaturesSectionContent,
  SectionLabel
} from './FeaturesSection.styles'

const featuresLeft = [
  {
    title: 'TypeScript Native',
    description: 'Full typing and intelligent autocomplete.'
  },
  {
    title: 'Polymorphic & Flexible',
    description: 'Components that adapt to any use case with a simple and intuitive API.'
  },
  {
    title: 'Modern Design',
    description: 'Contemporary styles with theme support, smooth animations, and accessibility first.'
  },
  {
    title: 'Customizable',
    description: 'Easy to replace CSS classes and styles.'
  }
]

const featuresRight = [
  {
    title: 'Responsive',
    description: 'Works perfectly on all devices.'
  },
  {
    title: 'Tree Shaking',
    description: 'Import only what you need.'
  },
  {
    title: 'Complete Documentation',
    description: 'Detailed examples and guides.'
  },
  {
    title: 'Optimized Performance',
    description: 'Efficient rendering, optimized bundle size, and zero unnecessary dependencies.'
  }
]

export default function FeaturesSection() {
  return (
    <BaseSection id="features">
      <BaseDiv>
        <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
          <SectionLabel>
            <FaRegStar /> Features
          </SectionLabel>
          <TitleH3>Everything you need</TitleH3>
          <MinorTextH4>
            Everything you need to create modern and functional interfaces.
          </MinorTextH4>
        </MaskedAnimation>

        <FeaturesSectionContainer>
          <FeaturesSectionContent>
            <MaskedAnimation variant="revealFadeInLeft" trigger="scroll">
              <BaseDiv direction="column">
                {featuresLeft.map((feature) => (
                  <MaskedAnimation
                    key={feature.title}
                    variant="revealSlideImpactRight"
                    trigger="scroll"
                  >
                    <FeaturesDiv>
                      <FaRegCheckCircle className="svgGreen" />
                      <div>
                        <p>{feature.title}</p>
                        <MinorTextH4>{feature.description}</MinorTextH4>
                      </div>
                    </FeaturesDiv>
                  </MaskedAnimation>
                ))}
              </BaseDiv>
            </MaskedAnimation>

            <MaskedAnimation variant="revealFadeInRight" trigger="scroll">
              <BaseDiv direction="column">
                {featuresRight.map((feature) => (
                  <MaskedAnimation
                    key={feature.title}
                    variant="revealSlideImpactLeft"
                    trigger="scroll"
                  >
                    <FeaturesDiv>
                      <FaRegCheckCircle className="svgBlue" />
                      <div>
                        <p>{feature.title}</p>
                        <MinorTextH4>{feature.description}</MinorTextH4>
                      </div>
                    </FeaturesDiv>
                  </MaskedAnimation>
                ))}
              </BaseDiv>
            </MaskedAnimation>
          </FeaturesSectionContent>
        </FeaturesSectionContainer>
      </BaseDiv>
    </BaseSection>
  )
}
