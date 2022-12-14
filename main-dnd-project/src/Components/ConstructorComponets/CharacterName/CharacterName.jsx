import React, { useState } from 'react';
import style from '../CharacterName/CharacterName.module.css'
import { attributesFullName } from '../../../constants/constants';



const CharacterName = ({ page, setPage, formData, setFormData }) => {
 
 const createBySite =() => {
  let stats = Array.from({ length: 6 }, () => Math.floor(Math.random() * (20 - 1) + 1))
  let nameStats = [];
  for (let i = 0; i < attributesFullName.length; i++) {
 nameStats.push({
  name: attributesFullName[i],
  value: stats[i]
 })
 
}
  setFormData({ ...formData, stats: nameStats });
  setPage(page + 1);
 }
 

 const [value, setValue] = useState('');
  const handleChange = (e) => {
   setValue(e.target.value);
   setFormData({ ...formData, username: e.target.value });
  };
 return (

  <div className={style.block}>
   <input 
    className={style.input}
    type="text"
    placeholder='Your Character Name'
    value={formData.username}
    onChange={handleChange}
   />
   <div className={style.buttons_block}>
    <button className={style.button} onClick={() => {
       setPage(page - 1);

      }}>
        Previous
    </button>
      <button disabled={!value} className={style.button} onClick={createBySite}> 
        Submit
      </button>
    </div>
   </div>

 );
};

export default CharacterName;