import './App.css';
import { useContext } from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/homePageComponents/HomePage';
import Auth from './components/authPage/Auth';
import Cart from './components/cartComponents/Cart';
import About from './components/aboutComponent/About';
import Shop from './components/shopComponent/Shop';
import Profile from './components/profilePage/Profile';

import AuthContext from './store/authContext';

function App() {
  const {state}=useContext(AuthContext)
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={!state.token ? <Auth/>:<Navigate to='/'/>}/>
          <Route path='/cart' element={state.token ? <Cart/>:<Navigate to='/'/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
 
      <Footer/>
    </div>
  );
}

export default App;
