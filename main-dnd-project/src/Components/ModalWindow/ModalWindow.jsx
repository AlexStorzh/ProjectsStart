import React from 'react';
import { useState } from 'react';
import style from './ModalWindow.module.css'



const ModalWindow = ({ setActive, race, page, setPage }) => {
 console.log(race)
 return (
  <div  className={style.modal__active } onClick={() => setActive(false)
 }>
   <div className={style.modal__content} onClick={e => e.stopPropagation()}>
    <div className={style.top_bar}>
     <h1>Confirm your race</h1>
     <button style = {{height: '30px', weight: '30px'}} onClick={() => setActive(false)}>Close</button>
    </div>
    <h2>{race.name}</h2>
    <span>{race.alignment}</span>
    <div className={style.characteristic}>
     <div className={style.characteristic__card}>
    <p>{race.name} traits:</p>
      <ul>{race.traits.length ? race.traits.map(({ name, url }) =>
       
     <li key={name}>{name}</li>
      ) : <span>{race.name} doesn't have any special traits.</span>}</ul>
     </div>
     <div className={style.characteristic__card}><p>{race.age}</p></div>
     <div className={style.characteristic__card}><p>{race.name} size is {race.size}</p> {race.size_description} <p> Speed : {race.speed}</p></div>
     
    </div>
   <button className={style.button} onClick={() => setPage(page + 1)}> Submit</button>
   </div>
  </div>
 )
}
export default ModalWindow;

