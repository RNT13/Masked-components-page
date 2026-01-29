import { media, theme, themeConfig } from '@/styles/theme'
import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const HomeContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 0px;

  ${media.tablet} {
    padding: 50px 0px;
  }
`

export const HomeRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`

export const HomeColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .greenSVG {
    color: ${themeConfig.neon.colors.neonGreen.base};
    text-shadow: 0px 0px 10px ${themeConfig.neon.colors.neonGreen.base};
    font-size: 80px;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const FeaturesDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  .svgGreen {
    color: ${theme.colors.baseGreen.light20};
    font-size: 24px;
  }

  .svgBlue {
    color: ${theme.colors.baseBlue.light30};
    font-size: 24px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
