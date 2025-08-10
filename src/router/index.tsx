import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Layout from "../layout";
import Product from "../pages/products";
import ProductDetail from "../pages/detail";
import Payment from "../pages/payment";
import Cart from "../pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/payment/:productId",
        element: <Payment />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },  
    ],

  },
]);
