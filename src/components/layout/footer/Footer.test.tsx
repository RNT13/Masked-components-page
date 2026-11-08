import { renderWithProviders } from '@/tests/renderWithProviders'
import { screen } from '@testing-library/react'
import Footer from './Footer'

jest.mock('@/styles/MaskedAnimations/AnimationProvider', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimationProvider: ({ children }: any) => children
}))

describe('Footer', () => {
  it('should render the project name', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByText('Masked Components')).toBeInTheDocument()
  })

  it('should render the external links', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('npm')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('should render the back to top button', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
  })
})
