import React from 'react';
import style from './NavBar.module.css'
import {Link} from 'react-router-dom'
const Header = () => {
 return (
  <div className={style.navbar}>
  <div className={style.navbar_box}>
   <Link className={style.nav_link} to ='/'><div >Home</div></Link>
   <Link className={style.nav_link} to ='/constructor'><div>Create Character</div></Link>
   <Link className={style.nav_link} to ='/about'><div>About</div></Link>
   <Link className={style.nav_link} to ='/contacts'><div>Contacts</div></Link>
   </div>
   </div>
 );
};

export default Header;