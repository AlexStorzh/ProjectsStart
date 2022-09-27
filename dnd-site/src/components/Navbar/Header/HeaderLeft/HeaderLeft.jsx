import React from 'react';

const HeaderRight = () => {
 return (
  <div className="navbar__header__left">
    <div className='nav-popover__trigger'>
     <div className="navbar__btn hamburger">
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
     </div>
   </div>
   <div className="navbar__section">
    <a href='/' className='navbar__header__link'>DnD Helper</a>
    </div>
   </div>
 );
};

export default HeaderRight;