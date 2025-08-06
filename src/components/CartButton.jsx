import { Button, ButtonGroup } from '@heroui/react'
import { CartIcon, MinusIcon, PlusIcon, TrashIcon } from './icons/Icons'
import useCartButton from '../hooks/useCartButton'
import React from 'react'

export const CartButton = React.memo(({ product }) => {
  const { addToCart, editQuantity, getQuantity } = useCartButton(product)

  return (
    <>
      {getQuantity() === 0 ? (
        <Button
          type='button'
          isIconOnly
          color='primary'
          onPress={() => addToCart(product)}
          aria-label={`Agregar ${product.title} al carrito`}
        >
          <CartIcon className='w-4 h-4' />
        </Button>
      ) : (
        <div className='flex items-center gap-2'>
          <ButtonGroup>
            <Button
              isIconOnly
              variant='flat'
              onPress={() => editQuantity(product.id, -1)}
              aria-label={`Eliminar una unidad de ${product.title}`}
            >
              <MinusIcon className='w-4 h-4' />
            </Button>
            <span className='px-4 text-black'>{getQuantity()}</span>
            <Button
              isIconOnly
              variant='flat'
              onPress={() => editQuantity(product.id, 1)}
              aria-label={`Agregar una unidad de ${product.title}`}
            >
              <PlusIcon className='w-4 h-4' />
            </Button>
          </ButtonGroup>
          <Button
            onPress={() => editQuantity(product.id, 0)}
            isIconOnly
            color='danger'
            variant='light'
            aria-label={`Eliminar ${product.title} del carrito`}
          >
            <TrashIcon className='w-4 h-4' />
          </Button>
        </div>
      )}
    </>
  )
})

CartButton.displayName = 'CartButton'
