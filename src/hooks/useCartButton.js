import useCartContext from '../context/hooks/useCartContext'

export default function useCartButton(product) {
  const { cart, addToCart, editQuantity } = useCartContext()

  const getQuantity = () => {
    const productInCart = cart.find((item) => item.id === product.id)

    if (productInCart) {
      return productInCart.quantity
    }

    return 0
  }

  return {
    addToCart,
    editQuantity,
    getQuantity,
  }
}
