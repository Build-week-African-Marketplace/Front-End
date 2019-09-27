# Front-End

African Marketplace is an app that allows African merchants to upload products for sale and view the prices offered by competitors.

The front-end of this application was built using JavaScript ES6, React.js, Semantic UI, Material UI, Yup, Formik, Context API and axios. Styling was done with CSS, as well as Sass.

Routing is handled in App.js. Private routes were used to manage the dashboard and components available only to logged-in users. The private routing was defined in src/components/PrivateRoute.js such that a user requires a token, received on login, for access.

Components are defined in separate files found in the src/components directory. A product list is displayed in the dashboard, where a user can filter products by category. On the Sell page, a user can view the products they have uploaded to the marketplace, and on the My Ads page, the user can upload a new product.

The header of the app contains a switch that toggles the interface between dark mode and the standard light mode.

## Link to deployed app

https://front-end.bw-african-marketplace.now.sh/

## Axios requests

For more easier access to axios calls was created utility axiosWithAuth which one using token avery request

```
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://africanmarket.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};
```

Next routes was used:
- [ ] GET ==> https://africanmarket.herokuapp.com/api/pricing --- list products with prices

- [ ] GET ==> https://africanmarket.herokuapp.com/api/products/ --- list products with global items (for all users)
- [ ] GET ==> https://africanmarket.herokuapp.com/api/products/:id --- list products with local items (for current user)

- [ ] POST ==> https://africanmarket.herokuapp.com/api/products/add/:id --- list products with local items (for current user)

- [ ] PUT ==> https://africanmarket.herokuapp.com/api/products/update/:id --- update product with id

- [ ] DELETE ==> https://africanmarket.herokuapp.com/api/products/delete/:id --- delete iem with id

## Router

  - [ ] "/" ==> [Login Page]
  - [ ] "/signup" ==> [Signup Form]
  - [ ] "/dashboard" ==> [Dashboard with prices]
  - [ ] "/sell" ==> [Sell list with global and local items]
  - [ ] "/myads" ==> [Add Product Page]

## Context API

Was used to show on /sell page quantity of global items

## DarkMode

Was reached thru custom hooks which location ==> [hooks] folder
