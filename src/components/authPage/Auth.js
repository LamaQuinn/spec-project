import styles from "./Auth.module.css";
import React,{useState,useContext} from "react";
import axios from "axios";
import AuthContext from "../../store/authContext";

const Auth = () => {
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [register,setRegister]=useState(true)
const {dispatch}=useContext(AuthContext
  )
const submitHandler=(e)=>{
  e.preventDefault();
  const body={
    username,
    password
  }
  axios.post(register ? '/register' : 'login',body)
       .then((res)=>{
        dispatch({type:'LOGIN',payload:res.data})
       })
       .catch((error)=>{
        console.log(error)
       })
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.form_box}>
        <h2 style={{fontFamily:'Gruppo',}}>Login</h2>
        <form className={styles.auth_form} onSubmit={submitHandler}>
          <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="person"></ion-icon></span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className={styles.login_btn} style={{fontFamily:'Gruppo',fontSize:'15px'}} onClick={()=>setRegister(!register)}>{register ? "Login" : "Register"}</button>
          <h2 style={{fontFamily:'Gruppo',fontSize:'15px'}}>Don't have an account? <button className={styles.register_btn}>{register ? "Register" : "Login"}</button></h2>
          
        </form>
      </div>
      
    </div>
  );
};

export default Auth;
