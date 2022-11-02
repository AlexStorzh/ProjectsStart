import React, { useEffect } from 'react';
import { attributesName } from '../../../constants/constants';


const FinalCharacter = ({ page, setPage, formData }) => {

  let attributesFinalChar = [];
  let attributesFinalRace = [];

  formData.attributes.map((e) =>
  attributesFinalChar.push(e)
  )
  formData.raceAttributes.map((e) =>
  attributesFinalRace.push(e)
 )
 
  let attributesSum = [];
  function sumArrays(arr1, arr2) {
   for (let i = 0; i < 6; i++) {
    attributesSum.push(arr1[i] + arr2[i])
   }
   return attributesSum
 }
   sumArrays(attributesFinalChar, attributesFinalRace)

  
  let finalAttributesSum = attributesName.map(function (value, index) {
   return [value, attributesSum[index]]
  });


 return (
  <div>
   <div>
    <h1>{formData.username}</h1>
    <p>{formData.race}</p>
    <p>{formData.class}</p>
      
    Your Character Attributes
    {finalAttributesSum.map((e) =>
     <li key={e.index}>{e[0]} - {e[1]}</li>)}  
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