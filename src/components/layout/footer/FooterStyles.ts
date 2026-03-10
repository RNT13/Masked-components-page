import { continuousAnimations } from '@/styles/MaskedAnimations/animations/continuousAnimations'
import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  background-image: linear-gradient(90deg, ${maskedTheme.colors.baseBlack.base}, ${maskedTheme.colors.baseBlack.light});
  border-top: 2px solid ${maskedTheme.colors.baseBlue.base};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;

    ${media.tablet} {
      flex-direction: column;
      gap: 12px;
    }
  }

  p {
    color: ${maskedTheme.colors.baseBlue.light30};
    font-size: 14px;
    opacity: 0.8;
  }

  .shineButton {
    ${continuousAnimations.bounce}
    &:hover {
      ${continuousAnimations.shineInfinite}
    }
  }
`

export const ButtonDiv = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);

  button {
    ${continuousAnimations.InfinityGlowDiagonal}
  }
`

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .greyButton {
    color: ${maskedTheme.colors.baseBlack.light30};

    &:hover {
      color: ${maskedTheme.colors.baseBlack.light50};
      background-color: ${maskedTheme.colors.baseBlack.light30};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;

    ${media.tablet} {
      align-items: center;
    }
  }
`
