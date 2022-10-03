import React, { useState } from 'react';
import './Body.css'
// import Header from './Header/Header';
import CreatingList from './CreatingList/CreatingList';


const Body = () => {

const [showList, setShowList] = useState(false)
 
 return (
  <div id='container' className='container'>
   <div className="main_page_wrapper">
    <div className="main_block" >
     <div className="header">
      <div className={'create__btn' + (showList ? '__active' : '')} onClick={() => setShowList(!showList)}>
   Click to create a new character!
       </div>
  </div>
     {showList && <CreatingList />}
    </div>
   </div>
  </div>
 );
};

export default Body;