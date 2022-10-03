import React from 'react';
import style from './BodyPart.module.css'

const BodyPart = () => {
 return (
  <div className={style.bodypart}>
   <div className={style.attributes_bar}>
    <div className={style.attribute_item}>Strengh<input type="text" maxlength='2' /></div>
    <div className={style.attribute_item}>Dexterity<input type="text" maxlength='2' /></div>
    <div className={style.attribute_item}>Wisdom<input type="text" maxlength='2' /></div>
    <div className={style.attribute_item}>Charisma<input type="text" maxlength='2' /></div>
    <div className={style.attribute_item}>Constitution<input type="text" maxlength='2'  /></div>
    <div className={style.attribute_item}>Inteleggence<input type="text" maxlength='2'  /></div>
   </div>
   <div className="perks"></div>
   <div className="inventory"></div>
  </div>
 );
};

export default BodyPart;