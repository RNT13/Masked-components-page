'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { FaAnglesUp, FaGithub, FaNpm, FaLinkedin, FaGlobe } from 'react-icons/fa6'
import { ButtonDiv, DivRow, FooterCommand, FooterContainer, ProjectDiv } from './Footer.styles'

const getCurrentYear = () => new Date().getFullYear()

export default function Footer() {
  return (
    <FooterContainer>
      <ButtonDiv>
        <MaskedAnimation trigger="always" variant="continuousFloat">
          <MaskedButton
            variant="default"
            shape="circle"
            label="Back to top"
            leftIcon={<FaAnglesUp />}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          />
        </MaskedAnimation>
      </ButtonDiv>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp" once>
        <ProjectDiv>
          <h3>Masked Components</h3>
          <p>Created by RNT</p>
        </ProjectDiv>
      </MaskedAnimation>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp" delay={0.1} once>
        <DivRow>
          <p className="tagline">
            A polymorphic React component library. Open source and free.
          </p>
        </DivRow>
      </MaskedAnimation>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp" delay={0.15} once>
        <FooterCommand>npx masked-components-cli</FooterCommand>
      </MaskedAnimation>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp" delay={0.2} once>
        <DivRow>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://github.com/RNT13/masked-components-cli"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGithub />}
          >
            GitHub
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://www.npmjs.com/package/masked-components-cli"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaNpm />}
          >
            npm
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://www.linkedin.com/in/renato-minoita/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
          >
            LinkedIn
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://renato-s-dev-page.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGlobe />}
          >
            RNT dev page
          </MaskedButton>
        </DivRow>
      </MaskedAnimation>

      <p>&copy; {getCurrentYear()} RNT Projects. All rights reserved.</p>
    </FooterContainer>
  )
}
