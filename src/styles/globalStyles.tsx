'use client'

// 🎨 GLOBAL STYLES - Estilos globais com Styled Components

import styled, { createGlobalStyle } from 'styled-components'
import { accentTheme, maskedTheme, media } from './MaskedThemes/MaskedThemes'

// Atalhos locais para as cores accent (Partial no DefaultTheme)
const accentBlue = accentTheme.colors.accentBlue?.base ?? '#00E5FF'
const accentPink = accentTheme.colors.accentPink?.base ?? '#FF2DAA'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

  body {
    background: ${({ theme }) => theme.colors.primaryColor ?? maskedTheme.colors.baseBlack.base};
    color: ${({ theme }) => theme.colors.textColor ?? maskedTheme.colors.baseBlue.light30};
    font-family: var(--primary-font, system-ui), system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea, select { font-family: inherit; }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

    ${media.desktop}{
      width: 95%;
    }

    ${media.tablet}{
      width: 95%;
    }

    ${media.mobile}{
      width: 95%;
    }
  }

  .svgGreen {
    color: ${maskedTheme.colors.baseGreen.light20};
    font-size: ${maskedTheme.fontSize['2xl']};
  }

  .svgBlue {
    color: ${maskedTheme.colors.baseBlue.light30};
    font-size: ${maskedTheme.fontSize['2xl']};
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
    color: ${maskedTheme.colors.baseBlue.dark20};
  }

  &:hover {
    svg {
      color: ${maskedTheme.colors.baseBlue.light};
    }
  }
`

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${maskedTheme.colors.baseBlue.light30};
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
  color: ${maskedTheme.colors.baseBlue.light30};
`

export const MinorTextH4 = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${maskedTheme.colors.baseBlack.light40};
`

export const GradientTextH2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(360deg, ${accentBlue}, ${maskedTheme.colors.baseBlue.base});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const GradientSpan = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: ${maskedTheme.colors.baseBlue.base};
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${accentPink}, ${accentBlue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    background: linear-gradient(360deg, ${accentBlue}, ${accentPink});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const Line = styled.span.attrs({ 'aria-hidden': true })`
  width: 80px;
  height: 2px;
  background: ${maskedTheme.colors.baseBlack.light50};
  margin: 0 2px;
`

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${maskedTheme.colors.baseBlue.base};
  margin: 0 2px;
`
