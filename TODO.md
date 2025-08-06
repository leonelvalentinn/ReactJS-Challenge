/\*\*

- _Step 1:_
- - Render a list of products from the given _API endpoint_.
- ✅ Create **<Header />**, **<ProductList />** and **<ProductItem />** components.
- ✅ Each _ProductItem_ must render:
- ✅ **title**
- ✅ **price**
- ✅ **image**
- ✅ A button to **Add to Cart**
  \*/

/\*\*

- _Step 2:_
- ✅ Implement a **global state** using React Context (or Zustand).
- ✅ The global state must include:
- ✅ `cart` (array of products)
- ✅ `addToCart(product)` function
- ✅ `filter` (string for filtering by title) (Optional)
- ✅ `setFilter(text)` function (Optional)
  \*/

/\*\*

- _Step 3:_
- ✅ Add an _input_ in **Header** to filter products by title.
- ✅ Show in **Header** a cart icon or text showing total items in the cart.
- ✅ Update the list dynamically when the filter changes.
  \*/

/\*\*

- _Step 4:_
- ✅ When clicking 'Add to Cart' in a product, increase the cart count.
- ✅ Ensure the cart state is globally available across all components.
  \*/

/\*\*

- _Extras (Optional):_
- ✅ Persist the cart in localStorage.
- ✅ Add a 'Remove from cart' option.
- ✅ Optimize performance with React.memo or useMemo.
- ✅ Add basic tests (React Testing Library) for filter and addToCart.
  \*/

/\*\*

- _Tips:_
- - You can use axios or native fetch.
- - You can use react hooks (useState, useContext, useReducer).
- - For Zustand: install zustand (`npm install zustand`).
- - Use any styling approach (CSS, Tailwind, styled-components).
    \*/

/\*\*

- _API Endpoint:_
- https://fakestoreapi.com/products
  \*/
