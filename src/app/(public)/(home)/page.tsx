'use client'

import AboutSection from '@/components/ui/AboutSection/AboutSection'
import AnimationSection from '@/components/ui/AnimationSection/AnimationSection'
import Section from '@/components/ui/BaseSection/BaseSection'
import ButtonSection from '@/components/ui/ButtonSection/ButtonSection'
import DisclaimerSection from '@/components/ui/DisclaimerSection/DisclaimerSection'
import FeaturesSection from '@/components/ui/FeaturesSection/FeaturesSection'
import InputSection from '@/components/ui/InputSection/InputSection'
import InstallSection from '@/components/ui/InstallSection/InstallSection'
import { TbPlayCardStarFilled } from "react-icons/tb"
import { HomeContainer, HomeContent } from './homeStyles'

export default function Home() {
  return (
    <HomeContainer className="container">
      <HomeContent>
        <AboutSection />
        <InstallSection />

        <InputSection />
        <ButtonSection />
        <AnimationSection />

        <Section
          header
          icon={<TbPlayCardStarFilled />}
          title="Masked Cards Soon"
        />

        <FeaturesSection />

        <DisclaimerSection />

      </HomeContent>
    </HomeContainer>
  )
}
