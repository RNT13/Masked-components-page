import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const FeaturesSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FeaturesSectionContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.mobile} {
    flex-direction: column;
  }
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const FeaturesDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
