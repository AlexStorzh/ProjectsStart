import React, { useState } from 'react';
import style from './Body.module.css'
import { classes } from '../../constants/classes';
import Class from './Class/Class';

const Body = () => {

 const [visible, setVisible] = useState(true);

 const removeElement = () => {
  setVisible((prev) => !prev)
 };

 return (
  <div className={style.container}>
   <div className={style.main_page_wrapper}>
    <div className={style.main_block}>
     {visible && <div onClick={removeElement} className={style.button}>
   Click to create character!
     </div>}
     {!visible && <Class data={classes} />}
    </div>
   </div>
  </div>
 );
};

export default Body;