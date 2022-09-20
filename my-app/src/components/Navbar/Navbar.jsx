import React from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './Sidebar';
import './Navbar.css'

const Navbar = () => {
 return (
  <>
   <div className="navbar">
     {SidebarData.map((e, index) => {
      return (
       <div key={index} className={e.cName}>
        <Link to={e.path}>
         {e.icon}
         </Link>
       </div>
      )
     })}
     <div className="avatar"></div>
   </div>
  </>
 );
};

export default Navbar;