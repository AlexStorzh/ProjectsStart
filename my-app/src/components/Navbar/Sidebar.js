import React from "react";
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
 {
  path: '/',
  icon: <FaIcons.FaBorderAll size={32}/>,
  cName: 'nav-text'
 },
 {
  path: '/films',
  icon: <FaIcons.FaFilm size={32}/>,
  cName: 'nav-text'
 },
 {
  path: '/favorites',
  icon: <FaIcons.FaBookmark size={32}/>,
  cName: 'nav-text'
 }
]