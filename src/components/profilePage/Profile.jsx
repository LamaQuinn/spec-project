import React, { useState, useEffect, useContext } from "react";
import styles from "./Profile.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";

const Profile = ({ username }) => {
  const { state } = useContext(AuthContext);
  const [firstLetter, setFirstLetter] = useState("");
  const [orderHistory, setOrderHistory] = useState([]);
  const fetchOrderHistory = async () => {
    const user_id = state.userId; // Replace with the actual user ID

    try {
      const response = await axios.get(`/orders/history/${user_id}`);

      if (response.status === 200) {
        const orders = response.data;
        setOrderHistory(orders);
      } else {
        // Handle any errors here
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (state.username) {
      let first = state.username.split("")[0];
      setFirstLetter(first);
    }
    fetchOrderHistory();
  }, [state.username]);
  console.log(orderHistory);
  return (
    <div className={styles.profile}>
      <div className={styles.profile_image}>
        {firstLetter && (
          <div className={styles.profile_letter}>{firstLetter}</div>
        )}
      </div>
      <div className={styles.user_name}>
        <h1 className={styles.username}>{state.username}</h1>
      </div>
      <div className={styles.order_history}>
        <p className={styles.history}>Order History:</p>
        <ul className={styles.order_list}>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Order ID: {order.id}</h3>
              <span>Date: {new Date(order.date).toLocaleDateString()}</span>
              <span>Title: {order.item.title}</span>
              <img src={order.item.photo_url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
