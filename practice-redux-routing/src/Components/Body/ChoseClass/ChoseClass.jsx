import React from 'react';
import { useEffect, useState } from 'react'
import style from './ChoseClass.module.css'
import { getApiResource } from '../../../api/api';
import { DND_ROOT_CLASSES } from '../../../constants/constantsApi';


const Class = ({ page, setPage, formData, setFormData }) => {
 
 const [classes, setClasses] = useState (null)
 const getResource = async (url) => {
  const res = await getApiResource(url)

  const classList = res.results.map(({ name, url }) => {
   return {
    name,
    url
   }
  })
  setClasses(classList)
 }

 useEffect(() => { 
  getResource(DND_ROOT_CLASSES)
 }, []);

 
 const showMessage = (e, name) => {
  setFormData({ ...formData, class: name})
  setPage(page + 1);
  console.log(name);
 }

 return (
  <>
   {classes && (
   <div className={style.template}>
     {classes.map(({ name, url }) =>
      <div
     className={style.card}
       key={name}
       onClick={(e) => showMessage(e, name)}
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

