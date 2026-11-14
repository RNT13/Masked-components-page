import styled from 'styled-components'

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`
