import React, {
  useEffect,
  // useState
} from "react";
import {
  // Link,
  useNavigate
} from 'react-router-dom';
import { /*useSelector,*/useDispatch } from "react-redux";
import { SelectOption } from "./selectOption/selectOption";
import { sortBy/*, getRecipes*/ } from "../../action/allActions";
import { SearchRecipe } from './searchRecipe/searchRecipe'
import './navbar.css';

export function Navbar(){
  // let text;
  const history = useNavigate();
  let dispatch = useDispatch();
  // const byName = useSelector(state => state.byName);

  function handleButtom(){
    history('/newRecipe');
  }

  const handleClick =(event)=>{
    dispatch(sortBy(event.target.id));
  }
  useEffect(()=> dispatch(sortBy()),[dispatch]);

  return(
    <header className="navbar-header">
      <section className="navBar navbar-sideLeft">
        <SelectOption />
      </section>
      <section className="navBar navbar-sideCenter">
        <div className="navbar-Sort">
          {/* <span className="text"> | </span>
          <button id="dietUp" className="btnNavBar" value='dietUp' onClick={handleClick}>Up</button>
            <span className="text">Sort by diet</span>
          <button id="dietDown" className="btnNavBar" onClick={handleClick}>Down</button>  */}
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
        {/* <div className="searchNavBar">
          <Link to="">
            <img src={Glass} alt="Magnify glass" className="glass" height="25vh" onClick={getText} />
          </Link>
          <input type="text" name="searchNavBar" id="searchNavBar" className="searchNavBar" onBlur={handleSendRecipes} />
        </div> */}
        <SearchRecipe />
        <button className="btnSearch" id="createRecipe" name="createRecipe" onClick={handleButtom}>
          Create Recipe
        </button>
      </section>
    </header>
  );
}