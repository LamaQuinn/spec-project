import React from "react";
import styles from './Items.module.css'

function renderItems(item, index) {
  return (
    <React.Fragment key={`${item.id}-${index}`}>
        <div className={styles.container1}>
      <div className={styles.image}>
        <img className={styles.items_img} src={item.photo_url} alt={item.title} />
      </div>
      <h3 className={styles.details}>{item.title}</h3>
      <h3 className={styles.details}>{item.price}</h3>
      </div>
    </React.Fragment>
  );
}

export default renderItems;
