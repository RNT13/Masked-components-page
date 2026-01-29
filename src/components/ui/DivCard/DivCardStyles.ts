import { animations } from '@/styles/animations'
import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const DivCardContainer = styled.div`
  width: 100%;
`

export const DivCardContent = styled.div`
  width: 100%;
  border-radius: 16px;
`

export const DivCardIcon = styled.div<{ $glow?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 8px;
  border-radius: 16px;
  background-image: linear-gradient(180deg, ${theme.colors.baseBlue.base}, ${theme.colors.baseBlue.dark});
  border: 2px solid ${theme.colors.baseBlue.light02};
  box-shadow: 5px 5px 15px 0px ${theme.colors.baseBlack.base};

  ${animations.shineInfinite}
`
