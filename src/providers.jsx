import { HeroUIProvider } from '@heroui/react'
import { Layout } from './layout'
import CartProvider from './context/CartContext'

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <HeroUIProvider>
        <Layout>{children}</Layout>
      </HeroUIProvider>
    </CartProvider>
  )
}
