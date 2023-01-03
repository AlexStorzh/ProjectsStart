import React, { useState } from 'react';
import style from '../CharacterName/CharacterName.module.css'
import { attributesFullName } from '../../../constants/constants';



const CharacterName = ({ page, setPage, formData, setFormData }) => {
 
 const attributesRandom =() => {
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
    <div className={style.avatar}>+</div>
    <div className={style.character_input_box}>
      <p className={style.character_name}>Character Name</p>
      <input 
    className={style.input}
    type="text"
    value={formData.username}
    onChange={handleChange}
   />
   </div>
   <div className={style.buttons_block}>
   
      <button disabled={!value} className={style.button} onClick={attributesRandom}> 
      &gt;
      </button>
   
    </div>
   </div>

 );
};

export default CharacterName;