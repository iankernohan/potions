import { createBrowserRouter } from "../../node_modules/react-router-dom/dist/index";
import App from "../App";
import AppLayout from "../components/AppLayout";
import CartPage from "../components/CartPage/CartPage";
import ProductInfoPage from "../components/ProductInfoPage/ProductInfoPage";
import ProductsPage from "../components/ProductPage/ProductsPage";
import UnderConstruction from "../components/UI/UnderConstruction";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/potion/:id",
        element: <ProductInfoPage />,
      },
      {
        path: "/about",
        element: <UnderConstruction />,
      },
      {
        path: "/contact",
        element: <UnderConstruction />,
      },
    ],
  },
]);

export default router;
