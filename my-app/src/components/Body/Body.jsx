import React from 'react';
import Header from './Header/Header';
import TopText from './TopPart/TopText/TopText';
import TopFilms from './TopPart/TopFilms/TopFilms';


const Body = () => {
 return (
  <div className='body'>
   <Header />
   <TopText />
   <TopFilms/>
  </div>
 );
};

export default Body;