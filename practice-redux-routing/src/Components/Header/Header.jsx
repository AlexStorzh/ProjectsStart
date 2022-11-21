import React from 'react';
import style from './Header.module.css'
import {Link} from 'react-router-dom'
const Header = () => {
 return (
  <div className={style.header}>
  <div className={style.header_box}>
   <Link to ='/'><div className={style.nav_link}>Home</div></Link>
   <Link to ='/constructor'><div className={style.nav_link}>Create Character</div></Link>
   <Link to ='/about'><div className={style.nav_link}>About</div></Link>
   <Link to ='/contacts'><div className={style.nav_link}>Contacts</div></Link>
   </div>
   </div>
 );
};

export default Header;