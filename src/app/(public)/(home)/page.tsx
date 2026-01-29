'use client'

import ButtonSection from '@/components/ui/ButtonSection/ButtonSection'
import DivCard from '@/components/ui/DivCard/DivCard'
import InputSection from '@/components/ui/InputSection/InputSection'
import { MButton } from '@/components/ui/MaskedButton/MaskedButton'
import Section from '@/components/ui/Section/Section'
import { MinorTextH4, TitleH2 } from '@/styles/globalStyles'
import { AiFillThunderbolt } from 'react-icons/ai'
import { FaBox, FaCode, FaPalette, FaRegCheckCircle, FaRegStar } from 'react-icons/fa'
import { GiCrystalShine } from "react-icons/gi"
import { RiDownload2Line } from 'react-icons/ri'
import { TbPlayCardStarFilled } from "react-icons/tb"
import { WiStars } from "react-icons/wi"
import { ButtonDiv, FeaturesDiv, HomeColumn, HomeContainer, HomeContent, HomeRow } from './homeStyles'

export default function Home() {
  return (
    <HomeContainer className="container">
      <HomeContent>
        <HomeRow>
          <DivCard
            icon={<FaCode />}
            title="Polymorphic & Flexible"
            description="Components that adapt to any use case with a simple API and intuitive TypeScript for better DX."
          />

          <DivCard
            icon={<AiFillThunderbolt />}
            title="Performance Optimized"
            description="Efficient rendering, optimized bundle size and zero unnecessary dependencies. Built for scale."
          />

          <DivCard
            icon={<FaPalette />}
            title="Modern Design"
            description="Contemporary styles with theme support, smooth animations and accessibility in mind."
          />
        </HomeRow>

        <Section
          id="install"
          header
          icon={<FaBox />}
          title="Installation"
          fileType="bash"
          description="Start using Masked Components in your project with a simple command."
          content1="npx rnt-next new-project"
        />

        <Section
          header
          icon={<FaCode />}
          title="Basic Usage of MaskedInput"
          fileType="tsx"
          description="Simple example of using MaskedInput."
          content1={`
import { MInput } from
'../MaskedInput/MaskedInput'

function MyForm() {
  const [value, setValue] = useState('')

  return (
    <MInput
      variant="masked"
      label="Telefone com mascara"
      icon={<BsStars />}
      mask="(00) 0000-0000"
      placeholder="Telefone"
      value={phoneValue}
      onChange={v => setPhoneValue(v)}
    />
  )
}
            `}
        />

        <InputSection />

        <Section
          header
          icon={<FaCode />}
          title="Basic usage of MaskedButton"
          fileType="tsx"
          description="Simple example of using MaskedButton."
          content1={`
<MaskedButton
  type="button"
  variant="default"
  state="default"
  size="sm"
  leftIcon={<FaCode />}
  rightIcon={<FaCode />}
  >
    Default
</MaskedButton>
            `}
        />

        <ButtonSection />

        <Section
          header
          icon={<TbPlayCardStarFilled />}
          title="Masked Cards Soon"
        />

        <Section
          header
          icon={<GiCrystalShine />}
          title="Masked Animations Soon"
        />

        <Section
          header
          icon={<FaRegStar />}
          title="Features"
          description="Everything you need to create modern and functional interfaces."
        >
          <HomeRow>
            <DivCard>
              <FeaturesDiv className=''>
                <FaRegCheckCircle className='svgGreen' />
                <div>
                  <p>TypeScript Native</p>
                  <MinorTextH4>Full typing and intelligent autocomplete.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgGreen' />
                <div>
                  <p>Polymorphic & Flexible</p>
                  <MinorTextH4>Components that adapt to any use case with a simple and intuitive API.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgGreen' />
                <div>
                  <p>Modern Design</p>
                  <MinorTextH4>Contemporary styles with theme support, smooth animations, and accessibility first.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgGreen' />
                <div>
                  <p>Customizable</p>
                  <MinorTextH4>Easy to replace CSS classes and styles.</MinorTextH4>
                </div>
              </FeaturesDiv>
            </DivCard>

            <DivCard>
              <FeaturesDiv>
                <FaRegCheckCircle className='svgBlue' />
                <div>
                  <p>Responsive</p>
                  <MinorTextH4>Works perfectly on all devices.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgBlue' />
                <div>
                  <p>Tree Shaking</p>
                  <MinorTextH4>Import only what you need.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgBlue' />
                <div>
                  <p>Complete Documentation</p>
                  <MinorTextH4>Detailed examples and guides.</MinorTextH4>
                </div>
              </FeaturesDiv>

              <FeaturesDiv>
                <FaRegCheckCircle className='svgBlue' />
                <div>
                  <p>Optimized Performance</p>
                  <MinorTextH4>Efficient rendering, optimized bundle size, and zero unnecessary dependencies.</MinorTextH4>
                </div>
              </FeaturesDiv>

            </DivCard>
          </HomeRow>
        </Section>

        <Section>
          <DivCard>
            <HomeColumn>
              <WiStars className='greenSVG' />
              <TitleH2>Lets Get Started</TitleH2>
              <MinorTextH4>Install now and transform your formulas and interfaces with modern polymorphic components.</MinorTextH4>
              <ButtonDiv>
                <MButton className='shineButton' variant="neon" size='sm' href='#install' label="Install" leftIcon={<RiDownload2Line />} >Install Masked Components</MButton>
              </ButtonDiv>
            </HomeColumn>
          </DivCard>
        </Section>
      </HomeContent>
    </HomeContainer>
  )
}
