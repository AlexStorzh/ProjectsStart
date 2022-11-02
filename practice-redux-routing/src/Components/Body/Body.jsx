import React, { useState } from 'react';
import style from './Body.module.css'
import CreateButton from './Button/CreateButton';
import HelpPanel from './Help/HelpPanel';
import CharacterName from './CharacterName/CharacterName';
import Class from './Class/Class';
import ChoseRace from './ChoseRace/ChoseRace';
import FinalCharacter from './FinalCharacter/FinalCharacter';


const Body = () => {

const [page, setPage] = useState(0);
const [formData, setFormData] = useState({
 username: "",
 race: "",
 class: "",
 attributes: [],
 raceAttributes: [],
});

console.log(formData)
const componentList = [
 <CreateButton
   page={page}
   setPage={setPage}
  />,
 <HelpPanel
   page={page}
   setPage={setPage}
  />,
 <CharacterName
   page={page}
   setPage={setPage}
   formData={formData}
   setFormData={setFormData}
  />,
  <Class
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
     <div>{componentList[page]}</div>
    </div>
   </div>
  </div>
 );
};

export default Body;