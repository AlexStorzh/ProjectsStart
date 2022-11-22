import React from 'react';
import style from './ChoseAvatar.module.css'
import elf from '../../../images/elf1.jpg'
const ChoseAvatar = ({page, setPage,formData}) => {
 return (
  <div>
  <img src={elf} alt="elf1" />
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default ChoseAvatar;