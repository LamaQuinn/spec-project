// Shop.js
import React, { useState, useEffect } from 'react';
import styles from './Shop.module.css';
import axios from 'axios';
import Display from './displayAllItems';

function Shop() {
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState([]);

  const handleStarHover = (starCount) => {
    setRating(starCount);
  };

  useEffect(() => {
    axios.get("http://localhost:4004/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
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
    </div>
  );
}

export default Shop;
