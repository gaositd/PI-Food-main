import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, } from 'react-router-dom';
import {
  getRecipes,
} from '../../action/allActions';
import { Pagination } from "./pagination/pagination";
import { RECIPES_PER_PAGE } from "../../constants/constants.js"
import './home.css';
import complexSearch from '../../json/recipes.json';
import { Navbar } from '../navbar/navbar';

export function Home(){
  //images per page
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(RECIPES_PER_PAGE);
  
  let dispatch = useDispatch();
  let recipes = useSelector(state =>state.allRecipes);
  useEffect(()=> dispatch(getRecipes()),[dispatch]);

  const diet = useSelector(state => state.filterDiet);
  const byName = useSelector(state => state.byName);
  //use json file when apear message 402
  if(recipes.hasOwnProperty("msg")){
    recipes = [];
    recipes = complexSearch;
  }
  console.log(byName);
  const newRecipes = recipes.filter(recipe =>{
     return recipe.diets.includes(diet.toLowerCase()); 
    }
  );
  if(newRecipes.length > 0){
    recipes = [];
    recipes = newRecipes;
  }
  
  let maxPages = Math.round(recipes.length / RECIPES_PER_PAGE);

  return(
    <React.Fragment>
      <Navbar />
      {
        newRecipes.length === 0 ? <span className="text">We don't have any recipes with this diet or select your diet</span> : ""
      }
      <br />
      <h1 className="text">All Recipes, move between recipes ➭ </h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPages={maxPages}
        totalRecipes={recipes.length}
      />
      <div className="homeContainer">
      {
        !!recipes.length ?
          recipes
            .slice((currentPage - 1) * perPage,
                   (currentPage - 1 ) * perPage + perPage)//currentPage, RECIPES_PER_PAGE)
            .map(recipe =>{
          return(
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="recipeCard" title={recipe.name}>
                <img src={recipe.image} with="auto" height="auto" alt={recipe.name} />
              </div>
            </Link>)
          }) : <p  className="font title">Loading...</p>
      }
      </div>
    </React.Fragment>
  );
}