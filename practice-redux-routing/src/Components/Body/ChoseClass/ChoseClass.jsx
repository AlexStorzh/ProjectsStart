import React from 'react';
import { useEffect, useState } from 'react'
import style from './ChoseClass.module.css'
import { getApiResource } from '../../../api/api';
import { DND_ROOT_CLASSES, DND } from '../../../constants/constantsApi';


const Class = ({ page, setPage, formData, setFormData }) => {
 const [classes, setClasses] = useState()
 
 const getResource = async (url) => {
  const res = await getApiResource(url)
  setClasses(res.results)
 }

 useEffect(() => { 
  getResource(DND_ROOT_CLASSES)
 }, []);

 
 const handleClick = async (e, url) => {
  const res = await getApiResource(DND + url)
  setFormData({ ...formData, class: res })
  setPage(page + 1)
 }
 return (
  <>
   {classes && (
   <div className={style.template}>
     {classes.map(({ index, name, url }) =>
      <div
     className={style.card}
       key={index}
       onClick={(e) => handleClick(e, url)}
    >
     <h1> {name}</h1> 
    </div> 
    )}
    
   </div>
  )}
    <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </>

 );
};

export default Class;

