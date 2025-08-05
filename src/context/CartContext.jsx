import { createContext } from 'react'
import useCartProvider from './hooks/useCartProvider'

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const { cart, filter, addToCart, handleSetFilter, editQuantity } = useCartProvider()

  return (
    <CartContext.Provider
      value={{
        cart,
        filter,
        addToCart,
        handleSetFilter,
        editQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
