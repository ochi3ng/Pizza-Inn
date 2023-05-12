import * as React from 'react';
import Body from './Body';

interface INavbarProps {
}

const Navbar= () => {
  return(
   <div >
    <div className='navbar'>
    <div>About Us</div>
    <div>Our Products</div>
    <div>Our staff</div>
    <div>Home</div>
    </div>
    <Body/>
   </div> 
  )
};

export default Navbar;
