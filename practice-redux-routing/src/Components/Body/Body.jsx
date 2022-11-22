import React, { useState } from 'react';
import style from './Body.module.css'
import ChoseAvatar from './ChoseAvatar/ChoseAvatar';
import HelpPanel from './Help/HelpPanel';
import CharacterName from './CharacterName/CharacterName';
import ChoseClass from './ChoseClass/ChoseClass';
import ChoseRace from './ChoseRace/ChoseRace';
import FinalCharacter from './FinalCharacter/FinalCharacter';
import { finalCharacterFaucet } from '../../constants/FinalCharacter';

const Body = () => {

 const [page, setPage] = useState(0);
 const [formData, setFormData] = useState(finalCharacterFaucet);
 const componentList = [
  <HelpPanel
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <CharacterName
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <ChoseClass
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <ChoseRace
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <ChoseAvatar
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData} 
  />,
  <FinalCharacter
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
 ]


 return (
  <div className={style.container}>
   <div className={style.main_page_wrapper}>
    <div className={style.main_block}>
     {componentList[page]}
    </div>
   </div>
  </div>
 );
};

export default Body;