import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'
import useCartContext from '../context/hooks/useCartContext'

export default function useProductList() {
  const { filter } = useCartContext()
  const products = useRef([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(async (response) => {
          if (!response.ok) {
            const text = await response.text()
            throw new Error(text)
          } else return response.json()
        })
        .then((data) => {
          products.current = data
          setFilteredProducts(data)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => setIsLoading(false))
    }

    getProducts()
  }, [])

  const filterProducts = (query) => {
    if (query === '') {
      setFilteredProducts(products.current)
    } else {
      setFilteredProducts((prev) =>
        prev.filter((item) => item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      )
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const debounceFilterProducts = useCallback(
    debounce((query) => {
      filterProducts(query)
    }, 200),
    []
  )

  useEffect(() => {
    debounceFilterProducts(filter)
  }, [filter])

  return {
    filteredProducts,
    isLoading,
    filter,
  }
}
