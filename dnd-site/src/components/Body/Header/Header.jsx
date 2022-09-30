import React, { useState } from 'react';
import './Header.css'


const Header = () => {

 const [open, openSet] = useState(false)

 return (
  <div className={'create__btn' + (open ? '__active' : '')} onClick={() => openSet(!open)}>
   Click to create a new character!
  </div>
 );
};

export default Header;