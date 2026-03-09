import { css } from 'styled-components'
import { transitions } from './transitions'

export const controlledAnimations = {
  fadeInOut: css<{ $isOn?: boolean }>`
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    pointer-events: ${({ $isOn }) => ($isOn ? 'auto' : 'none')};
    ${transitions.fast}
  `,

  slideFromLeft: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'translateX(0)' : 'translateX(-16px)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  slideFromRight: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'translateX(0)' : 'translateX(16px)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  slideFromTop: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'translateY(0)' : 'translateY(-16px)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.fast}
  `,

  slideFromBottom: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'translateY(0)' : 'translateY(16px)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  zoomInOut: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'scale(1)' : 'scale(0.95)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.fast}
  `,

  drawer: css<{ $isOn?: boolean }>`
    overflow: hidden;
    transform-origin: top;

    transform: ${({ $isOn }) => ($isOn ? 'scaleY(1)' : 'scaleY(0)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};

    transition:
      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.25s ease;

    pointer-events: ${({ $isOn }) => ($isOn ? 'auto' : 'none')};
  `,

  colapse: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'scaleY(1)' : 'scaleY(0)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.default}
  `,

  hideLeft: css<{ $isOn?: boolean }>`
    transform: ${({ $isOn }) => ($isOn ? 'translateX(0)' : 'translateX(-50%) scale(0.5)')};
    opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
    ${transitions.fast}

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 50%;
      width: 50%;
      height: 100%;
      transform: ${({ $isOn }) => ($isOn ? 'translateX(0) scale(1)' : 'translateX(50%) scale(0.5)')};
      opacity: ${({ $isOn }) => ($isOn ? 1 : 0)};
      ${transitions.fast}
    }
  `
}
