import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { maskedTheme } from '@/styles/MaskedThemes/MaskedThemes'
import { MaskedCards } from '../MaskedCards'
import { MaskedCardGroup } from '../Group/MaskedCardGroup'
import type {
  MaskedCardGroupMultipleProps,
  MaskedCardGroupSingleProps
} from '../Group/MaskedCardGroup.types'

type SingleProps = Partial<Omit<MaskedCardGroupSingleProps, 'children'>> & {
  disabled?: boolean
}
type MultipleProps = Partial<Omit<MaskedCardGroupMultipleProps, 'children'>>

function renderSingle(props: SingleProps = {}) {
  return render(
    <ThemeProvider theme={maskedTheme}>
      <MaskedCardGroup ariaLabel="Plano" selectionMode="single" {...props}>
        <MaskedCards $variant="feature" selectionValue="basic" title="Básico" />
        <MaskedCards $variant="feature" selectionValue="pro" title="Pro" />
        <MaskedCards $variant="feature" selectionValue="ent" title="Enterprise" disabled />
      </MaskedCardGroup>
    </ThemeProvider>
  )
}

function renderMultiple(props: MultipleProps = {}) {
  return render(
    <ThemeProvider theme={maskedTheme}>
      <MaskedCardGroup ariaLabel="Canais" selectionMode="multiple" {...props}>
        <MaskedCards $variant="feature" selectionValue="email" title="E-mail" />
        <MaskedCards $variant="feature" selectionValue="sms" title="SMS" />
      </MaskedCardGroup>
    </ThemeProvider>
  )
}

describe('MaskedCardGroup — single (radiogroup)', () => {
  it('renderiza radiogroup com aria-label e radios', () => {
    renderSingle()
    expect(screen.getByRole('radiogroup', { name: 'Plano' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('ariaLabelledBy funciona', () => {
    render(
      <ThemeProvider theme={maskedTheme}>
        <h2 id="t">Planos</h2>
        <MaskedCardGroup ariaLabelledBy="t" selectionMode="single">
          <MaskedCards $variant="feature" selectionValue="a" title="A" />
        </MaskedCardGroup>
      </ThemeProvider>
    )
    expect(screen.getByRole('radiogroup', { name: 'Planos' })).toBeInTheDocument()
  })

  it('não controlado: defaultValue marca aria-checked', () => {
    renderSingle({ defaultValue: 'pro' })
    const radios = screen.getAllByRole('radio')
    expect(radios[1]).toHaveAttribute('aria-checked', 'true')
    expect(radios[0]).toHaveAttribute('aria-checked', 'false')
  })

  it('controlado: respeita value e emite onValueChange', async () => {
    const onValueChange = jest.fn()
    renderSingle({ value: 'basic', onValueChange })
    await userEvent.click(screen.getAllByRole('radio')[1])
    expect(onValueChange).toHaveBeenCalledWith('pro')
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('aria-checked', 'true')
  })

  it('o rádio selecionado pode receber foco', () => {
    renderSingle({ defaultValue: 'pro' })
    const radios = screen.getAllByRole('radio')
    radios[1].focus()
    expect(document.activeElement).toBe(radios[1])
  })

  it('sem seleção: primeiro habilitado tem tabIndex 0', () => {
    renderSingle()
    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toHaveAttribute('tabIndex', '-1')
    expect(radios[1]).toHaveAttribute('tabIndex', '-1')
  })

  it('setas movem foco e selecionam, pulando desabilitado', async () => {
    const onValueChange = jest.fn()
    renderSingle({ defaultValue: 'basic', onValueChange })
    const radios = screen.getAllByRole('radio')
    radios[0].focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(onValueChange).toHaveBeenCalledWith('pro')
    expect(document.activeElement).toBe(radios[1])
    await userEvent.keyboard('{ArrowRight}')
    // wrap: volta para 'basic' (Enterprise pulado)
    expect(onValueChange).toHaveBeenCalledWith('basic')
    expect(document.activeElement).toBe(radios[0])
  })

  it('Home/End vão às pontas habilitadas', async () => {
    const onValueChange = jest.fn()
    renderSingle({ defaultValue: 'basic', onValueChange })
    screen.getAllByRole('radio')[0].focus()
    await userEvent.keyboard('{End}')
    expect(onValueChange).toHaveBeenCalledWith('pro')
    await userEvent.keyboard('{Home}')
    expect(onValueChange).toHaveBeenCalledWith('basic')
  })

  it('card desabilitado mantém disabled e não seleciona', async () => {
    const onValueChange = jest.fn()
    renderSingle({ onValueChange })
    const ent = screen.getAllByRole('radio')[2]
    expect(ent).toBeDisabled()
    fireEvent.click(ent)
    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('grupo desabilitado desabilita todos', () => {
    renderSingle({ disabled: true })
    for (const radio of screen.getAllByRole('radio')) {
      expect(radio).toBeDisabled()
    }
  })

  it('props avulsas de seleção são ignoradas dentro do grupo', () => {
    render(
      <ThemeProvider theme={maskedTheme}>
        <MaskedCardGroup ariaLabel="G" selectionMode="single" defaultValue="a">
          <MaskedCards
            $variant="feature"
            selectionValue="a"
            title="A"
            selected={false}
            onSelectedChange={jest.fn()}
          />
        </MaskedCardGroup>
      </ThemeProvider>
    )
    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true')
  })
})

describe('MaskedCardGroup — multiple (checkbox group)', () => {
  it('usa role group + checkboxes e alterna com Space', async () => {
    const onValueChange = jest.fn()
    renderMultiple({ defaultValue: ['email'], onValueChange })
    expect(screen.getByRole('group', { name: 'Canais' })).toBeInTheDocument()
    const boxes = screen.getAllByRole('checkbox')
    expect(boxes[0]).toHaveAttribute('aria-checked', 'true')
    boxes[1].focus()
    await userEvent.keyboard(' ')
    expect(onValueChange).toHaveBeenCalledWith(['email', 'sms'])
  })

  it('multiple: todos os itens ficam na tabulação (tabIndex 0)', () => {
    renderMultiple()
    for (const box of screen.getAllByRole('checkbox')) {
      expect(box).toHaveAttribute('tabIndex', '0')
    }
  })
})

describe('MaskedCardGroup — estrutura HTML', () => {
  it('card com actions dentro do grupo: sem interativo aninhado', () => {
    render(
      <ThemeProvider theme={maskedTheme}>
        <MaskedCardGroup ariaLabel="G" selectionMode="single">
          <MaskedCards
            $variant="product"
            selectionValue="p1"
            title="Produto"
            actions={<button type="button">Comprar</button>}
          />
        </MaskedCardGroup>
      </ThemeProvider>
    )
    const action = screen.getByRole('button', { name: 'Comprar' })
    const radio = screen.getByRole('radio')
    expect(radio).not.toContainElement(action)
    expect(action).not.toContainElement(radio)
  })
})

