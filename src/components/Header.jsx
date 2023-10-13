import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../src/assets/logo.png";
import { useContext } from "react";
import AuthContext from "../store/authContext";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <header>
      <img className={styles.logo_img} src={logo} alt="logo" />
      <nav>
        <NavLink to="/" className={styles.btn}>
          {/* <button
            className={styles.btn}
            style={{ textDecoration: "underline" }}
          > */}
            Home
          {/* </button> */}
        </NavLink>
        <NavLink to="/shop" className={styles.btn}>
          {/* <button className={styles.btn}>Shop</button> */}
          Shop
        </NavLink>
        <NavLink to="/about" className={styles.btn}>
          {/* <button className={styles.btn}></button> */}
            About
        </NavLink>
        <NavLink to="/login">
          <button className={styles.btn} id={styles.log_btn}>
            Login
          </button>
        </NavLink>
        <NavLink to="/cart" className={styles.btn}>
          {/* <button className={styles.btn}></button> */}
            Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
