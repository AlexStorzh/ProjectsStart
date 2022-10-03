import React from 'react';
import style from './Heading.module.css'
const Heading = () => {
 return (
  <div className={style.heading}>
   <div className={style.character_name}><input type="text" placeholder='Your Name!' className={style.character_name_input} /></div>
   <div className={style.character_info}>
    <div className={style.item}>Name<input type="text"  /></div>
    <div className={style.item}>History<input type="text" /></div>
    <div className={style.item}>Class<input type="text" /></div>
    <div className={style.item}>Exp<input type="text" /></div>
    <div className={style.item}>Race<input type="text" /></div>
    <div className={style.item}>Attitude<input type="text" /></div>
   </div>
  </div>
 );
};

export default Heading;