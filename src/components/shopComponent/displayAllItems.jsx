// Display.js
import React, { useState,useContext } from 'react';
import styles from './Shop.module.css'
import CartContext from '../cartComponents/CartContext';

const Display = ({ item, rating, handleStarHover }) => {
  const [quantity, setQuantity] = useState(0);
  const { dispatch } = useContext(CartContext);

 

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity <1) {
    
      alert('Please select a quantity before adding to the cart');
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...item, quantity },
      });
      setQuantity(0);
  
      // Show an alert when items are added to the cart
      alert('Item(s) added to the cart');
    }
  };

  return (
    <div className={styles.item_image}>
      <img src={item.photo_url} alt={item.title} />
      <div className={styles.details}>
        <h3 className={styles.item_name}>{item.title}</h3>
        <h3 className={styles.item_price}>{item.price}</h3>
      </div>
      <div className={styles.rating}>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'star_filled' : ''}`}
              onMouseEnter={() => handleStarHover(star)}
              onMouseLeave={() => handleStarHover(0)}
            >
              ★
            </span>
          ))}
        </div>
        <p className={styles.reviews}>0 reviews</p>
      </div>

      <div className={styles.count}>
        <button className={styles.add} onClick={handleIncrement}>
          +
        </button>
        <h2>{quantity}</h2>
        <button className={styles.minus} onClick={handleDecrement}>
          -
        </button>
      </div>
      <button
        className={styles.add_card}
        onClick={addToCart}
        // disabled={quantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Display;
