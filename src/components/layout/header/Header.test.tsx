import { renderWithProviders } from '@/tests/renderWithProviders'
import { screen } from '@testing-library/react'
import Header from './Header'

jest.mock('@/styles/MaskedAnimations/AnimationProvider', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimationProvider: ({ children }: any) => children
}))

describe('Header', () => {
  it('should render the logo', () => {
    renderWithProviders(<Header />)

    expect(screen.getByText('Masked Components')).toBeInTheDocument()
  })

  it('should render the GitHub link', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('link', { name: 'See on GitHub' })).toBeInTheDocument()
  })

  it('should render the theme switcher', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('button', { name: /switch theme/i })).toBeInTheDocument()
  })
})
