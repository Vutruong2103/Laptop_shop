import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Layout from "../layout";
import Product from "../pages/products";
import ProductDetail from "../pages/detail";
import Payment from "../pages/payment";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthLayout from "../components/auth-layout";
import Profile from "../pages/profile";

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
      {
        path: '/profile',
        element: <Profile/>
      }
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    )
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    )
  },
]);
