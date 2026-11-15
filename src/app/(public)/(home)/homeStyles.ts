import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* ritmo vertical de seção: 64px desktop / 48px mobile (H1) */
  gap: 64px;
  padding-bottom: 64px;

  ${media.tablet} {
    gap: 48px;
    padding-bottom: 48px;
  }
`
