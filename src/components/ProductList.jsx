import { ProductItem } from './ProductItem'
import { ItemSkeleton } from './ItemSkeleton'
import useProductList from '../hooks/useProductList'

export const ProductList = () => {
  const { isLoading, filteredProducts, filter } = useProductList()

  return (
    <section className='w-full flex justify-center items-center py-10'>
      <ul className='w-full max-w-6xl grid gap-6 px-4 place-content-center md:grid-cols-2 lg:grid-cols-4'>
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => <ItemSkeleton key={i} />)
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p className='w-full md:col-span-2 lg:col-span-4 text-center font-semibold text-2xl'>
            No hay resultados para la búsqueda de: <span className='text-blue-600'>{filter}</span>
          </p>
        )}
      </ul>
    </section>
  )
}
