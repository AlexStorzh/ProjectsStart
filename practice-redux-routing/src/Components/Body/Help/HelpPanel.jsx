import React from 'react';
import style from './HelpPanel.module.css'

const HelpPanel = ({page, setPage}) => {
 return (
  <div>
   <div className="help_wrapper">
    <div className={style.container}>
     <div className={style.help_pick}>Create by your own</div>
     <div className={style.help_pick} id={style.step} onClick={() => {
     setPage(page + 1)
    }}>Step-by-step</div>
    </div>
      
   </div>
  </div>
 );
};

export default HelpPanel;