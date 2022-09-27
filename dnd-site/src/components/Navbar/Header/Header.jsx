import React from 'react';
import './Header.css'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';



const Navbar = () => {
 return (
  <header className='navbar__header'>
   <HeaderLeft />
   <HeaderRight />
  </header>
 );
};

export default Navbar;