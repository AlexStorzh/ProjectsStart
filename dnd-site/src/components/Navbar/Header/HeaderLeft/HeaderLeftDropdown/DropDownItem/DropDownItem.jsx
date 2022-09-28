import React from 'react';
import style from './DropDownItems.module.css'
import { GiCircle } from 'react-icons/gi'

function DropDownItem(props) {
 return (
  <div className={style.item}>

   <span>{props.name}</span>
  </div>
 );
}

export default DropDownItem;