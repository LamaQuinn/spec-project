import React from "react";
import styles from "./Cart.module.css";
import mugs from "../../assets/mugs.jpg";
const Cart = () => {
  return (
      <div className={styles.cart_container}>
      <div className={styles.shopping_cart}>
        <div className={styles.heading}>
          <h3 className={styles.shop_name}>Shopping Cart</h3>
          <h5 className={styles.delete_all}>Remove all</h5>
        </div>
        <div className={styles.image_box}>
          <img src={mugs} alt="" />
          <div className={styles.item_details}>
            <h3 className={styles.name}>Mugs</h3>
            <p className={styles.quantity}>x1</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.plus}>+</button>
          <p className={styles.quan}>0</p>
          <button className={styles.minus}>-</button>
        </div>
        <div className={styles.total}>
          <p className={styles.amount}>Total Amount:11.00$</p>
        </div>
        <button className={styles.submit_order}>Submit Order</button>
      </div>
      </div>
  );
};

export default Cart;
