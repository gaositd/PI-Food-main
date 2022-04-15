import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/landing/langing';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { NewRecipe } from './components/newRecipe/newRecipe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path="/newRecipe" element={<NewRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
