import React, { useState } from 'react';
import './Body.css'
import Header from './Header/Header';
import CreatingList from './CreatingList/CreatingList';


const Body = () => {

 
 return (
  <div id='container' className='container'>
   <div className="main_page_wrapper">
    <div className="main_block" >
     <Header />
     <CreatingList />
    </div>
   </div>
  </div>
 );
};

export default Body;