import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Ourstaff from './Components/Ourstaff';
import Home from './Components/Home';
import OurProducts from './Components/Ourservices';
import Navbar from './Components/Navbar';

function App() {
  return (

    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/product' element={<OurProducts />} />
        <Route path='/staff' element={<Ourstaff />} />
      </Routes>
    </div>
  );
}

export default App;
