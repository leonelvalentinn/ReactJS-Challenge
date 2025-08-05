import { Card, CardBody, CardFooter, Image } from '@heroui/react'
import { CartButton } from './CartButton'

export const ProductItem = ({ product }) => {
  return (
    <Card shadow='sm' as='li' className='bg-neutral-100'>
      <CardBody className='overflow-visible p-0'>
        <Image
          alt={product.title}
          className='w-full object-contain h-auto bg-white aspect-square'
          radius='lg'
          shadow='sm'
          src={product.image}
          width='100%'
        />
      </CardBody>
      <CardFooter className='text-small justify-start items-start flex-col gap-4'>
        <b>{product.title}</b>
        <div className='w-full flex items-center justify-between'>
          <p className='text-default-700 text-lg text-nowrap'>$ {product.price}</p>
          <CartButton product={product} />
        </div>
      </CardFooter>
    </Card>
  )
}
