'use client'

import styled, { createGlobalStyle } from 'styled-components'
import { accentTheme, maskedTheme } from './MaskedThemes/MaskedThemes'

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
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background 0.3s ease, color 0.3s ease;
  }

  button, input, textarea, select { font-family: inherit; }

  .container {
    width: min(100% - 2rem, ${maskedTheme.grid.maxWidth});
    margin-inline: auto;
  }

  .svgGreen { color: ${({ theme }) => theme.colors.successColor}; font-size: ${maskedTheme.fontSize['2xl']}; }
  .svgBlue  { color: ${({ theme }) => theme.colors.accentColor};  font-size: ${maskedTheme.fontSize['2xl']}; }
`

export const OverlayBlur = styled.div`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5px);
  z-index: 100;
`

export const OverlayDarck = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: transparent;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
  cursor: pointer;

  svg { font-size: 24px; }
  &:hover { color: ${({ theme }) => theme.colors.textColor ?? 'inherit'}; }
`

export const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};

  svg { font-size: 35px; }
`

export const TitleH3 = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
`

/** Texto de apoio (antes renderizava <h3>; agora é parágrafo). */
export const MinorTextH4 = styled.p`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
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
  margin: 0 2px;
  background: ${({ theme }) => theme.colors.borderColor};
`

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
  width: 4px;
  height: 4px;
  margin: 0 2px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentColor};
`
