import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './/App.css';
import Body from './components/Body/Body'

function App() {




  return (
   <div className='App'>
    <Body/>
     <Router>
      <Navbar />
      <Routes>
       <Route path ='/' />
      </Routes>
     </Router>
     
    
   </div>
  );
}

export default App;
