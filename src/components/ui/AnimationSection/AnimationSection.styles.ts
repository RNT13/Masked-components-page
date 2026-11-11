import styled, { type RuleSet } from 'styled-components'

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const AnimationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

/* $clip corta animações que saem da caixa (ex.: foguete). Contínuas não cortam. */
export const AnimCell = styled.div<{ $clip?: boolean }>`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  ${({ $clip }) => $clip && 'overflow: hidden;'}
`

/* A animação é aplicada AQUI (no box arredondado), não num wrapper:
   assim bordas e brilhos seguem o raio e ficam sempre por cima do conteúdo. */
export const AnimBox = styled.div<{ $anim?: RuleSet<object>; $isOn?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 96px;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceColor ?? 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};

  ${({ $anim }) => $anim}
`
