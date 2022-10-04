import React, { useState } from 'react';
import style from './BodyPart.module.css'
import Attribute from './Attribute';
import Inspiration from './Inspiration';
import Proficiency from './Proficiency';
import SavingThrow from './SavingThrow';
import Skill from './Skill';
import {savingThrows, skills, attributes} from '../../../../constants/constants.js'


const BodyPart = () => {
 
 return (
  <div className={style.bodypart}>
   <div className={style.attributes_bar}>
    {attributes.map(attribute =>
     <Attribute attribute={attribute} key={attribute.name} />)}
   </div>
   <div className={style.perks}>
    <Inspiration />
    <Proficiency />
      <div className={style.savingthrow_wrapper}>
    {savingThrows.map(savingthrow =>
     <SavingThrow savingthrow={savingthrow} key={savingthrow.name} />)}
    </div>
    <div className={style.skills_wrapper}>
     {skills.map(skill =>
      <Skill skill={skill} key={skill.name} />)}
    </div>
    </div>
   </div>
 );
};

export default BodyPart;