import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export function Navbar(){
  const history = useNavigate();

  function handleButtom(){
    history('/newRecipe');
  }
  return(
    <header className="navbar-header">
      <section className="navBar navbar-sideLeft">
        <select className="navSelect" id="navSelect" name="navSelect">
          <option> </option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
      </section>
      <section className="navBar navbar-sideCenter">
        <div className="navbar-Sort">
          <span className="text"> | </span>
          <button id="dietUp" className="btnNavBar">Up</button>
            <span className="text">Sort by diet</span>
          <button id="dietDown" className="btnNavBar">Down</button> 
          <span className="text"> | </span>
          <button id="healtUp" className="btnNavBar">Up</button>
          <span className="text">Sort by Healthy</span>
          <button id="healtDown" className="btnNavBar">Down</button>
          <span className="text"> | </span>
          <button id="nameUp" className="btnNavBar">Up</button>
          <span className="text">Sort by Recipe</span>
          <button id="nameDown" className="btnNavBar">Down</button>
          <span className="text"> | </span>
        </div>
      </section>
      <section className="navBar navbar-sideRight">
        <input type="text" name="searchNavBar" id="searchNavBar" className="searchNavBar" />
        <button className="btnSearch" id="createRecipe" name="createRecipe" onClick={handleButtom}>
          Create Recipe
        </button>
      </section>
    </header>
  );
}