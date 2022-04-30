import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Glass from '../../../images/magnifier.png';
import { recipesByWord } from "../../../action/allActions";


export function SearchRecipe(){
  const dispatch = useDispatch();
  let recipes = useSelector(state =>state.allRecipes);//get all recipe
  let searchRecipes;
  useEffect(()=> 
    dispatch(recipesByWord(recipes)),[recipes]
  );

  function handleSendRecipes(){
    const text = document.getElementById("searchNavBar").value.toLowerCase();
    if(text){
      searchRecipes = recipes.filter(recipe =>{
        return recipe.name.toLowerCase().includes(text.toLowerCase());
      });
      // recipes = searchRecipes;
      // return searchRecipes
      dispatch(recipesByWord(text.toLowerCase()));
    }
  }

  return(
    <div className="searchNavBar">
      <Link to="/home" recipes={searchRecipes}>
        <img src={Glass} alt="Magnify glass" className="glass" height="25vh" onClick={handleSendRecipes} />
      </Link>
      <input type="text" name="searchNavBar" id="searchNavBar" className="searchNavBar" />
    </div>
  )

}