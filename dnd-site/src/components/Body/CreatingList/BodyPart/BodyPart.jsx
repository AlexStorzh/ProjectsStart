import React, { useState } from 'react';
import Attributes from './Attributes';
import style from './BodyPart.module.css'

const BodyPart = () => {
 const [parts, setParts] = useState([
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
    {parts.map(part =>
     <Attributes part={part} key={part.id} />)}
   </div>
   <div className="perks"></div>
   <div className="inventory"></div>
  </div>
 );
};

export default BodyPart;