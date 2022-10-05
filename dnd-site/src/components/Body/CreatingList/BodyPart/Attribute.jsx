import React, { useState } from 'react';
import style from './BodyPart.module.css'

const Attribute = ({ ...props }) => {

 const [inputOne, setInputOne] = useState('');
 console.log(inputOne)
  
 return (
  <div>
   <div className={style.attribute_item}>
    <p>{props.attribute.name}</p>
    <input
     type="text"
     className={style.attribute_value}
     maxLength='2'
     pattern="[0-9, +, -]+"
     onChange={(e) =>setInputOne(e.target.value)}
    />
    <hr></hr>
    <input
     type="text"
     className={style.attribute_number}
     maxLength='2'
     pattern="[0-9]+" />
   </div>
  </div>
 );
};

export default Attribute;