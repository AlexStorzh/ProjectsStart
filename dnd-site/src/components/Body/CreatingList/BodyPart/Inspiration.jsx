import React from 'react';
import style from './BodyPart.module.css'

const Inspiration = () => {
 return (
  <div className={style.inspitation_wrapper}>
     <div className={style.inspiration_number}><input className={style.inspiration_input} type="text" placeholder='0' maxLength={2} pattern="[0-9]+"/></div>
   <div className={style.inspiration_text}>Inspiration</div>
  </div>
 );
};

export default Inspiration;