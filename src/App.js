import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allexercise from './component/allexercise';
import Equipment from './component/equipment';
import Muscles from './muscles';
import Navbar from './component/navbar';
import Bodyparts from './component/bodyparts';
import Home from './component/home';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        hi 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodyparts" element={<Bodyparts />} />
          <Route path="/exercises" element={<Allexercise />} />
          <Route path="/equipments" element={<Equipment />} />
          <Route path="/target muscles" element={<Muscles />} />
        </Routes>
      </div>
    </Router>)
};

export default App;
