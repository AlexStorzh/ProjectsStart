import React from 'react';

const FinalCharacter = ({ page, setPage, formData }) => {
 let attributes1 = [];
 let attributes2 = [];
 let attributesName = ['AGI', 'STR', 'WIS', 'INT', 'CHA', 'END'];

  formData.attributes.map((e) =>
  attributes1.push(e.value)
  )
 formData.raceAttributes.map((e) =>
  attributes2.push(e.value)
 )

 let attributesSum = [];
 function sumArrays(arr1, arr2) {
  for (let i = 0; i < 6; i++) {
   attributesSum.push(attributes1[i] + attributes2[i])
  }
  return attributesSum
 }
 sumArrays(attributes1, attributes2)
 
 let finalAttributes = attributesName.map(function (value, index) {
  return [value, attributesSum[index]]
 });

 console.log(finalAttributes)
 return (
  <div>
   <div>
    <h1>{formData.username}</h1>
    <p>{formData.race}</p>
    <p>{formData.class}</p>
    Attributes
    {formData.attributes.map((attr) =>
     <li value={attr.value} key={attr.key}>{attr.key} {attr.value}</li>)}
    <br />
    RaceAttributes
    {formData.raceAttributes.map((attr) =>
     <li value={attr.value} key={attr.key}>{attr.key} {attr.value}</li>)}  
    AttributeSum
    {finalAttributes.map((e) =>
     <li >{e[0]} {e[1]}</li>)}  
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