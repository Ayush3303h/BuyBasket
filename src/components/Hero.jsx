import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to BuyBasket</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">Shop Now</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 