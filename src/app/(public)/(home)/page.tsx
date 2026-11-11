'use client'

import { PlaygroundHub } from '@/components/layout/PlaygroundHub/PlaygroundHub'
import AboutSection from '@/components/ui/AboutSection/AboutSection'
import DisclaimerSection from '@/components/ui/DisclaimerSection/DisclaimerSection'
import FeaturesSection from '@/components/ui/FeaturesSection/FeaturesSection'
import { HeroSection } from '@/components/ui/HeroSection/HeroSection'
import InstallSection from '@/components/ui/InstallSection/InstallSection'
import { HomeContainer, HomeContent } from './homeStyles'

export default function Home() {
  return (
    <HomeContainer className="container">
      <HomeContent>
        <HeroSection />
        <InstallSection />
        <PlaygroundHub />
        <AboutSection />
        <FeaturesSection />
        <DisclaimerSection />
      </HomeContent>
    </HomeContainer>
  )
}
