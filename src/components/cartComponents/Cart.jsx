import React, { useContext } from 'react';
import styles from './Cart.module.css';
import CartContext from './CartContext';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCartItems = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = cart.reduce((acc, cartItem) => {
    const priceWithDollarSign = cartItem.price;
    const priceWithoutDollarSign = priceWithDollarSign.slice(0, -1); 
    const price = parseFloat(priceWithoutDollarSign);
    
    return acc + cartItem.quantity * price;
  }, 0);
  
  return (
    <div className={styles.cart_container}>
      <div className={styles.shopping_cart}>
        <div className={styles.heading}>
          <h3 className={styles.shop_name}>Shopping Cart</h3>
          <h5 className={styles.delete_all} onClick={clearCartItems}>
            Remove all
          </h5>
        </div>
        {cart.length === 0 ? (
          <p className={styles.empty_cart_message}>Your cart is empty.</p>
        ) : (
          cart.map((cartItem, index) => (
            <div key={`${cartItem.id}-${index}`} className={styles.image_box}>
              <img src={cartItem.photo_url} alt={cartItem.title} />
              <div className={styles.item_details}>
                <h3 className={styles.name}>{cartItem.title}</h3>
                <p className={styles.quantity}>{`x${cartItem.quantity}`}</p>
                <button
                  className={styles.remove_item}
                  onClick={() => handleRemoveItem(cartItem.id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className={styles.total}>
            Total Price: ${total.toFixed(2)}
          </div>
        )}
        <button className={styles.submit_order}>Submit Order</button>
      </div>
    </div>
  );
};

export default Cart;
