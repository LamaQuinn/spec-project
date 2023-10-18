import React from "react";
import styles from './Home.module.css'
import Images from "./ImageSlides";
import Items from "../favoriteItems/itemsCard";

const Home=()=>{
    return(
        <>
        <Images/>
        <Items />
        </>
       
    )
}
export default Home;