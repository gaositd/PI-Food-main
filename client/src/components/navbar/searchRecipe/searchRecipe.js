import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Glass from '../../../images/magnifier.png';


export function SearchRecipe(){
  const dispatch = useDispatch();
  const recipes = useSelector(state =>state.allRecipes);//get all recipe
  let searchRecipes;
  useEffect(()=> dispatch(handleSendRecipes),[searchRecipes]);

  function handleSendRecipes(){
    const text = document.getElementById("searchNavBar").value.toLowerCase();
    if(text){
      console.log(recipes);
      searchRecipes = recipes.filter(recipe =>{
        return recipe.name.toLowerCase().includes(text.toLowerCase());
      });
      console.log(searchRecipes);
      return searchRecipes
    }
  }

  return(
    <div className="searchNavBar">
      <Link to="">
        <img src={Glass} alt="Magnify glass" className="glass" height="25vh" onClick={handleSendRecipes} />
      </Link>
      <input type="text" name="searchNavBar" id="searchNavBar" className="searchNavBar" />
    </div>
  )

}