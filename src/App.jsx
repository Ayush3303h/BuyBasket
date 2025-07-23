import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage';
<<<<<<< HEAD
import LoginPage from './pages/LoginPage';
=======
>>>>>>> 6b05b5e0dcf7a35cc639e61ebeae39850723cc81
import { useCart } from './context/CartContext';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { loadCartFromStorage } = useCart();
  
  useEffect(() => {
    // Simulate initial loading
    loadCartFromStorage();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [loadCartFromStorage]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<OrderConfirmationPage />} />
<<<<<<< HEAD
          <Route path="/login" element={<LoginPage />} />
=======
>>>>>>> 6b05b5e0dcf7a35cc639e61ebeae39850723cc81
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;