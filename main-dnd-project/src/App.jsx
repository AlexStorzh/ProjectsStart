import React from 'react';
import './App.css'
import Constructor from './pages/Constructor/Constructor'
import NavBar from './Navigation/NavBar';
import Home from './pages/Home/Home';




import {Routes, Route} from 'react-router-dom'

const App = () => {
 return (
  <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/constructor' element={<Constructor />} />
   </Routes>
  </>
 );
};

export default App;