import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const AboutSectionContainer = styled.div`
  width: 100%;
`

export const AboutSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${maskedTheme.grid.three};
  gap: ${maskedTheme.spacing.lg};

  ${media.tablet} {
    grid-template-columns: ${maskedTheme.grid.two};
  }

  ${media.mobile} {
    grid-template-columns: ${maskedTheme.grid.one};
  }
`
