import React from 'react'
import styles from './About.module.css'
const About=()=>{
  return(
    <div className={styles.about_container}>
       <div className={styles.about_info}>
          <h1 className={styles.about_name}>Allpresso</h1>
          <p className={styles.about_text}>At Allpresso, we're passionate about more than just coffee – we're dedicated to crafting the perfect cup of joy, one brew at a time. Located in the heart of Los Angeles, our cozy coffee haven has been serving up smiles and rich, aromatic blends for over a decade.</p>
       </div>
    </div>
  )
}

export default About