import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Product from "../pages/Product";
import Search from "../pages/Search";
import Error from "../pages/Error";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop/:category?", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:id", element: <Product /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <Error /> },
    ],
  },
];
