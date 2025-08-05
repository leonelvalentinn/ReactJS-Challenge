import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const localCartItem = window.localStorage.getItem('cart')
    if (localCartItem) {
      setCart(JSON.parse(localCartItem))
      setIsInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (isInitialized) {
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, isInitialized])

  return {
    cart,
    filter,
    addToCart,
    editQuantity,
    handleSetFilter,
  }
}
