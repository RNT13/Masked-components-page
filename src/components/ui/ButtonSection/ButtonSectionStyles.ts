import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const ButtonSectionContainer = styled.div`
  width: 100%;
`

export const ButtonSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};

  h3 {
    border-bottom: 2px solid ${maskedTheme.colors.baseBlue.light};
  }
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${maskedTheme.spacing.md};
`
