import "./App.css";
import Landing from "./Pages/Landing/landing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Products from "./Pages/Products/products";
import ProductDetail from "./Pages/Products/Detail";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="*" element={<ErrorPage />} />
      <Route path="" element={<Landing />} />
      <Route path="products" element={<Products />} />
      <Route path="products/detail/:id" element={<ProductDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
