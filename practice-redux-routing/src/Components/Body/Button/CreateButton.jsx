import React from 'react';
import style from './CreateButton.module.css'

const CreateButton = ({page, setPage}) => {

 return (
  <div>
   <div
    className={style.button}
    onClick={() => {
     setPage(page + 1)
    }}>
    Click to create character!
   </div>
  </div>
 );
};

export default CreateButton;