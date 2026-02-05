
'use client'

import { MButton } from '@/components/ui/MaskedButton/MaskedButton'
import { MinorTextH4 } from '@/styles/globalStyles'
// 🦶 FOOTER COMPONENT - Rodapé da aplicação
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar seu próprio footer

import { FaAnglesUp } from "react-icons/fa6"
import { ButtonDiv, DivRow, FooterContainer, ProjectDiv } from './FooterStyles'



const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

const Footer = () => {
  return (
    <FooterContainer>
      <ButtonDiv>
        <MButton variant="neon" shapes='circle' className='shineButton' label='Go to Top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ><FaAnglesUp /></MButton>
      </ButtonDiv>

      <ProjectDiv>
        <h3>Masked Components</h3>
        <p>Created by RNT</p>
      </ProjectDiv>

      <DivRow>
        <MinorTextH4>A polymorphic React component library. Open source and free.</MinorTextH4>
      </DivRow>

      <DivRow>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://' >Documentation (soon)</MButton>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://github.com/RNT13' >GitHub</MButton>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://www.npmjs.com/~renatornt' >NPM</MButton>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://www.instagram.com/renatominoita/' >Instagram</MButton>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://www.linkedin.com/in/renato-minoita/' >Linkedin</MButton>
        <MButton className='greyButton' variant="ghost" size='sm' href='https://renato-s-dev-page.vercel.app/' >RNT-dev-page</MButton>
      </DivRow>

      <p>&copy; {getCurrentYear()} RNT Projects. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer
