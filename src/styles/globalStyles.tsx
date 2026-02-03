'use client'

// 🎨 GLOBAL STYLES - Estilos globais com Styled Components

import styled, { createGlobalStyle } from 'styled-components'
import { animations } from './animations'
import { media, theme, themeConfig } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html{
    background-image: linear-gradient(to bottom, ${theme.colors.baseBlack.light20}, ${theme.colors.baseBlack.dark30});
    background-attachment: fixed;
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.baseBlue.light30};
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.baseBlue.light20} ${theme.colors.baseBlack.light08};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

    ${media.pc}{
      width: 95%;
    }

    ${media.tablet}{
      width: 95%;
    }

    ${media.mobile}{
      width: 95%;
    }
  }

  .shineButton {
    ${animations.shineInfinite}
  }
`

export const OverlayBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 100;
`

export const OverlayDarck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`

export const CloseButton = styled.button`
  border-radius: 50%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${theme.colors.baseBlue.dark20};
  }

  &:hover {
    svg {
      color: ${theme.colors.baseBlue.light};
    }
  }
`

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.baseBlue.light30};
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 35px;
  }
`

export const TitleH3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${theme.colors.baseBlue.light30};
`

export const MinorTextH4 = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${theme.colors.baseBlack.light40};
`

export const GradientTextH2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(360deg, ${themeConfig.neon.colors.neonBlue.base}, ${theme.colors.baseBlue.base});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const GradientSpan = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: ${theme.colors.textColor};
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${themeConfig.neon.colors.neonPink.base}, ${themeConfig.neon.colors.neonBlue.base});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    background: linear-gradient(360deg, ${themeConfig.neon.colors.neonBlue.base}, ${themeConfig.neon.colors.neonPink.base});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const Line = styled.span.attrs({ 'aria-hidden': true })`
  width: 80px;
  height: 2px;
  background: ${({ theme }) => theme.colors.baseBlack.light50};
  margin: 0 2px;
`

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.baseBlue.base};
  margin: 0 2px;
`

export const GlobalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background-image: linear-gradient(360deg, ${theme.colors.baseBlue.light02}, ${theme.colors.baseBlack.light08});
  border-radius: 16px;
  padding: 18px;
  border: 2px solid ${theme.colors.baseBlue.light02};
  box-shadow: 3px 3px 8px 0px ${themeConfig.neon.colors.neonBlue.base};

  ${media.mobile} {
    padding: 8px;
  }
`
