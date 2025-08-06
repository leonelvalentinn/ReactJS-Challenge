import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('Añadir producto al carrito', () => {
  it('Debe añadir un producto al carrito de compras', async () => {
    render(<App />)

    const button = await screen.findAllByLabelText(/Agregar.*carrito/i)

    fireEvent.click(button[0])

    const counter = screen.getAllByText('1')
    expect(counter[0]).toBeInTheDocument()
  })
})
