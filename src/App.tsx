import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';
import Oursevices from './Components/Ourservices';
import Ourstaff from './Components/Ourstaff';

function App() {
  return (
   
<Routes>
      <Route path='' element={<Navbar />} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/service' element={<Oursevices/>} />
      <Route path='/staff' element={<Ourstaff/>} />
</Routes>
  );
}

export default App;
