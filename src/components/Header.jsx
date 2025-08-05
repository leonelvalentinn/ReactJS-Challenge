import { Badge, Button, Input, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import { CartIcon, SearchIcon } from './icons/Icons'
import { ShoppingCart } from './ShoppingCart'
import useHeader from '../hooks/useHeader'

export const Header = () => {
  const {
    filter,
    isOpenShoppingCart,
    handleSetFilter,
    getTotalItems,
    closeShoppingCart,
    openShoppingCart,
  } = useHeader()

  return (
    <>
      <Navbar isBordered className='py-1'>
        <NavbarContent justify='start'>
          <NavbarBrand className='mr-4 md:max-w-54'>
            <img src='/logo.png' alt='Logo del comercio' className='w-full' />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as='div' className='items-center' justify='end'>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-48 h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder='Escribe para buscar...'
            size='sm'
            startContent={<SearchIcon className='w-4 h-4' />}
            type='search'
            value={filter}
            onChange={(e) => handleSetFilter(e.target.value)}
          />

          <Badge color='primary' content={getTotalItems} isInvisible={getTotalItems === 0}>
            <Button
              isIconOnly
              aria-label='Ver el carrito'
              color='primary'
              variant='bordered'
              onPress={openShoppingCart}
            >
              <CartIcon className='w-5 h-5' />
            </Button>
          </Badge>
        </NavbarContent>
      </Navbar>

      <ShoppingCart isOpen={isOpenShoppingCart} onClose={closeShoppingCart} />
    </>
  )
}
