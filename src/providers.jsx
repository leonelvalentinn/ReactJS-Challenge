import { HeroUIProvider, ToastProvider } from '@heroui/react'
import CartProvider from './context/CartContext'
import { Layout } from './layout/layout'

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <HeroUIProvider>
        <ToastProvider />
        <Layout>{children}</Layout>
      </HeroUIProvider>
    </CartProvider>
  )
}
