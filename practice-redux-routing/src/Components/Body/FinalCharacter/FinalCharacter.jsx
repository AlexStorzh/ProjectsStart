import React, { useEffect } from 'react';
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
 console.log(formData.attributes)
 console.log(formData.raceAttributes)
 console.log(attributesSum)
 console.log(finalAttributesSum)
 console.log(finalCharacterAttributes)
 return (
  <div>
   <div>
    <h1>{formData.username}</h1>
    <p>{formData.race}</p>
    <p>{formData.class}</p>
      
    Your Character Attributes
    {finalCharacterAttributes.map((e) =>
     <li key={e.index}>{e.name} {e.value}</li>)}  
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