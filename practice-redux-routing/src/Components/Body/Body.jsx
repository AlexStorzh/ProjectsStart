import React, { useState } from 'react';
import style from './Body.module.css'
import CreateButton from './CreateButton/CreateButton';
import HelpPanel from './Help/HelpPanel';
import CharacterName from './CharacterName/CharacterName';
import ChoseClass from './ChoseClass/ChoseClass';
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
 finalCharacterAttributes: [
 {
   name: 'Strenght',
   value: ''
  },
  {
   name: 'Dexterity',
   value: ''
  },
  {
   name: 'Constitution',
   value: ''
  },
  {
   name: 'Intelligence',
   value: ''
  },
  {
   name: 'Wisdom',
   value: ''
  },
  {
   name: 'Charisma',
   value: ''
  },]
});

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