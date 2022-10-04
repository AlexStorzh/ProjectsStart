import React from 'react';
import style from './BodyPart.module.css'

const Attribute = ({ ...props }) => {
 console.log(props)
 return (
  <div>
   <div className={style.attribute_item}>{props.attribute.name}<input type="text" maxLength='2' /></div>
  </div>
 );
};

export default Attribute;