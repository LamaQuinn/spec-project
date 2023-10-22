import React from 'react';
import styles from './Shop.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';

const Display=({ item, rating, handleStarHover })=> {
  const {state,dispatch}=useContext(AuthContext);
    
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
              className={`${styles.star} ${star <= rating ? styles.star_filled : ''}`}
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
        <button className={styles.add}>+</button>
        <h2>0</h2>
        <button className={styles.minus}>-</button>
      </div>
      <button className={styles.add_card}>Add to Cart</button>
    </div>
  );
}

export default Display;