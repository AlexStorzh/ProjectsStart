
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

console.log(formData)

 return (
  <div >
   <div className={style.finalCharacter_wrapper}>
    <div className={style.finalCharacter_info}>
     <div className={style.finalCharacter_info_top}>
      <div className={style.finalCharacter_avatar} >
       {<img className={style.finalCharacter_avatar} src={formData.avatar} alt="" />}
      </div>
      <div className={style.finalCharacter_text}>
       <div>Name : {formData.username}</div>
       <div>Race : {formData.race}</div>
       <div>Class : {formData.class}</div> 
       <div>History : Monk</div> 
       <div>Attitude : Lawful Good</div> 
       <div>Level : {formData.level}</div> 
      </div>
     </div>
     <div className={style.finalCharacter_hitpoints}>Additional Attributes</div>
    <div className={style.finalCharacter_additional_attributes}>
       <div className={style.additional_attributes_template}>Your Current Hitpoints<p>{formData.finalCharacterAttributes[2].value + formData.hitDie}</p></div>
       <div className={style.additional_attributes_template}>Your Max Hitpoints<p>{formData.finalCharacterAttributes[2].value + formData.hitDie}</p></div>
       <div className={style.additional_attributes_template}>Your Hit Dice<p>{formData.hitDie}</p></div>
       <div className={style.additional_attributes_template}>Proficiency bonus<p>2</p></div>
      <div className={style.additional_attributes_template}>Passive wisdom<p>{formData.finalCharacterAttributes[5].value}</p></div>
       <div className={style.additional_attributes_template}>Inspiration<p>1</p></div>
     </div>
    </div>
    <div className={style.finalCharacter_attributes}>
     <div className={style.finalCharacter_title}>Your Character Modifires</div>
     <div className={style.finalCharacter_modifires}>
       {finalCharacterAttributes.map((e) => {
         return (
          <>
           <div>
            <li key={e.index}>{e.name}</li>
            <p>{e.value}</p>
           </div>
          </>
         )
        })}
     </div>
      <FinalCharacterSkills formData={formData} />
    </div>
    
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