'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { FaAnglesUp, FaGithub, FaNpm } from 'react-icons/fa6'
import { ButtonDiv, DivRow, FooterContainer, ProjectDiv } from './Footer.styles'

const getCurrentYear = () => new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <ButtonDiv>
        <MaskedButton
          variant="default"
          shape="circle"
          label="Back to top"
          leftIcon={<FaAnglesUp />}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        />
      </ButtonDiv>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
        <ProjectDiv>
          <h3>Masked Components</h3>
          <p>Created by RNT</p>
        </ProjectDiv>
      </MaskedAnimation>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
        <DivRow>
          <p className="tagline">
            A polymorphic React component library. Open source and free.
          </p>
        </DivRow>
      </MaskedAnimation>

      <MaskedAnimation trigger="scroll" variant="revealFadeInUp">
        <DivRow>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://github.com/RNT13/masked-components-cli"
            target="_blank"
            leftIcon={<FaGithub />}
          >
            GitHub
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://www.npmjs.com/package/masked-components-cli"
            target="_blank"
            leftIcon={<FaNpm />}
          >
            npm
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://www.linkedin.com/in/renato-minoita/"
            target="_blank"
          >
            LinkedIn
          </MaskedButton>
          <MaskedButton
            variant="ghost"
            size="sm"
            href="https://renato-s-dev-page.vercel.app/"
            target="_blank"
          >
            RNT dev page
          </MaskedButton>
        </DivRow>
      </MaskedAnimation>

      <p>&copy; {getCurrentYear()} RNT Projects. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer
