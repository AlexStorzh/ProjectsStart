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
  <div >
   <div className={style.finalCharacter_wrapper}>
    <div className={style.finalCharacter_info}>
     <div className={style.finalCharacter_info_top}>
      <div className={style.finalCharacter_avatar}> </div>
      <div className={style.finalCharacter_text}>
       <div>Name : {formData.username}</div>
       <div>Race : {formData.race}</div>
       <div>Class : {formData.class}</div> 
       <div>History : Monk</div> 
       <div>Attitude : Lawful Good</div> 
       <div>Level : 1</div> 
      </div>
     </div>
     <div className={style.finalCharacter_info_bot}>
       <div className={style.finalCharacter_title}>Your Character Modifires</div>
        <div className={style.finalCharacter_modifires}>
        {finalCharacterAttributes.map((e) => {
         return (
          <>
           <div>
            <li key={e.index}>{e.name}</li>
            <p>{e.value}</p>
           </div>
          </>
         )
        })}
     </div>
       </div>
    </div>
      <FinalCharacterSkills formData={formData} />
   </div>
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default FinalCharacter;