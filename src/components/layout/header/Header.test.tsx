import { renderWithProviders } from "@/tests/renderWithProviders"
import { fireEvent, screen } from "@testing-library/react"
import Header from "./Header"

describe("Header", () => {
  it("should render the title", () => {
    renderWithProviders(<Header />)

    expect(screen.getByText('Masked Components')).toBeInTheDocument()
  })

  it('shold render the go to github buttons', () => {
    renderWithProviders(<Header />)

    expect(screen.getByText('Go to GitHub')).toBeInTheDocument()
  })

  it('shold render the install button', () => {
    renderWithProviders(<Header />)

    const installButtons = screen.getAllByText('Install')

    expect(installButtons.length).toBe(2)
  })

  it('shold click the install button', () => {
    renderWithProviders(<Header />);

    const buttons = screen.getAllByText('Install')[1]

    fireEvent.click(buttons)
  })

  it('shold render the description', () => {
    renderWithProviders(<Header />)

    expect(screen.getByText('A complete library of polymorphic components for React. Intelligent inputs, interactive buttons, and adaptive cards with modern design and a simplified API.')).toBeInTheDocument()
  })


})
