import React, {useState,useEffect} from "react";
import styles from "./Items.module.css";
import axios from "axios";

const Items=()=>{
  const [favoriteItems, setFavoriteItems]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:4004/favorite-items")
    .then((res)=>{
      setFavoriteItems(res.data)
    })
  },[])
 return (
    <div className={styles.container}>
      {favoriteItems.map((item,index)=>(
      <div key={`${item.id}-${index}`}>
        <div className={styles.image}>
            <img className={styles.items_img} src={item.photo_url} alt={item.title}/>
        </div>
         <h3 className={styles.details}>{item.title}</h3>
         <h3 className={styles.details}>{item.price}</h3>
      </div>
      ))}
    </div>
 )
}
export default Items;