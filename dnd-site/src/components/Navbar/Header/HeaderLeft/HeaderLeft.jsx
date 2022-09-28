import React from 'react';
import { useState } from 'react';
import HeaderLeftDropdownPopover from './HeaderLeftDropdown/HeaderLeftDropdown';



const HeaderRight = () => {

 const [open, setOpen] = useState(false);

 return (
  <div className="navbar__header__left">
    <div className={'nav-popover__trigger' + (open ? '_active' : '' )} onClick={() => setOpen(!open)}>
     <div className="navbar__btn hamburger">
      <span className='line'></span>
      <span className='line'></span>
     <span className='line'></span>
    </div>
   </div>
    {open && <HeaderLeftDropdownPopover/>}
   <div className="navbar__section">
    <a href='/' className='navbar__header__link'>DnD Helper</a>
    </div>
   </div>
 );
};

export default HeaderRight;