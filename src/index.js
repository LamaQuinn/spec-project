import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {AuthContextProvider} from './store/authContext';
import { CartProvider } from './components/cartComponents/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <AuthContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
    </CartProvider>
  </React.StrictMode>
);



