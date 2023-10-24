import React, { createContext, useReducer, useContext } from 'react';

 const CartContext = createContext();

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingCartItemIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
       
        return [...state, action.payload];
      }

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

// export const addToCarts = (dispatch, item) => {
//   dispatch({ type: ADD_TO_CART, payload: item });
// };

// export const removeFromCart = (dispatch, itemId) => {
//   dispatch({ type: REMOVE_FROM_CART, payload: itemId });
// };

// export const clearCart = (dispatch) => {
//   dispatch({ type: CLEAR_CART });
// };

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = () => {
//   return useContext(CartContext);
// };
export default CartContext;