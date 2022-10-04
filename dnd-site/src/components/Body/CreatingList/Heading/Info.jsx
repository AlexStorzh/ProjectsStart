import React from 'react';
import style from './Heading.module.css'

const Info = ({...props}) => {
 return (
  <div>
   <div className={style.item}>{props.e.name}<input type="text"  /></div>
    
  </div>
 );
};

export default Info;