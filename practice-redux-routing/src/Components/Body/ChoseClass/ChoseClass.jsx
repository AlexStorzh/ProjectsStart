import style from './ChoseClass.module.css'
import {classes} from '../../../constants/constants'



const Class = ({ page, setPage, formData, setFormData }) => {
 
 
 let typeOfCharacter = classes;

 const receiveClassType = (character) => {
  setFormData({ ...formData, class: character.name, })
  setPage(page + 1);
 }
 

 return (
  <>
  <div className={style.template}>
   {typeOfCharacter.map((e) =>
    <div
     className={style.card}
     key={e.name}
     onClick={(character) => receiveClassType(character, e)} 
    >
     <h1> {e.name}</h1> 
    </div> 
    )}
   </div>
    <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
   </>
 );
};

export default Class;