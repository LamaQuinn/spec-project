import React, { useState, useEffect } from "react";
import styles from "./Items.module.css";
import renderItems from "./displayItems";
import axios from "axios";

const Items = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [position, setPosition] = useState(0);
  const itemsPerPage = 3; // Number of items to show per page

  useEffect(() => {
    axios.get("http://localhost:4004/favorite-items").then((res) => {
      console.log(res.data);
      setFavoriteItems(res.data);
    });
  }, []);

  const handlePrevious = () => {
    setPosition(Math.max(position - itemsPerPage, 0));
  };

  const handleNext = () => {
    setPosition(Math.min(position + itemsPerPage, favoriteItems.length - itemsPerPage));
  };

  return (
    <div>
      <h1 className={styles.sectionTitle}>Our Best Selling Favorites</h1>
      <div className={styles.container}>
        {favoriteItems
          .slice(position, position + itemsPerPage)
          .map((item, index) => renderItems(item, index))}
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrevious} disabled={position === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={position >= favoriteItems.length - itemsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Items;
