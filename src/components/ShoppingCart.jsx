import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image,
} from '@heroui/react'
import { CartButton } from './CartButton'
import useShoppingCart from '../hooks/useShoppingCart'

export const ShoppingCart = ({ isOpen, onClose }) => {
  const { cart, getProductTotalPrice, getTotal } = useShoppingCart()

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerContent>
        <DrawerHeader className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Carrito de compras</h2>
        </DrawerHeader>
        <DrawerBody>
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex items-center gap-4 mb-4 p-2 border-b border-b-neutral-200'
            >
              <Image
                src={item.image}
                alt={item.title}
                className='w-full h-auto md:max-w-20 md:min-w-20 object-contain aspect-square rounded'
              />
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                  <h3 className='font-medium'>{item.title}</h3>
                  <p className='text-default-500'>
                    ${getProductTotalPrice(item.price, item.quantity)}
                  </p>
                </div>
                <CartButton product={item} />
              </div>
            </div>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <div className='flex justify-between items-center w-full'>
            <span className='text-lg font-semibold'>Total:</span>
            <span className='text-lg font-semibold'>${getTotal}</span>
          </div>
          <Button color='primary' className='w-full'>
            Proceder al pago
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
