import {React, useState} from 'react';
import BarNav from './navbar';
import {Route, Routes} from 'react-router-dom';
import Home from'./pages/Home';
import Inscription from './pages/Inscriptions';
import Login from './pages/Login';
import Boutique from './pages/Boutique';
import Administration from './pages/Administrations';

import  'bootstrap/dist/css/bootstrap.min.css';
import './store';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isUserLoggedIn) => {
    setIsLoggedIn(isUserLoggedIn);
  };

  return (
    <>
    <BarNav isLoggedIn={isLoggedIn} />
    <div className='container'>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}/>  
        <Route path="/Home" element={<Home isLoggedIn={isLoggedIn} />}/>
        <Route path="/Boutique" element={<Boutique isLoggedIn={isLoggedIn} />}/>
        <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} />}/>
        <Route path="/Inscription" element={<Inscription />}/>
        <Route path="/administration" element={<Administration isLoggedIn={isLoggedIn} />}/>

      </Routes>  
    </div>
    
    </>
  );
}

export default App;
