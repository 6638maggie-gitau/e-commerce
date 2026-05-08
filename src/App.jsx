import React from 'react'
import { BrowserRouter ,  Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { CartProvider } from './Context/CartContext'

const App = () => {
  return (
    <CartProvider>
     <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </CartProvider>
  )
}

export default App