import { renderWithProviders } from "@/tests/renderWithProviders"
import { screen } from "@testing-library/react"
import Footer from "./Footer"

describe('Footer', () => {
  it('should render the footer', () => {
    renderWithProviders(<Footer />)

    expect(screen.getByText('Masked Components')).toBeInTheDocument()
  })
})
