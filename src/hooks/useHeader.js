import { useState } from 'react'
import useCartContext from '../context/hooks/useCartContext'

export default function useHeader() {
  const { handleSetFilter, filter, cart, getTotalItems } = useCartContext()
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false)

  const closeShoppingCart = () => {
    setIsOpenShoppingCart(false)
  }

  const openShoppingCart = () => {
    setIsOpenShoppingCart(true)
  }

  return {
    handleSetFilter,
    filter,
    cart,
    isOpenShoppingCart,
    closeShoppingCart,
    openShoppingCart,
    getTotalItems,
  }
}
