import { createContext } from 'react'
import useCartProvider from './hooks/useCartProvider'

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const { cart, filter, addToCart, handleSetFilter, editQuantity, getTotal, getTotalItems } =
    useCartProvider()

  return (
    <CartContext.Provider
      value={{
        cart,
        filter,
        addToCart,
        handleSetFilter,
        editQuantity,
        getTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
