import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing['3xl'] ?? '96px'} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;
`

export const HeroContent = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const HeroBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
`

export const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 1.15;
  margin: 0;
  color: ${({ theme }) => theme.colors.textColor};
`

export const HeroGradient = styled.span`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base},
    ${({ theme }) => theme.colors.baseViolet?.base ?? theme.colors.baseBlue.light20}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  max-width: 560px;
  margin: 0;
`

export const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
`

export const HeroStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.base};
`

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`
