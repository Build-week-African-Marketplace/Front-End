# Front-End
African Marketplace is an app that allows African merchants to upload products for sale and view the prices offered by competitors.

The front-end of this application was built using JavaScript ES6, React.js, Semantic UI, Material UI, Yup, Formik, and axios. Styling was done with CSS, as well as Sass.

Routing is handled in App.js. Private routes were used to manage the dashboard and components available only to logged-in users. The private routing was defined in src/components/PrivateRoute.js such that a user requires a token, received on login, for access.

Components are defined in separate files found in the src/components directory. A product list is displayed in the dashboard, where a user can filter products by category. On the Sell page, a user can view the products they have uploaded to the marketplace, and on the My Ads page, the user can upload a new product.

The header of the app contains a switch that toggles the interface between dark mode and the standard light mode.
