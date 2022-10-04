import React, { useState } from 'react';
import Attribute from './Attribute';
import style from './BodyPart.module.css'

const BodyPart = () => {
 const [attributes, setAttributes] = useState([
  { id: 1, name: 'Strenght'},
  { id: 2, name: 'Dexterity'},
  { id: 3, name: 'Wisdom'},
  { id: 4, name: 'Charisma'},
  { id: 5, name: 'Inteleggence'},
  { id: 6, name: 'Constitution'},
 ])

 return (
  <div className={style.bodypart}>
   <div className={style.attributes_bar}>
    {attributes.map(attribute =>
     <Attribute attribute={attribute} key={attribute.id} />)}
   </div>
   <div className="perks"></div>
   <div className="inventory"></div>
  </div>
 );
};

export default BodyPart;