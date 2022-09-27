import React from 'react';
import {FaDragon} from 'react-icons/fa'
import { BsFillPersonFill, BsBookmark } from 'react-icons/bs'

const HeaderLeft = () => {
 return (
  <div className="navbar__header__right">
    <a href="/dragon" className='navbar__icon'>
     <FaDragon size='30px' color='white' />
    </a>
    <a href="/dragon" className='navbar__icon'>
     <BsFillPersonFill size='30px' color='white' />
     </a>
    <a href="/dragon" className='navbar__icon'>
     <BsBookmark size='28px' color='white' />
     </a>
   </div>
 );
};

export default HeaderLeft;