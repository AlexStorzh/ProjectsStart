import React from 'react';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home';
import {Routes, Route,Link,Outlet} from 'react-router-dom'

const App = () => {
 return (
  <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/constructor' element={<Body/> } />
   </Routes>
  </>
 );
};

export default App;