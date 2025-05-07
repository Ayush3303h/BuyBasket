import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 4999,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 12999,
    description: "Advanced smartwatch with health monitoring features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Professional DSLR Camera",
    price: 54999,
    description: "24MP DSLR camera with 4K video recording",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    price: 2499,
    description: "Ergonomic wireless gaming mouse with RGB lighting",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: 5999,
    description: "RGB mechanical keyboard with customizable keys",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 1999,
    description: "Waterproof portable speaker with 20-hour battery life",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
  }
]

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ))
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="App">
      <Navbar cartItems={getTotalItems()} />
      <Hero />
      
      <main className="app-main">
        <section className="products-section" id="products">
          <h2>Our Products</h2>
          <div className="products-grid">
            {sampleProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section">
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
