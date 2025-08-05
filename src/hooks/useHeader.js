import { useState } from 'react'
import useCartContext from '../context/hooks/useCartContext'

export default function useHeader() {
  const { handleSetFilter, filter, cart } = useCartContext()
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false)

  const closeShoppingCart = () => {
    setIsOpenShoppingCart(false)
  }

  const openShoppingCart = () => {
    setIsOpenShoppingCart(true)
  }

  const getTotalItems = (cart) => {
    let totalItems = 0

    cart.map((item) => (totalItems += item.quantity))

    return totalItems
  }

  return {
    handleSetFilter,
    filter,
    cart,
    isOpenShoppingCart,
    closeShoppingCart,
    getTotalItems,
    openShoppingCart,
  }
}
