import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from '../../../action/allActions';
import { Card } from'../card/card';

export function Cards(){
  const dispatch = useDispatch();
  const recipes = useSelector(state =>state.allRecipes);
  useEffect(()=> dispatch(getRecipes()),[dispatch]);
  return (
    <React.Fragment>
      <br />
      <h1 className="text">All Recipes move between recipes</h1>
      {/* {console.log("recipes.recipes100PI")}{console.log(recipes.recipes100PI)} */}
        {
          // recipes.recipes100PI && recipes.recipes100PI.map(recipe =><span key={recipe.id}>`${recipe.name}`</span>)
          recipes.recipes100PI && recipes.recipes100PI.map(recipe =>(<Card
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            healthScore={recipe.healthScore}
            summary={recipe.summary}
            dishTypes={recipe.dishTypes}
            diets={recipe.diets}
            steps={recipe.analizedInstructions}
          />))
        }
      
      <div className="homeContainer">
        <Link to="/recipe">
          <div className="recipeCard"></div>
        </Link>
        {/* <Link to="/recipe">
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
        </Link> */}
      </div>
    </React.Fragment>
  );
}