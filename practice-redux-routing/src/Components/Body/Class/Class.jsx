import React, { useState } from 'react';
import style from './Class.module.css'


const Class = (data) => {

 const [message, setMessage] = useState();

 const showMessage = (e) => {
  console.log(e.target)
}

 return (
  <div className={style.template}>
   {data.data.map((e) =>
    <div
     className={style.card}
     key={e.name}
     onClick={showMessage}
    >
     <h1> {e.name}</h1>
     <p>{e.description}</p>
     {e.attributes.map((attr) =>
      <li value={attr.value} key={attr.key}>{attr.key} {attr.value}</li>)}
    </div>
   )}
  </div>
 );
};

export default Class;