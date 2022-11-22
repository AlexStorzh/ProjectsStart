import React, { useState } from 'react';
import style from '../CharacterName/CharacterName.module.css'



const CharacterName = ({ page, setPage, formData, setFormData }) => {


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
     setPage(page - 1)
    }}>
        Previous
    </button>
      <button disabled={!value} className={style.button} onClick={() => {
     setPage(page + 1)
    }}> 
        Submit
      </button>
    </div>
   </div>

 );
};

export default CharacterName;