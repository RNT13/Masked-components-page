
'use client'

import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'
import { MinorTextH4 } from '@/styles/globalStyles'
// 🦶 FOOTER COMPONENT - Rodapé da aplicação
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar seu próprio footer

import { FaAnglesUp } from "react-icons/fa6"
import { ButtonDiv, DivRow, FooterContainer, ProjectDiv } from './FooterStyles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'



const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

const Footer = () => {
  return (
    <FooterContainer>
      <ButtonDiv>
        <MaskedButton variant="default" shape='circle' className='shineButton' aria-label='Go to Top' leftIcon={<FaAnglesUp />} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </ButtonDiv>

      <MaskedAnimation trigger='scroll' variant='revealFadeInUp'>
        <ProjectDiv>
          <h3>Masked Components</h3>
          <p>Created by RNT</p>
        </ProjectDiv>
      </MaskedAnimation>

      <MaskedAnimation trigger='scroll' variant='revealFadeInUp'>
        <DivRow>
          <MinorTextH4>A polymorphic React component library. Open source and free.</MinorTextH4>
        </DivRow>
      </MaskedAnimation>

      <MaskedAnimation trigger='scroll' variant='revealFadeInUp'>
        <DivRow>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://' >Documentation (soon)</MaskedButton>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://github.com/RNT13' >GitHub</MaskedButton>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://www.npmjs.com/~renatornt' >NPM</MaskedButton>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://www.instagram.com/renatominoita/' >Instagram</MaskedButton>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://www.linkedin.com/in/renato-minoita/' >Linkedin</MaskedButton>
          <MaskedButton className='greyButton' variant="ghost" size='sm' href='https://renato-s-dev-page.vercel.app/' >RNT-dev-page</MaskedButton>
        </DivRow>
      </MaskedAnimation>

      <p>&copy; {getCurrentYear()} RNT Projects. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer
