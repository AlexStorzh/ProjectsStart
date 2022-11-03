import React from 'react';
import { skills } from '../../../constants/constants';
import style from './FinalCharacter.module.css'

const FinalCharacterSkills = ({ formData }) => {

 return (
  <div className={style.class_value}>
   {skills.map((e) => {
    if (e.attribute === 'STR') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[0].value} ({e.attribute})</li>
    } else if (e.attribute === 'DEX') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[1].value} ({e.attribute})</li>
    } else if (e.attribute === 'CON') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[2].value} ({e.attribute})</li>
    } else if (e.attribute === 'INT') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[3].value} ({e.attribute})</li>
    } else if (e.attribute === 'WIS') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[4].value} ({e.attribute})</li>
    } else if (e.attribute === 'CHA') {
     return <li key={e.index}>{e.name} {formData.finalCharacterAttributes[5].value} ({e.attribute})</li>
    } return ''
   })}
  </div>
 );
};

export default FinalCharacterSkills;