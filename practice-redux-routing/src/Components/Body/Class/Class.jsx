import React from 'react';


const Class = (data) => {
console.log(data)
 return (
  <div>
   {data.data.map((e) =>
    <div>
     <h1>{e.name}</h1>
     <p>{e.description}</p>
     {e.attributes.map((attr) =>
      <li>{attr.key} {attr.value}</li>)}
    </div>

   )}
  </div>
 );
};

export default Class;