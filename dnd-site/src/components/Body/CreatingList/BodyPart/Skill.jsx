import React from 'react';
import style from './BodyPart.module.css'

const Skill = ({...props}) => {
 return (
  <div className={style.skill_element}>
   <input type="checkbox" />
   <input className={style.skill_input} type="text" maxLength={2}/>
   <div className={style.skill_text}>{props.skill.name}</div>
   <div className={style.skill_attr}>({props.skill.attribute})</div>
  </div>
 );
};

export default Skill;