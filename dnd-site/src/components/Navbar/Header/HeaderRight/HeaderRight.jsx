import React from 'react';
import {GiSpikedDragonHead} from 'react-icons/gi'
import { BsFillPersonFill, BsBookmark } from 'react-icons/bs'

const HeaderLeft = () => {
 return (
  <div className="navbar__header__right">
    <div className='nav-popover__trigger'>
     <div className="navbar__btn">
    <GiSpikedDragonHead className="svg-icon" size='30px' />
    </div>
   </div>
   <div className='nav-popover__trigger'>
     <div className="navbar__btn">
     <BsFillPersonFill className="svg-icon" size='30px'  />
 </div>
   </div>
     
    <div className='nav-popover__trigger'>
     <div className="navbar__btn">
     <BsBookmark className="svg-icon" size='28px' />
 </div>
   </div>
     
   </div>
 );
};

export default HeaderLeft;