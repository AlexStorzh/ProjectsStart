import React from 'react';
import {race,} from '../../../constants/constants'
import style from './ChoseRace.module.css'

const ChoseRace = ({page, setPage, formData, setFormData}) => {
let typeOfRace =race;
 const receiveRaceType = (e, chosen) => {
  setFormData({ ...formData, race: chosen.race, raceAttributes: chosen.attributes })
  setPage(page + 1)
}
 return (
  <div>
    {typeOfRace.map((e) =>
     <div
     className={style.card}
      key={e.race}
      onClick={(chosen) => receiveRaceType(chosen, e)}
    >
     <h1> {e.race}</h1> 
     {e.attributes.map((attr) =>
      <li value={attr} key={attr.index}>{attr}</li>)}
    </div> 
   )}
   <button onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default ChoseRace;