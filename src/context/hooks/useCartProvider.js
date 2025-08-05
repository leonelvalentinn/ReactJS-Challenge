import { useEffect, useMemo, useState } from 'react'
import { getCart, saveCart } from '../../utils/localStorage'

export default function useCartProvider() {
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('')
  const [isInitialized, setIsInitialized] = useState(false)

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }])
  }

  const editQuantity = (id, quantity) => {
    const productSelected = cart.find((item) => item.id === id)

    if (!productSelected) return

    if (quantity === 0 || productSelected.quantity + quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      )
    }
  }

  const handleSetFilter = (query) => {
    setFilter(query)
  }

  const getTotalItems = useMemo(() => {
    const totalItems = cart.reduce((total, item) => (total += item.quantity), 0)
    return totalItems
  }, [cart])

  const getTotal = useMemo(() => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    return total
  }, [cart])

  useEffect(() => {
    const localCart = getCart()
    setCart(localCart)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      saveCart(cart)
    }
  }, [cart, isInitialized])

  return {
    cart,
    filter,
    addToCart,
    editQuantity,
    handleSetFilter,
    getTotalItems,
    getTotal,
  }
}
