import React from 'react';
import { useEffect, useState } from 'react';
import { getApiResource } from '../../../api/api';
import style from './ChoseRace.module.css'
import { DND_ROOT_RACES, DND } from '../../../constants/constantsApi';

const ChoseRace = ({ page, setPage, formData, setFormData }) => {
 
const [races, setRaces] = useState ()
 const getResource = async (url) => {
  const res = await getApiResource(url)
  setRaces(res.results)
 }

 useEffect(() => { 
  getResource(DND_ROOT_RACES)
 }, []);

 const handeClick = async (e, url) => {
  const res = await getApiResource(DND + url)
  setFormData({ ...formData, race: res })
  setPage(page + 1)
 }

 return (
  <>
   {races && (
    <div className={style.template}>
    {races.map(({index, name, url}) =>
     <div
     className={style.card}
      key={index}
      onClick={(e) => handeClick(e, url)}
    >
      <h1 className={style.h1 }> {name}</h1>
    </div> 
   )}
   </div>)}
  
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
   </>
 );
};

export default ChoseRace;