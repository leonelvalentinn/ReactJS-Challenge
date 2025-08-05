import { HeroUIProvider } from '@heroui/react'
import CartProvider from './context/CartContext'
import { Layout } from './layout/layout'

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <HeroUIProvider>
        <Layout>{children}</Layout>
      </HeroUIProvider>
    </CartProvider>
  )
}
