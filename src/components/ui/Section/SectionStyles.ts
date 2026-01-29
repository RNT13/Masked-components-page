import { theme, themeConfig } from '@/styles/theme'
import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  scroll-margin-top: 110px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const SectionDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-image: linear-gradient(360deg, ${theme.colors.baseBlue.light02}, ${theme.colors.baseBlack.light08});
  border: 2px solid ${theme.colors.baseBlue.light02};
  border-radius: 10px;
  box-shadow: 3px 3px 8px 0px ${themeConfig.neon.colors.neonBlue.base};
`

export const SectionDivHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border-bottom: 2px solid ${theme.colors.baseBlue.light20};

  p {
    text-align: center;
  }
`

export const SectionDivBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`
