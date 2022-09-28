import React from 'react';
import './Body.css'
import Header from './Header/Header';

const Body = () => {
 return (
  <div id='container' className='container'>
   <div className="main_page_wrapper">
    <div className="main_block">
     <Header/>
    </div>
   </div>
  </div>
 );
};

export default Body;