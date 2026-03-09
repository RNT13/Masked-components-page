import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const InputSectionContainer = styled.div``

export const InputSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};
`

export const RowContainer = styled.div`
  display: flex;
  gap: ${maskedTheme.spacing.lg};

  ${media.tablet} {
    flex-direction: column;
    gap: ${maskedTheme.spacing.md};
  }

  ${media.mobile} {
    flex-direction: column;
    gap: ${maskedTheme.spacing.sm};
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.sm};
`

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${maskedTheme.spacing.sm};
  border-radius: ${maskedTheme.radius.md};
  padding: ${maskedTheme.spacing.sm};
  background-color: ${maskedTheme.colors.baseBlue.light02};
  border: 1px solid ${maskedTheme.colors.baseBlue.light20};

  p {
    width: 100%;
    font-size: ${maskedTheme.fontSize.md};
    color: ${maskedTheme.colors.baseBlue.light30};
  }

  svg {
    font-size: ${maskedTheme.fontSize['2xl']};
  }
`
