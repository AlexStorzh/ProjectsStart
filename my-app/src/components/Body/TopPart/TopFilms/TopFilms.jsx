import React from 'react';
import { Films } from './Films';
import style from './TopFilms.module.css'

const TopFilms = () => {
 return (
  <div className={style.main}>
   {Films.map((e, index) => {
    return (
     <div key={index} className={style.film}>
      
     </div>
    )
   })}
  </div>
 );
};

export default TopFilms;