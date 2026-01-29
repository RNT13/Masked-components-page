import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const InputSectionContainer = styled.div``

export const InputSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  ${media.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.baseBlue.light02};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.baseBlue.light20};

  p {
    width: 100%;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.baseBlue.light30};
  }

  svg {
    font-size: 38px;
  }
`
