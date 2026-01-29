import { styled } from 'styled-components'

export const ButtonSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    border-bottom: 2px solid ${props => props.theme.colors.baseBlue.light};
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`
