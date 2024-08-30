import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import "./App.css";
import Confirmation from './Confirm';
import Members from './Members';
import Navbar from './Navbar';


const App = () => {
  return (
    < >
        
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm" element={<Confirmation />} /> 
          <Route path="/list" element={<Members />} /> 
       </Routes>

    </>
  );
}

export default App;
