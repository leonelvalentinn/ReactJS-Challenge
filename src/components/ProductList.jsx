import { ProductItem } from './ProductItem'

export const ProductList = () => {
  return (
    <section className='w-full flex justify-center items-center py-10'>
      <div className='w-full max-w-6xl grid gap-6 px-4 place-content-center'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  )
}