import React from 'react';
import style from './HelpPanel.module.css'

const HelpPanel = ({ page, setPage, setFormData, formData }) => {
 
 const createBySite =() => {
 let attributes = Array.from({length: 6}, () => Math.floor(Math.random() * (20-1) + 1))
  setFormData({ ...formData, attributes: attributes });
  setPage(page + 1);
}

 return (
  <div>
   <div className="help_wrapper">
    <div className={style.container}>
     <div className={style.help_pick}>Create by your own</div>
     <div className={style.help_pick} id={style.step} onClick={createBySite}>Step-by-step</div>
    </div>
      
   </div>
  </div>
 );
};

export default HelpPanel;