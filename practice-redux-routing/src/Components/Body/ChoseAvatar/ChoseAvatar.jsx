import React from 'react';
import style from './ChoseAvatar.module.css'
import { imageDataElf } from '../../../constants/imageData';


const ChoseAvatar = ({ page, setPage, formData, setFormData }) => {

 const receiveAvatar = (e, avatar) => {
  setFormData({ ...formData, avatar: avatar.src })
  setPage(page + 1);
 }
 return (
  <div>
   {imageDataElf.map((e) => {
    return <img onClick={(avatar) => receiveAvatar(avatar, e)}
     height='450px' width='300px'
     src={e.src}
     alt="" />
   })}
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default ChoseAvatar;