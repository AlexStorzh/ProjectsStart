import React from 'react';
import BodyPart from './BodyPart/BodyPart';
import style from './CreatingList.module.css'
import Heading from './Heading/Heading';

const CreatingList = () => {
 return (
  <div className={style.creating__list}>
   <Heading />
   <BodyPart/>
  </div>
 );
};

export default CreatingList;