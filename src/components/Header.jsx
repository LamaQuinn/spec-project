import React from "react";
import { NavLink } from "react-router-dom";
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
        {state.token ? (
          <>
            <NavLink to="/" className={`${styles.btn} ${window.location.pathname === '/' ? styles.underline : ''}`}>
              Home
            </NavLink>
            <NavLink to="/shop" className={`${styles.btn} ${styles.activeLink}`}>
              Shop
            </NavLink>
            <NavLink to="/about" className={`${styles.btn} ${styles.activeLink}`}>
              About
            </NavLink>
            <NavLink to="/cart" className={`${styles.btn} ${styles.activeLink}`}>
              Cart
            </NavLink>
            <button className={styles.btn} id={styles.log_btn} onClick={() => dispatch({type: 'LOGOUT'})}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/" className={`${styles.btn} ${window.location.pathname === '/' ? styles.underline : ''}`}>
              Home
            </NavLink>
            <NavLink to="/shop" className={`${styles.btn} ${styles.activeLink}`}>
              Shop
            </NavLink>
            <NavLink to="/about" className={`${styles.btn} ${styles.activeLink}`}>
              About
            </NavLink>
            <NavLink to="/login">
              <button className={styles.btn} id={styles.log_btn}>
                Login
              </button>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
