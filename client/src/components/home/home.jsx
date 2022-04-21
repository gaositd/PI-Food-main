import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, } from 'react-router-dom';
import { getRecipes } from '../../action/allActions';
import './home.css';

export function Home(){
  const dispatch = useDispatch();
  const recipes = useSelector(state =>state.allRecipes);
  useEffect(()=> dispatch(getRecipes()),[dispatch]);

  return(
    <React.Fragment>
      <br />
      <h1 className="text">All Recipes move between recipes</h1>
      <div className="homeContainer">
      {
        recipes.recipes100PI && recipes.recipes100PI.map(recipe =>{
          return(
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="recipeCard" title={recipe.name}>
              <img src={recipe.image} with="auto" height="auto" alt={recipe.name} />
            </div>
          </Link>)
        })
      }
      </div>
    </React.Fragment>
  );
}