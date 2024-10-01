import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import "./App.css";
import Confirmation from './Confirm';


const App = () => {
  return (
    < >
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirm" element={<Confirmation />} /> 
       </Routes>

    </>
  );
}

export default App;
