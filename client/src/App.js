import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/landing/langing';
import { Home } from './components/home/home';
import { NewRecipe } from './components/newRecipe/newRecipe';
import { Recipe } from './components/recipe/recipe';
import { ErrorPage } from './components/errors/error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path="/newRecipe" element={<NewRecipe />} />
        <Route exact path='/recipe/:id' element={<Recipe />} />
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
