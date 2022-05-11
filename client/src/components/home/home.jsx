import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, } from 'react-router-dom';
import {
  getRecipes,
  sortBy,
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

  // let ordered = useSelector(state => state.byName);
  useEffect(()=> dispatch(sortBy),[dispatch]);

  const diet = useSelector(state => state.filterDiet);
  //use json file when apear message 402
  
  if(recipes){
    if(recipes.hasOwnProperty("msg")){
      recipes = [];
      recipes = complexSearch;
    }
  }
  
  let newRecipes = {};
  if(diet){
    newRecipes = recipes.filter(recipe =>{
        return recipe
          .diets
          .includes(diet);
      }
    );

    if(newRecipes.length > 0){
      recipes = [];
      recipes = newRecipes;
    }
  }
  
  const SearchRecipe = useSelector(state => state.recipesByWord);
  if(SearchRecipe.length > 0){
    recipes = SearchRecipe;
  }

  let maxPages = Math.round(recipes.length / RECIPES_PER_PAGE);

  return(
    <React.Fragment>
      <Navbar />
      { newRecipes.length === 0 ? <span className="text">We don't have any recipes with this diet or select your diet</span> : "" }
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
                   (currentPage - 1 ) * perPage + perPage)
            .map(recipe =>{
          return(
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="recipeCard" title={recipe.name}>
                <img src={recipe.image} with="auto" height="auto" alt={recipe.name} />
                <div className="textTitle">{recipe.name}</div>
              </div>
            </Link>)
          }) : <p  className="font title">Loading...</p>
      }
      </div>
    </React.Fragment>
  );
}