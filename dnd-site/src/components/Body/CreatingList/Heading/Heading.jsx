import React from 'react';
import style from './Heading.module.css'
import Info from './Info';
const Heading = () => {
 const info = [
  { id: 1, name: 'Name'},
  { id: 2, name: 'Age'},
  { id: 3, name: 'Experience'},
  { id: 4, name: 'History'},
  { id: 5, name: 'Class'},
  { id: 6, name: 'Attitude'},
]

 return (
  <div className={style.heading}>
   <div className={style.character_name}><input type="text" placeholder='Your Name!' className={style.character_name_input} /></div>
   <div className={style.character_info}>
    {info.map(e =>
     <Info e={e} key={e.id} />)}
   </div>
  </div>
 );
};

export default Heading;