import style from './ChoseClass.module.css'
import {classes} from '../../../constants/constants'
import { useEffect, useState } from 'react';


const Class = ({ page, setPage, formData, setFormData }) => {
 const [loaded, setLoaded] = useState(false)

 useEffect(() => {
  if (loaded) return ;
  let attributes = Array.from({length: 6}, () => Math.floor(Math.random() * (20-1) + 1))
  setFormData({ ...formData, attributes: attributes })
  setLoaded(true)
 }, [formData, loaded, setFormData]);
 
 let typeOfCharacter = classes;

 const receiveClassType = (e, character) => {
  setFormData({ ...formData, class: character.name, })
  setPage(page + 1);
 }
 

 return (
  <div className={style.template}>
   {typeOfCharacter.map((e) =>
    <div
     className={style.card}
     key={e.name}
     onClick={(character) => receiveClassType(character, e)} 
    >
     <h1> {e.name}</h1> 
     <p>{e.description}</p>
    </div> 
   )}
      <br />
      <button onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default Class;