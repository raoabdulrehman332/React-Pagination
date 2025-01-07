import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Header from './Compunents/Header'
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Compunents/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Pages/AboutUs" element={<AboutUs />} />
      <Route path="/Pages/ContactUs" element={<ContactUs />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
