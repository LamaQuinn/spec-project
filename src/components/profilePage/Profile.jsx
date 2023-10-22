import React from "react";
import styles from './Profile.module.css'

const Profile = ()=>{
    return (
        <div className={styles.profile}>
            <div className={styles.profile_image}>
                <img src="" alt="" />
            </div>
            <div className={styles.user_name}>
                <h1 className={styles.username}>Username</h1>
                <h2 className={styles.fullname}>Fullname</h2>
            </div>
            <div className={styles.address_details}>
                <p className={styles.shipping}> Shipping Address</p>
            </div>
            <div className={styles.order_history}>
                <p className={styles.history}>Order History</p>
            </div>
        </div>
    )
}

export default Profile;