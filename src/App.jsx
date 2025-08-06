import { ProductList } from './components/ProductList'
import { Providers } from './providers'

export default function App() {
  return (
    <Providers>
      <main>
        <ProductList />
      </main>
    </Providers>
  )
}
