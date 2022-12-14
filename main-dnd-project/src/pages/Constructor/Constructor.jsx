import React, { useState } from 'react';
import style from './Constructor.module.css'
import ChoseAvatar from '../../Components/ConstructorComponets/ChoseAvatar/ChoseAvatar'
// import HelpPanel from './Help/HelpPanel';
import CharacterName from '../../Components/ConstructorComponets/CharacterName/CharacterName';
import ChoseClass from '../../Components/ConstructorComponets/ChoseClass/ChoseClass';
import ChoseRace from '../../Components/ConstructorComponets/ChoseRace/ChoseRace';
import FinalCharacter from '../../Components/ConstructorComponets/FinalCharacter/FinalCharacter';
import ClassStats from '../../Components/ConstructorComponets/ClassStats/ClassStats';
import { finalCharacterFaucet } from '../../constants/FinalCharacter';

const Body = () => {

 const [page, setPage] = useState(0);
 const [formData, setFormData] = useState(finalCharacterFaucet);
 const componentList = [
  <CharacterName
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
  <ChoseClass
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <ClassStats
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
  
  
   <div className={style.main_page_wrapper}>
    <div className={style.main_block}>
     {componentList[page]}
    </div>
   </div>
 );
};

export default Body;