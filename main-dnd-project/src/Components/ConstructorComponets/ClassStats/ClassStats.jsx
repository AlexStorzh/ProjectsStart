import style from './ClassStats.module.css'
import React from 'react';
const ClassStats = ({ page, setPage, formData, setFormData }) => {

 
 const handleChange = (e, name) => {
  let index = formData.stats.findIndex((e) => e.name === name)
  let newFormData = JSON.parse(JSON.stringify(formData));
  newFormData.stats[index].value = Number(e.target.value)
  setFormData(newFormData)
   console.log(formData.stats[index])
 }


 return (
  <div>
   {formData.stats.map(({name, value}) => {
    return (<div key={name} style={{ display: 'flex' }}>
     <input type="number"
      min={0}
      max={20}
      placeholder={value}
      value={value}
      onChange={(e) => handleChange(e, name)}
     />
   <p style={{ color: 'white' }}>{name}</p>
   <p style={{ color: 'white' }}>{value}</p>
    </div>)
   })}
    <button className={style.button} onClick={() => {setPage(page - 1)}}>
      Previous
     </button>
    <button className={style.button} onClick={() => {setPage(page + 1)}}>
      Next
     </button>
  </div>
 );
};

export default ClassStats;