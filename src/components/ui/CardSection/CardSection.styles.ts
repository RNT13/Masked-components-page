import styled from 'styled-components'

export const CardSectionContainer = styled.section`
  width: 100%;
`

export const CardSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

/* stretch: todos os cards da linha têm a mesma altura (o rodapé desce junto) */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: stretch;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

export const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.baseBlack.light08};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
`
