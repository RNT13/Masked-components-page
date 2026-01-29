import { css, keyframes } from 'styled-components'

/* ======================================================
   TRANSITIONS (helpers prontos)
====================================================== */

export const transitions = {
  fast: css`
    transition:
      transform 0.2s ease,
      opacity 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
  `,

  default: css`
    transition:
      transform 0.35s ease,
      opacity 0.35s ease,
      background-color 0.35s ease,
      color 0.35s ease,
      box-shadow 0.35s ease;
  `,

  slow: css`
    transition:
      transform 0.5s ease,
      opacity 0.5s ease,
      background-color 0.5s ease,
      color 0.5s ease,
      box-shadow 0.5s ease;
  `,

  delay: css`
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    transition-delay: 1s;
  `
}

/* ======================================================
   KEYFRAMES (privados ao arquivo)
====================================================== */

const spinKeyframes = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const pulseKeyframes = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`

const glowDiagonalKeyframes = keyframes`
  0% {
    transform: translate(-150%, -150%) rotate(45deg);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: translate(150%, 150%) rotate(45deg);
    opacity: 0;
  }
`

const shineLoopKeyframes = keyframes`
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  30% {
    transform: translateX(120%);
    opacity: 0;
  }

  100% {
    transform: translateX(120%);
    opacity: 0;
  }
`


const bounceKeyframes = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`

const jumpRotateKeyframes = keyframes`
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(12deg); }
  50%  { transform: rotate(-12deg); }
  75%  { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
`

const shimmerKeyframes = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`


const horizontalLineKeyframes = keyframes`
  0% { width: 0%; }
  50% { width: 60%; }
  100% { width: 100%; }
`

export const shakeX = keyframes`
  0%   { transform: translateX(0); }
  15%  { transform: translateX(-4px); }
  30%  { transform: translateX(4px); }
  45%  { transform: translateX(-3px); }
  60%  { transform: translateX(3px); }
  75%  { transform: translateX(-2px); }
  90%  { transform: translateX(2px); }
  100% { transform: translateX(0); }
`

export const dots = keyframes`
  0%   { content: ''; }
  25%  { content: '.'; }
  50%  { content: '..'; }
  75%  { content: '...'; }
  100% { content: ''; }
`

/* ======================================================
   BASE HELPERS
====================================================== */

const overlayBase = css`
  position: relative;
  overflow: hidden;
`

/* ======================================================
   ANIMAÇÕES DE ENTRADA / SAÍDA (PLUG & PLAY)
====================================================== */

export const skeletonShimmer = css`
  background-color: rgba(255, 255, 255, 0.06);

    &::before {
      content: '';
      position: absolute;
      inset: 0;

      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.15),
        transparent
      );

      transform: translateX(-100%);
      animation: ${shimmerKeyframes} 1.4s ease-in-out infinite;
    }
`

export const fadeInOut = css<{ $isOpen?: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  ${transitions.fast}
`

export const slideFromLeft = css<{ $isOpen?: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-16px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  ${transitions.default}
`

export const slideFromRight = css<{ $isOpen?: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(16px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  ${transitions.default}
`

export const slideFromTop = css<{ $isOpen?: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-16px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  ${transitions.fast}
`

export const slideFromBottom = css<{ $isOpen?: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(16px)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  ${transitions.default}
`

export const zoomInOut = css<{ $isOpen?: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.95)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  ${transitions.fast}
`

export const drawer = css<{ $isOpen?: boolean; $maxHeight?: string }>`
  overflow: hidden;
  max-height: ${({ $isOpen, $maxHeight }) => ($isOpen ? $maxHeight || '500px' : '0')};
  transition: max-height 0.35s ease;
`

export const loadingDots = css`
  &::after {
    content: '';
    animation: ${dots} 1.2s steps(1, end) infinite;
  }
`

/* ======================================================
   ANIMAÇÕES CONTÍNUAS (USO DIRETO)
====================================================== */

export const animations = {
  skeleton: css`
    ${overlayBase}
    ${skeletonShimmer}
  `,

  skeletonPulse: css`
    ${overlayBase}
    animation: ${pulseKeyframes} 1.5s ease-in-out infinite;
  `,

  glow: css`
    ${overlayBase};

    &::before {
      content: '';
      position: absolute;
      inset: -50%;

      background: linear-gradient(
        120deg,
        transparent 30%,
        rgba(255, 255, 255, 0.6),
        transparent 70%
      );

      width: 200%;
      height: 200%;

      transform: translate(-150%, -150%) rotate(45deg);
      animation: ${glowDiagonalKeyframes} 1.2s ease-out forwards;
      pointer-events: none;
    }
  `,

  shineInfinite: css`
  ${overlayBase};

  &::before {
    content: '';
    position: absolute;
    inset: -50%;

    width: 200%;
    height: 200%;

    background: linear-gradient(
      90deg,
      transparent 30%,
      rgba(255, 255, 255, 0.45),
      transparent 70%
    );

    transform: translate(-1500%, -150%) rotate(45deg);
    animation: ${shineLoopKeyframes} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,

  spin: css`
    animation: ${spinKeyframes} 1s linear infinite;
  `,

  pulse: css`
    animation: ${pulseKeyframes} 1.2s ease-in-out infinite;
  `,

  bounce: css`
    animation: ${bounceKeyframes} 1.4s ease-in-out infinite;
  `,

  jumpRotate: css`
    animation: ${jumpRotateKeyframes} 0.6s ease-in-out;
  `,

  horizontalLine: css`
    animation: ${horizontalLineKeyframes} 1.2s ease-in-out infinite;
  `,

  shakeX: css`
    animation: ${shakeX} 0.4s ease-in-out;
  `
}
