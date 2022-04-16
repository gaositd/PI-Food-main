import React from "react";
import { Link } from 'react-router-dom';
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
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
      </div>
    </React.Fragment>
  );
}