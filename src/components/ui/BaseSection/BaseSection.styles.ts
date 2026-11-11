import { styled } from 'styled-components'

export const BaseSectionRoot = styled.section`
  scroll-margin-top: 110px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`

export const SectionContainer = styled.section`
  scroll-margin-top: 110px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`

export const SectionDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(360deg, ${({ theme }) => theme.colors.baseBlue.light02}, ${({ theme }) => theme.colors.baseBlack.light08});
  border: 2px solid ${({ theme }) => theme.colors.baseBlue.light02};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 3px 3px 8px 0px ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};

  &:hover {
    box-shadow: 5px 5px 15px 0px ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};
    border-color: ${({ theme }) => theme.colors.accentColor ?? theme.colors.baseBlue.light02};
  }
`

export const SectionDivHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.baseBlue.light20};

  p {
    text-align: center;
  }
`

export const SectionDivBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};

  pre {
    overflow-x: auto;
  }
`

export const BaseSectionChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`
