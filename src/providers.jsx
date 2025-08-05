import {HeroUIProvider} from '@heroui/react'
import { Layout } from './layout'

export const Providers = ({ children }) => {
  return (
    <>
      <HeroUIProvider>
        <Layout>
          {children}
        </Layout>
      </HeroUIProvider>
    </>
  )
}