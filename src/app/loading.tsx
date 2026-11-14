'use client'

import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.borderColor};
  border-top: 4px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 3s;
  }
`

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  )
}
