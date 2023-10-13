import React, { useState, useEffect } from "react";
import styles from "./Image.module.css";
import coffee1 from "../../assets/coffee1.jpg";
import coffee2 from "../../assets/coffee2.jpg";
import coffee3 from "../../assets/coffee3.jpg";

const Image = () => {
  const images = [coffee1, coffee2, coffee3]; // List of image URLs
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRadioChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentIndex(newIndex);
  };
  const autoAdvance = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };
 
  useEffect(() => {
    const intervalId = setInterval(autoAdvance, 3000); 

    return () => clearInterval(intervalId);

     
  }, [currentIndex]);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(
      190deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url(${images[currentIndex]})`,
    backgroundSize: "cover",
  };

  return (
    <div className={styles.imageSlider}>
      <div className={styles.image} style={backgroundImageStyle}>
      <div>{' '} </div>
        <div className={styles.text_container}>
          
        <h2 className={styles.image_text}>Allpresso</h2>
        <p className={styles.quote}>Everyone should believe in something. I believe I will have another coffee.</p>
        </div>
        <div className={styles.radioButtons}>
          {images.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="image-slider"
              value={index}
              checked={index === currentIndex}
              onChange={handleRadioChange}
            />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Image;
