import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

export function Home(){
  return(
    <React.Fragment>
      <br />
      <h1 className="text">All Recipes move between recipes</h1>
      <div className="homeContainer">
        <Link to="/recipe">
          <div className="recipeCard"></div>
          </Link>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
        <div className="recipeCard"></div>
      </div>
    </React.Fragment>
  );
}