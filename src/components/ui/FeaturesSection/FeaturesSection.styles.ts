import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const FeaturesSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FeaturesSectionContent = styled.div`
  display: flex;
  gap: ${maskedTheme.spacing.lg};

  ${media.mobile} {
    flex-direction: column;
  }
`

export const FeaturesDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${maskedTheme.spacing.md};

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
