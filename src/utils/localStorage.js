export const saveCart = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
  try {
    const localCartItem = window.localStorage.getItem('cart')
    return localCartItem ? JSON.parse(localCartItem) : []
  } catch (e) {
    console.error('Error al parsear el carrito de localStorage:', e)
    return []
  }
}
