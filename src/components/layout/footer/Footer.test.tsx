import { renderWithProviders } from "@/tests/renderWithProviders"
import { screen } from "@testing-library/react"
import Footer from "./Footer"

// mock do AnimationProvider para testes
jest.mock('@/styles/MaskedAnimations/AnimationProvider', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimationProvider: ({ children }: any) => children
}))

describe('Footer', () => {
  it('should render the footer', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByText('Masked Components')).toBeInTheDocument()
  })
})
