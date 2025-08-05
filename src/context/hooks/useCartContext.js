import { useContext } from 'react'
import { CartContext } from '../CartContext'

export default function useCartContext() {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('CartContext se debe de utilizar dentro del CartProvider')
  }

  return cartContext
}
