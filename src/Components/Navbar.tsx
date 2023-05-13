import * as React from 'react';
import Logo from "../assets/pizalogo.png"
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
    </div>
   </div> 
  )
};

export default Navbar;
