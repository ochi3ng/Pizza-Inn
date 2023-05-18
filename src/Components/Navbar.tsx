import * as React from 'react';
import Logo from "../assets/ximi.png"
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'


const Navbar= () =>{
  return(
   <div className='navbar'>
    <div className='navbar-content'>
    <img src={Logo} alt='' className='logo' />
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/staff'>Our staff</Link>
        <Link to='/product'>Our Products</Link>
        <div>
          <img className='logo-basket' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgaoIL8olHQQgghKVD5jAGvhLYm9nJijOUKPbN8Dmt-KbKnzaikV-P3_BmeOGG4QKTlg&usqp=CAU' alt='' />
          <h1 className='number'>0</h1>
        </div>
    </div>
   </div> 
  )
};

export default Navbar;
