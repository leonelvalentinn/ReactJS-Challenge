import { Input, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import { SearchIcon } from '../assets/Icons'

export const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify='start'>
        <NavbarBrand className='mr-4'>
          <img src='/logo.png' alt='Logo del comercio' />
          <p className='hidden sm:block font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<SearchIcon className='w-4 h-4' />}
          type='search'
        />
      </NavbarContent>
    </Navbar>
  )
}
