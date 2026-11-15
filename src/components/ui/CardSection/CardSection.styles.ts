import styled from 'styled-components'

/* stretch: todos os cards da linha têm a mesma altura */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: stretch;
`
