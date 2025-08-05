import useCartContext from '../context/hooks/useCartContext'

export default function useShoppingCart() {
  const { cart } = useCartContext()

  const getProductTotalPrice = (price, quantity) => {
    const total = price * quantity

    return total.toFixed(2)
  }

  const getTotal = (cart) => {
    let total = 0

    cart.map((item) => (total += item.price * item.quantity))

    return total.toFixed(2)
  }

  return {
    cart,
    getProductTotalPrice,
    getTotal,
  }
}
