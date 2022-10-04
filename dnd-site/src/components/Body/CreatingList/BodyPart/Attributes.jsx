import React from 'react';
import style from './BodyPart.module.css'

const Attributes = ({ ...props }) => {
 console.log(props)
 return (
  <div>
   <div className={style.attribute_item}>{props.part.name}<input type="text" maxLength='2' /></div>
  </div>
 );
};

export default Attributes;