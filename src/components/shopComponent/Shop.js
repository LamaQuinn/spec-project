// Shop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './displayAllItems';
import styles from './Shop.module.css'
// import Cart from '../cartComponents/Cart';
import { CartProvider } from '../cartComponents/CartContext';

function Shop() {
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState([]);

  const handleStarHover = (starCount) => {
    setRating(starCount);
  };

  useEffect(() => {
    axios
      .get('http://localhost:4004/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    // <CartProvider>
      <div className={styles.main_container}>
        <div className={styles.child_container}>
          {items.map((item, index) => (
            <Display
              key={`${item.id}-${index}`}
              item={item}
              rating={rating}
              handleStarHover={handleStarHover}
            />
          ))}
        </div>
        {/* <Cart /> */}
      </div>
    // </CartProvider>
  );
}

export default Shop;
