import React from "react";
import styles from "./Cart.module.css";
import mugs from "../../assets/mugs.jpg";
const Cart = () => {
  return (
    <body className={styles.cart_body}>
      <div className={styles.shopping_cart}>
        <div className={styles.heading}>
          <h3 className={styles.shop_name}>Shopping Cart</h3>
          <h5 className={styles.delete_all}>Remove all</h5>
        </div>

        <div className={styles.cart_items}>
          <div className={styles.image_box}>
            <img src={mugs} alt="" style={{ height: "90px", width:'100px' }} />
          <div className={styles.about_item}>
            <h1 className={styles.item_name}>Mugs</h1>
          </div>
          </div>

          <div className={styles.counter}>
            <div className={styles.change_btn}>+</div>
            <div className={styles.count}>1</div>
            <div className={styles.change_btn}>-</div>

          </div>
          <div className={styles.price}></div>
        </div>
      </div>
    </body>
  );
};

export default Cart;
