import { maskedTheme, neonTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  scroll-margin-top: 110px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};
  width: 100%;
`

export const SectionDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(360deg, ${maskedTheme.colors.baseBlue.light02}, ${maskedTheme.colors.baseBlack.light08});
  border: 2px solid ${maskedTheme.colors.baseBlue.light02};
  border-radius: ${maskedTheme.radius.md};
  box-shadow: 3px 3px 8px 0px ${neonTheme.colors.neonBlue.base};

  &:hover {
    box-shadow: 5px 5px 15px 0px ${neonTheme.colors.neonBlue.base};
    border-color: ${neonTheme.colors.neonBlue.base};
  }
`

export const SectionDivHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${maskedTheme.spacing.md};
  border-bottom: 2px solid ${maskedTheme.colors.baseBlue.light20};

  p {
    text-align: center;
  }
`

export const SectionDivBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};
  padding: ${maskedTheme.spacing.md};
  pre {
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    code {
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
