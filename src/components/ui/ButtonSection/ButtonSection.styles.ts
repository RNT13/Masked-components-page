import styled from 'styled-components'

export const SectionSubtitle = styled.p`
  max-width: 640px;
  margin: 8px 0 32px;
  color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.baseGray.base};
  line-height: 1.6;

  code {
    padding: 2px 6px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.baseBlack.light08};
    font-size: 0.9em;
  }
`

export const DemoCard = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? theme.colors.baseBlack.light20};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surfaceColor ?? 'transparent'};
`

export const DemoCardTitle = styled.h4`
  margin: 0 0 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor ?? theme.colors.basePrimary.base};
`

export const ButtonShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`

export const CodeBlock = styled.pre`
  margin: 16px 0 0;
  padding: 16px;
  overflow-x: auto;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.baseBlack.base};
  color: ${({ theme }) => theme.colors.baseWhite.light};
  font-size: 0.8rem;
  line-height: 1.5;
`
