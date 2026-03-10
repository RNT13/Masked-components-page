import { maskedTheme, media, neonTheme } from '@/styles/MaskedThemes/MaskedThemes'
import styled from 'styled-components'

export const AnimationSectionContainer = styled.div`
  width: 100%;
`

export const AnimationSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.lg};

  h3 {
    border-bottom: 2px solid ${maskedTheme.colors.baseBlue.light};
  }
`

export const AnimationDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${maskedTheme.grid.compact};
  align-items: center;
  gap: ${maskedTheme.spacing.md};

  ${media.tablet} {
    grid-template-columns: ${maskedTheme.grid.two};
  }
`

export const AnimationCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${maskedTheme.spacing.md};
  gap: ${maskedTheme.spacing.md};

  border-radius: ${maskedTheme.radius.md};
  background: ${maskedTheme.colors.baseBlue.light02};

  font-size: ${maskedTheme.fontSize.sm};
  font-weight: 600;

  svg {
    font-size: 32px;
  }

  &:hover {
    background: ${maskedTheme.colors.baseBlue.light08};

    box-shadow: 0px 0px 10px 1px ${neonTheme.colors.neonBlue.base};

    svg {
      color: ${neonTheme.colors.neonBlue.base};
    }
  }
`

export const AnimationDropDown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: ${maskedTheme.spacing.md};
  gap: ${maskedTheme.spacing.md};

  border-radius: ${maskedTheme.radius.md};
  background: ${maskedTheme.colors.baseBlue.light02};

  font-size: ${maskedTheme.fontSize.sm};
  font-weight: 600;

  &:hover {
    background: ${maskedTheme.colors.baseBlue.light08};

    box-shadow: 0px 0px 10px 1px ${neonTheme.colors.neonBlue.base};
  }
`
export const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${maskedTheme.spacing.md};
  border-radius: ${maskedTheme.radius.md};
  background-color: ${maskedTheme.colors.baseBlue.dark};
`
