import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('Filtrar productos por título', () => {
  it('Filtra los productos por su título', async () => {
    render(<App />)

    const input = screen.getByPlaceholderText(/Escribe para buscar.../i)
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'fjallraven' } })

    const item = await screen.findByText(/fjallraven/i)
    expect(item).toBeInTheDocument()
  })
})
