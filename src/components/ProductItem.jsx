import { Button, Card, CardFooter, CardHeader, Image } from '@heroui/react'
import { CartIcon } from '../assets/Icons'

export const ProductItem = () => {
  return (
    <Card isFooterBlurred className='w-full col-span-12 sm:col-span-5'>
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
        <h4 className='text-black font-medium text-2xl'>Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card example background'
        className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
        src='https://heroui.com/images/card-example-6.jpeg'
      />
      <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
        <div>
          <p className='text-black'>$ 5.50</p>
        </div>
        <Button className='text-tiny' color='primary' radius='full' size='sm'>
          <CartIcon className='w-4 h-4' />
        </Button>
      </CardFooter>
    </Card>
  )
}