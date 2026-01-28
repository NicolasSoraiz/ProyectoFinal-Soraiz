import ItemsListContainer from "./components/ItemsListContainer";
import NavbarContainer from "./components/NavbarContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import CartContainer from "./components/CartContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";
import Toast from "./components/Toast";

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Toast />

      <Routes>
        <Route 
          path="/"
          element={<ItemsListContainer greeting="¡Bienvenido a Digital Market" />} 
        />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/category/:category" element={<ItemsListContainer />} />
        <Route path="/Product/:id" element={<ProductDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App