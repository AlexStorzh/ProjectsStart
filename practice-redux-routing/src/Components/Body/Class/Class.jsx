import style from './Class.module.css'
import classes from '../../../constants/constants'

const Class = ({page, setPage, formData, setFormData}) => {
 let typeOfCharacter = classes;
 const receiveClassType = (e, character) => {
  setFormData({ ...formData, class: character.name, attributes: character.attributes })
  setPage(page + 1);
}
 return (
  <div className={style.template}>
   {typeOfCharacter.classes.map((e) =>
    <div
     className={style.card}
     key={e.name}
     onClick={(character) => receiveClassType(character, e)} 
    >
     <h1> {e.name}</h1> 
     <p>{e.description}</p>
     {e.attributes.map((attr) =>
      <li value={attr.value} key={attr.key}>{attr.key} {attr.value}</li>)}
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