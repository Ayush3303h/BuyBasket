import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  const formatPrice = (price) => {
    return (price * 83).toFixed(2);
  };
  
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          loading="lazy"
        />
        {product.stock < 5 && (
          <span className="low-stock-badge">
            Only {product.stock} left!
          </span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <div className="stars" style={{ '--rating': product.rating }}></div>
          <span className="rating-value">{product.rating.toFixed(1)}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-price-container">
          <span className="product-price">₹{formatPrice(product.price)}</span>
          <button 
            className={`add-to-cart-button ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;