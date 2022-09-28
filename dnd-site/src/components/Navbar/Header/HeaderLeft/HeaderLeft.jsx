import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState, useEffect, useRef} from 'react';
import HeaderLeftDropdownPopover from './HeaderLeftDropdown/HeaderLeftDropdown';



const HeaderRight = () => {

 const [open, setOpen] = useState(false);

// Клик по экрану убирает меню Ref
 
 const menuRef = useRef();
 useEffect(() => {
  const closeMenu = e => {
   if (e.path[0] !== menuRef.current)
    setOpen(false)
  }
  document.addEventListener('click', closeMenu);
  return () => document.removeEventListener('click', closeMenu)
 }, [])
  
 return (
  <div className="navbar__header__left">
   <div className={'nav-popover__trigger' + (open ? '_active' : '' )} onClick={() => setOpen(!open)}>
    <div ref={menuRef}  className="navbar__btn hamburger">
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