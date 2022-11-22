import React from 'react';
import { skills } from '../../../constants/constants';
import style from './FinalCharacter.module.css'

const FinalCharacterSkills = ({ formData }) => {

 return (
  <div className={style.finalCharacter_skills}>
   {skills.map((e) => {
    if (e.attribute === 'STR') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[0].value}</p> <p>({e.attribute})</p></li></div>
    } else if (e.attribute === 'DEX') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[1].value}</p> <p>({e.attribute})</p></li></div>
    } else if (e.attribute === 'CON') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[2].value}</p> <p>({e.attribute})</p></li></div>
    } else if (e.attribute === 'INT') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[3].value}</p> <p>({e.attribute})</p></li></div>
    } else if (e.attribute === 'WIS') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[4].value}</p> <p>({e.attribute})</p></li></div>
    } else if (e.attribute === 'CHA') {
     return <div><li key={e.index}>{e.name} <p>{formData.finalCharacterAttributes[5].value}</p> <p>({e.attribute})</p></li></div>
    } return ''
   })}
  </div>
 );
};

export default FinalCharacterSkills;