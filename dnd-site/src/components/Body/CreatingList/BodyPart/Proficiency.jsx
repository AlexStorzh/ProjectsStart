import React from 'react';
import style from './BodyPart.module.css'

const Proficiency = () => {
 return (
  <div className={style.proficiency_wrapper }>
     <div className={style.inspiration_number}><input className={style.inspiration_input} type="text" placeholder='0' maxLength={2} pattern="[0-9]+"/></div>
   <div className={style.inspiration_text}>Proficiency Bonus</div>
  </div>
 );
};

export default Proficiency;