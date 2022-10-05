import React from 'react';
import Header from './Header/Header';
import TopText from './TopPart/TopText/TopText'
import TopFilms from './TopPart/TopFilms/TopFilms';
import BottomText from './BottomPart/BottomText/BottomText';
import BottomFilms from './BottomPart/BottomFilms/BottomFilms';

const Body = () => {
 return (
  <div className='body'>
   <Header />
   <TopText />
   <TopFilms />
   <BottomText />
   <BottomFilms/>
  </div>
 );
};

export default Body;