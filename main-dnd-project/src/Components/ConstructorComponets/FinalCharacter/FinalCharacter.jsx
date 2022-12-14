import { useEffect, useState } from 'react';
import FinalCharacterSkills from './FinalCharacterSkills';
import style from './FinalCharacter.module.css'
import { getApiResource } from '../../../api/api';
import { DND } from '../../../constants/constantsApi';
import ClassStats from '../ClassStats/ClassStats';
const FinalCharacter = ({ page, setPage, formData, setFormData }) => {

 return (
  <div >
   <div className={style.finalCharacter_wrapper}>
    <div className={style.finalCharacter_info}>
     <div className={style.finalCharacter_info_top}>
      <div className={style.finalCharacter_avatar} >
       {<img className={style.finalCharacter_avatar} src={formData.avatar} alt="" />}
      </div>
      <div className={style.finalCharacter_text}>
       <div>Name : {formData.username} </div>
       <div>Race : {formData.race.name} </div>
       <div>Class :{formData.class.name} </div> 
       <div>History : Monk</div> 
       <div>Attitude : Lawful Good</div> 
       <div>Level :{formData.level} </div> 
      </div>
     </div>
     <div className={style.finalCharacter_hitpoints}>Additional Attributes</div>
    <div className={style.finalCharacter_additional_attributes}>
      <div className={style.additional_attributes_template}>Your Current Hitpoints<p>{formData.class.hit_die + formData.stats[2].value }</p></div>
       <div className={style.additional_attributes_template}>Your Max Hitpoints<p>{formData.class.hit_die + formData.stats[2].value }</p></div>
       <div className={style.additional_attributes_template}>Your Hit Dice<p>{formData.class.hit_die}</p></div>
       <div className={style.additional_attributes_template}>Proficiency bonus<p>{formData.level} </p></div>
      <div className={style.additional_attributes_template}>Passive wisdom<p>{formData.stats[4].value + 10}</p></div>
       <div className={style.additional_attributes_template}>Inspiration<p>1</p></div>
     </div>
    </div>
    <div className={style.finalCharacter_attributes}>
     <div className={style.finalCharacter_title}>Your Character Modifires</div>
     <div className={style.finalCharacter_modifires}>
      
       {formData.stats.map((e) => {
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