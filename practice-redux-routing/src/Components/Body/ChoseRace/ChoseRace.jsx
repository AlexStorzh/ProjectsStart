import React from 'react';
import {race} from '../../../constants/constants'
import style from './ChoseRace.module.css'

const ChoseRace = ({page, setPage, formData, setFormData}) => {
let typeOfRace = race;
 const receiveRaceType = (e, chosen) => {
  setFormData({ ...formData, race: chosen.race, raceAttributes: chosen.attributes })
  setPage(page + 1)
}
 return (
  <>
  <div className={style.template}>
    {typeOfRace.map((e) =>
     <div
     className={style.card}
      key={e.race}
      onClick={(chosen) => receiveRaceType(chosen, e)}
    >
      <h1 className={style.h1 }> {e.race}</h1>
      <p>{e.description}</p>
    </div> 
   )}
   </div>
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
   </>
 );
};

export default ChoseRace;