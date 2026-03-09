import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 60px;

  padding-bottom: 50px;

  ${media.tablet} {
    padding: 50px 0px;
  }
`
