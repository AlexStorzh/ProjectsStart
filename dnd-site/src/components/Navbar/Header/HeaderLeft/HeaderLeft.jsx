import React from 'react';
import {FaDragon} from 'react-icons/fa'
import { BsFillPersonFill, BsBookmark } from 'react-icons/bs'

const HeaderLeft = () => {
 return (
  <div className="navbar__header__right">
    <div className='nav-popover__trigger'>
     <div className="navbar__btn">
    <FaDragon className="svg-color--fill svg-icon" size='30px' />
    </div>
   </div>
   <div className='nav-popover__trigger'>
     <div className="navbar__btn">
     <BsFillPersonFill className="svg-color--fill svg-icon" size='30px'  />
 </div>
   </div>
     
    <div className='nav-popover__trigger'>
     <div className="navbar__btn">
     <BsBookmark className="svg-color--fill svg-icon" size='28px' />
 </div>
   </div>
     
   </div>
 );
};

export default HeaderLeft;