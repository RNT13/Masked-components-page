'use client'

import AboutSection from '@/components/ui/AboutSection/AboutSection'
import AnimationSection from '@/components/ui/AnimationSection/AnimationSection'
import ButtonSection from '@/components/ui/ButtonSection/ButtonSection'
import CardSection from '@/components/ui/CardSection/CardSection'
import DisclaimerSection from '@/components/ui/DisclaimerSection/DisclaimerSection'
import FeaturesSection from '@/components/ui/FeaturesSection/FeaturesSection'
import InstallSection from '@/components/ui/InstallSection/InstallSection'
import { HomeContainer, HomeContent } from './homeStyles'
import { InputSection } from '@/components/ui/InputSection/InputSection'

export default function Home() {
  return (
    <HomeContainer className="container">
      <HomeContent>
        <AboutSection />
        <InstallSection />

        <InputSection />
        <ButtonSection />
        <CardSection />
        <AnimationSection />

        <FeaturesSection />

        <DisclaimerSection />

      </HomeContent>
    </HomeContainer>
  )
}
