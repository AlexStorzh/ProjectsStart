import React from 'react';
import style from './BodyPart.module.css'

const SavingThrow = ({...props}) => {
 return (

  <div className={style.savingthrow_element}>
   <input type="checkbox" />
   <input className={style.savingthrow_input} type="text" maxLength={2}/>
   <div className={style.savingthrow_text}>{props.savingthrow.name}</div>
  </div>
 );
};

export default SavingThrow;