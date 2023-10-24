import React, { useState, useEffect,useContext } from "react";
import styles from './Profile.module.css'
import AuthContext from "../../store/authContext";

const Profile = ({ username }) => {
    const {state}=useContext(AuthContext)
    const [firstLetter, setFirstLetter] = useState('');
    useEffect(() => {
        if (state.username) {
            let first=state.username.split('')[0]
            setFirstLetter(first);
        }
    }, [username]);

    return (
        <div className={styles.profile}>
            <div className={styles.profile_image}>
                
                {firstLetter && <div className={styles.profile_letter}>{firstLetter}</div>}
            </div>
            <div className={styles.user_name}>
                <h1 className={styles.username}>{state.username}</h1>
            </div>
            <div className={styles.order_history}>
                <p className={styles.history}>Order History:</p>
            </div>
        </div>
    )
}

export default Profile;
