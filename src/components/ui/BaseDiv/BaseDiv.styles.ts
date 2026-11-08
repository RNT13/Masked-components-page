import { media } from '@/styles/MaskedThemes/MaskedThemes'
import { styled } from 'styled-components'

type Props = {
  $direction?: 'row' | 'column'
  $gap?: string
}

export const BaseDivContainer = styled.div`
  width: 100%;
`

export const BaseDivRoot = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? 'column'};
  gap: ${({ $gap }) => $gap ?? '0'};
  background-image: linear-gradient(360deg, ${({ theme }) => theme.colors.baseBlue.light02}, ${({ theme }) => theme.colors.baseBlack.light08});
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.baseBlue.light02};
  box-shadow: 3px 3px 8px 0px ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing.sm};
  }

  &:hover {
    box-shadow: 5px 5px 15px 0px ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};
    border-color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};
  }
`
