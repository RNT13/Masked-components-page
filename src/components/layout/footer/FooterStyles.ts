import { animations } from '@/styles/animations'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  background-image: linear-gradient(90deg, ${theme.colors.baseBlack.base}, ${theme.colors.baseBlack.light});
  border-top: 2px solid ${theme.colors.baseBlue.base};
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
    color: ${theme.colors.baseBlue.light30};
    font-size: 14px;
    opacity: 0.8;
  }

  .shineButton {
    ${animations.bounce}
    &:hover {
      ${animations.glow}
    }
  }
`

export const ButtonDiv = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
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
    color: ${theme.colors.baseBlack.light30};

    &:hover {
      color: ${theme.colors.baseBlack.light50};
      background-color: ${theme.colors.baseBlack.light30};
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
