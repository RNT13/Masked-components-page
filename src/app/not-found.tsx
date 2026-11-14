'use client'

import Link from 'next/link'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.accentColor};
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted ?? theme.colors.textColor};
    margin-bottom: 30px;
    max-width: 500px;
  }
`

const BackButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.basePureWhite?.base ?? '#fff'};
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }
`

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist or was moved.</p>
      <BackButton href="/">Back to home</BackButton>
    </NotFoundContainer>
  )
}
