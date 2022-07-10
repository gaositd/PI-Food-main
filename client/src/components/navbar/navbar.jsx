import React, {
  useEffect,
} from "react";
import {
  useNavigate
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { SelectOption } from "./selectOption/selectOption";
import { sortBy } from "../../action/allActions";
import { SearchRecipe } from './searchRecipe/searchRecipe'
import './navbar.css';

export function Navbar(){
  const history = useNavigate();
  let dispatch = useDispatch();

  function handleButtom(){
    history('/newRecipe');
  }
  // let recipes = useSelector(state =>state.allRecipes);//get all recipe
  const handleClick =(event)=>{
    dispatch(sortBy(event.target.id));
  }
  useEffect(()=> dispatch(sortBy()),[dispatch]);
  // useEffect(()=> dispatch(sortBy()),[dispatch]);
//useEffect(()=> dispatch(recipesByWord(recipes)),[recipes]
  // );

  return(
    <header className="navbar-header">
      <section className="navBar navbar-sideLeft">
        <SelectOption />
      </section>
      <section className="navBar navbar-sideCenter">
        <div className="navbar-Sort">
          <span className="text"> | </span>
          <button id="healtUp" className="btnNavBar" onClick={handleClick}>Up</button>
          <span className="text">Sort by Healthy</span>
          <button id="healtDown" className="btnNavBar" onClick={handleClick}>Down</button>
          <span className="text"> | </span>
          <button id="nameUp" className="btnNavBar" onClick={handleClick}>Up</button>
          <span className="text">Sort by Recipe</span>
          <button id="nameDown" className="btnNavBar" onClick={handleClick}>Down</button>
          <span className="text"> | </span>
        </div>
      </section>
      <section className="navBar navbar-sideRight">
        <SearchRecipe />
        <button className="btnSearch" id="createRecipe" name="createRecipe" onClick={handleButtom}>
          New Recipe
        </button>
      </section>
    </header>
  );
}