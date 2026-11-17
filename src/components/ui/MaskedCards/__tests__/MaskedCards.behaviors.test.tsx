import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { MaskedCards } from '../MaskedCards'

function renderCard(ui: React.ReactElement) {
  return render(<ThemeProvider theme={maskedTheme}>{ui}</ThemeProvider>)
}

describe('MaskedCards — seleção', () => {
  it('não controlada: selectable + defaultSelected + toggle por clique', async () => {
    const onSelectedChange = jest.fn()
    renderCard(
      <MaskedCards
        $variant="stat"
        value="32"
        label="Planos"
        selectable
        defaultSelected
        onSelectedChange={onSelectedChange}
      />
    )
    // card avulso selecionável = radio (seleção única)
    const toggle = screen.getByRole('radio')
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(toggle)
    expect(onSelectedChange).toHaveBeenCalledWith(false)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
  })

  it('controlada: respeita selected e emite o próximo valor', async () => {
    const onSelectedChange = jest.fn()
    renderCard(
      <MaskedCards
        $variant="stat"
        value="32"
        label="Planos"
        selectable
        selected
        onSelectedChange={onSelectedChange}
      />
    )
    const toggle = screen.getByRole('radio')
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(toggle)
    expect(onSelectedChange).toHaveBeenCalledWith(false)
    // controlado: sem nova renderização, o valor exibido não muda
    expect(toggle).toHaveAttribute('aria-checked', 'true')
  })

  it('teclado: Enter e Space alternam (button nativo)', async () => {
    const onSelectedChange = jest.fn()
    renderCard(
      <MaskedCards
        $variant="stat"
        value="32"
        label="Planos"
        selectable
        onSelectedChange={onSelectedChange}
      />
    )
    const toggle = screen.getByRole('radio')
    toggle.focus()
    await userEvent.keyboard('{Enter}')
    expect(onSelectedChange).toHaveBeenCalledWith(true)
    await userEvent.keyboard(' ')
    expect(onSelectedChange).toHaveBeenCalledWith(false)
  })

  it('disabled: mantém role, disabled e aria-checked; não alterna', async () => {
    const onSelectedChange = jest.fn()
    renderCard(
      <MaskedCards
        $variant="stat"
        value="32"
        label="Planos"
        selectable
        disabled
        onSelectedChange={onSelectedChange}
      />
    )
    const toggle = screen.getByRole('radio')
    expect(toggle).toBeDisabled()
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(toggle)
    expect(onSelectedChange).not.toHaveBeenCalled()
  })
})

describe('MaskedCards — expansão', () => {
  it('não controlada: expande/recolhe e sincroniza aria-expanded', async () => {
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        expandable
        expandContent={<p>Detalhes</p>}
      />
    )
    const trigger = screen.getByRole('button', { name: /mostrar mais/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Detalhes')).toBeInTheDocument()
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('controlada: expanded + onExpandedChange', async () => {
    const onExpandedChange = jest.fn()
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        expandable
        expanded
        onExpandedChange={onExpandedChange}
        expandContent={<p>Detalhes</p>}
      />
    )
    const trigger = screen.getByRole('button', { name: /mostrar menos/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(trigger)
    expect(onExpandedChange).toHaveBeenCalledWith(false)
  })

  it('aria-controls aponta para a região; recolhida oculta o conteúdo', async () => {
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        expandable
        expandContent={<button type="button">Interno</button>}
      />
    )
    const trigger = screen.getByRole('button', { name: /mostrar mais/i })
    const regionId = trigger.getAttribute('aria-controls')
    expect(regionId).toBeTruthy()
    const region = document.getElementById(regionId as string)
    expect(region).not.toBeNull()
    // recolhida: conteúdo no DOM, mas invisível/inacessível
    const inner = screen.getByRole('button', { name: 'Interno', hidden: true })
    expect(inner).not.toBeVisible()
    await userEvent.click(trigger)
    expect(inner).toBeVisible()
  })

  it('rótulos customizados via expandLabel/collapseLabel', async () => {
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        expandable
        expandLabel="Ver detalhes"
        collapseLabel="Ocultar"
        expandContent={<p>X</p>}
      />
    )
    const trigger = screen.getByRole('button', { name: 'Ver detalhes' })
    await userEvent.click(trigger)
    expect(screen.getByRole('button', { name: 'Ocultar' })).toBeInTheDocument()
  })

  it('expandable + seleção coexistem sem aninhar interativos', () => {
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        selectable
        expandable
        expandContent={<p>X</p>}
      />
    )
    const toggle = screen.getByRole('radio')
    const expandBtn = screen.getByRole('button', { name: /mostrar mais/i })
    // o botão de expansão não pode estar dentro do elemento selecionável
    expect(toggle).not.toContainElement(expandBtn)
    expect(expandBtn).not.toContainElement(toggle)
  })

  it('direction="row" + expandable: bloco de expansão existe e fica fora do fluxo principal', async () => {
    renderCard(
      <MaskedCards
        $variant="feature"
        title="F"
        direction="row"
        expandable
        expandContent={<p>Detalhes</p>}
      />
    )
    const trigger = screen.getByRole('button', { name: /mostrar mais/i })
    await userEvent.click(trigger)
    const regionId = trigger.getAttribute('aria-controls')
    const region = document.getElementById(regionId as string)
    expect(region).not.toBeNull()
    // a região de expansão não pode ser filha de um botão/link
    expect(region?.closest('button, a')).toBeNull()
  })
})
