import React from 'react';
import './App.css'
import Body from './Components/Body/Body';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Body/Home';



import {Routes, Route,Link,Outlet} from 'react-router-dom'

const App = () => {
 return (
  <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/constructor' element={<Body/> } />
   </Routes>
  </>
 );
};

export default App;