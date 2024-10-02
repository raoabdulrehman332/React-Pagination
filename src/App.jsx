import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Header from './Compunents/Header'
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Compunents/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
