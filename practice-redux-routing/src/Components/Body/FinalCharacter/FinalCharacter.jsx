import React, { useEffect } from 'react';
import FinalCharacterSkills from './FinalCharacterSkills';
import style from './FinalCharacter.module.css'
import { attributesName } from '../../../constants/constants';


const FinalCharacter = ({ page, setPage, formData }) => {
 let finalCharacterAttributes = formData.finalCharacterAttributes;
 let attributesSum = [];
  function sumArrays (arr1, arr2) {
   for (let i = 0; i < 6; i++) {
    attributesSum.push(arr1[i] + arr2[i])
   }
   return attributesSum
 }
 sumArrays(formData.attributes, formData.raceAttributes)

 let finalAttributesSum =  attributesSum.map(e => {
   return Math.floor((e - 10) / 2)
 });

 for (let i = 0; i < finalAttributesSum.length; i++) { 
  finalCharacterAttributes[i].value = finalAttributesSum[i];
 }
 return (
  <div>
   <div>
    <h1>{formData.username}</h1>
    <p>{formData.race}</p>
    <p>{formData.class}</p> 
    <div className={style.attributes}>
     <div className={style.modifires}>
      <div>Your Character Modifires</div>
      <div className={style.modifires_value} >
      {finalCharacterAttributes.map((e) => {
       return  <li key={e.index}>{e.name} {e.value}</li>     
      })}
       </div>
     </div>
     <div className={style.skills}>
      <div>Your Character Skills</div>
      <FinalCharacterSkills formData={formData} />
      </div>
    </div>
   </div>
   <button onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default FinalCharacter;