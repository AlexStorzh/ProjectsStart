
import FinalCharacterSkills from './FinalCharacterSkills';
import style from './FinalCharacter.module.css'



const FinalCharacter = ({ page, setPage, formData, setFormData}) => {

 let finalCharacterAttributes = formData.finalCharacterAttributes;
 let attributesSum = [];
  function sumArrays (arr1, arr2) {
   for (let i = 0; i < 6; i++) {
    attributesSum.push(arr1[i] + arr2[i])
   }
   return attributesSum
 }
 sumArrays(formData.attributes, formData.raceAttributes)

 let finalAttributesSum =  attributesSum.map(e => {
   return Math.floor((e - 10) / 2)
 });

 for (let i = 0; i < finalAttributesSum.length; i++) { 
  finalCharacterAttributes[i].value = finalAttributesSum[i];
 }

 return (
  <div >
   <div className={style.finalCharacter_wrapper}>
    <div className={style.finalCharacter_info}>
     <div className={style.finalCharacter_info_top}>
      <div className={style.finalCharacter_avatar}/>
      <div className={style.finalCharacter_text}>
       <div>Name : {formData.username}</div>
       <div>Race : {formData.race}</div>
       <div>Class : {formData.class}</div> 
       <div>History : Monk</div> 
       <div>Attitude : Lawful Good</div> 
       <div>Level : 1</div> 
      </div>
     </div>
     <div className={style.finalCharacter_hitpoints}>Hitpoints</div>
     <div className={style.finalCharacter_hitpoints_box}>
     <div>Your Current Hitpoints<p>{formData.finalCharacterAttributes[2].value + formData.hitDie}</p></div>
     <div>Your Max Hitpoints<p>{formData.finalCharacterAttributes[2].value + formData.hitDie}</p></div>
      <div>Your Hit Dice<p>{formData.hitDie}</p></div>
      </div>
      <div className={style.finalCharacter_additional_attributes}>
       <div>Proficiency bonus</div>
       <div>Passive wisdom</div>
       <div>Inpiration</div>
       </div>
     <div className={style.finalCharacter_info_bot}>
       </div>
    </div>
      <FinalCharacterSkills formData={formData} />
   </div>
   <button className={style.button} onClick={() => {
     setPage(page - 1)
    }}>
        Previous
      </button>
  </div>
 );
};

export default FinalCharacter;