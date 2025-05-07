import React from 'react';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">BuyBasket</a>
        
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="cart-icon">
          <span className="cart-count">{cartItems}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 