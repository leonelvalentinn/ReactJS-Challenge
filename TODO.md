
/**
 * *Step 1:*
 * - Render a list of products from the given *API endpoint*.
 * - Create **<Header />**, **<ProductList />** and **<ProductItem />** components.
 * - Each *ProductItem* must render:
 *    - **title**
 *    - **price**
 *    - **image**
 *    - A button to **Add to Cart**
 */


/**
 * *Step 2:*
 * - Implement a **global state** using React Context (or Zustand).
 * - The global state must include:
 *    - `cart` (array of products)
 *    - `addToCart(product)` function
 *    - `filter` (string for filtering by title) (Optional)
 *    - `setFilter(text)` function (Optional)
 */

/**
 * *Step 3:*
 * - Add an *input* in **Header** to filter products by title.
 * - Show in **Header** a cart icon or text showing total items in the cart.
 * - Update the list dynamically when the filter changes.
 */

/**
 * *Step 4:*
 * - When clicking 'Add to Cart' in a product, increase the cart count.
 * - Ensure the cart state is globally available across all components.
 */

/**
 * *Extras (Optional):*
 * - Persist the cart in localStorage.
 * - Add a 'Remove from cart' option.
 * - Optimize performance with React.memo or useMemo.
 * - Add basic tests (React Testing Library) for filter and addToCart.
 */

/**
 * *Tips:*
 * - You can use axios or native fetch.
 * - You can use react hooks (useState, useContext, useReducer).
 * - For Zustand: install zustand (`npm install zustand`).
 * - Use any styling approach (CSS, Tailwind, styled-components).
 */

/**
 * *API Endpoint:*
 * https://fakestoreapi.com/products
 */
