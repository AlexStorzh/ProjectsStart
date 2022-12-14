import React from 'react';
import style from './HelpPanel.module.css'
import { attributesFullName } from '../../../constants/constants';

const HelpPanel = ({ page, setPage, setFormData, formData }) => {
 


 return (
  <div>
   <div className="help_wrapper">
    <div className={style.container}>
     <div className={style.help_pick}>Create by your own</div>
     {/* <div className={style.help_pick} id={style.step} onClick={createBySite}>Step-by-step</div> */}
    </div>
      
   </div>
  </div>
 );
};

export default HelpPanel;