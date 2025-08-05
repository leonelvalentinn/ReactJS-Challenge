import useCartContext from '../context/hooks/useCartContext'

export default function useShoppingCart() {
  const { cart, getTotal } = useCartContext()

  const getProductTotalPrice = (price, quantity) => {
    const total = price * quantity

    return total.toFixed(2)
  }

  return {
    cart,
    getProductTotalPrice,
    getTotal,
  }
}
