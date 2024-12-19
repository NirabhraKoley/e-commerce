import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/layout/AppLayout";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { useState } from "react";
import { Order } from "./pages/Order";
import { FilterData } from "./pages/FilterData";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  const [order, setOrder] = useState({});
  // const [search, setSearch] = useState('')
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout setOrder={setOrder} />,
        },
        {
          path: "/order-confirmation",
          element: <Order order={order} />,
        },
        {
          path: "/filter-data",
          element: <FilterData />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
