import React from "react";
import { Checkboxes } from "./checkBoxes/checkBoxes";
import './newRecipe.css';

export function NewRecipe(){
  function handleSubmit(e){
    e.preventDefault();
  }

  return(
    <main className="mainPage">
      <form onSubmit={handleSubmit} className="form">
        <div className="labelInput">
          <label htmlFor="dishName" className="text">Dish Name</label>
            <input type="text" id="dishName" name="dishName" placeholder="Full Dish Name" />
        </div>
        <div className="labelInput">
          <label htmlFor="summary" className="text">Summary</label>
            <textarea className="txtArea" name="summary" id="summary" placeholder="Summary recipe" cols="34" rows="7"/>
        </div>
        <div className="labelInput">
          <label htmlFor="steps" className="text">Recipe step by step</label>
            <textarea className="txtArea" name="steps" id="steps" placeholder="Recipe step by step" cols="34" rows="7"/>
        </div>
        <div className="labelInput">
          <label htmlFor="healthy" className="text">Healthy level</label>
            <input type="number" id="healthy" name="healthy" min="0" max="100" />
        </div>
        <div className="labelInput">
          <label htmlFor="healthy" className="text">Loada Image Recipe</label>
            <input type="file" id="file" name="file" className="file" />
        </div>
        <div className="labelInput">
          <label htmlFor="score" className="text">Score Recipe</label>
            <input type="number" id="score" name="score" min="0" max="100" />
        </div>
        <div className="oneRow">
          <label htmlFor="diets" className="text"> Select your(s) diet(s)
            <Checkboxes />
          </label>
        </div>
        <div className="button">
          <button className="btn btn-large">Send Recipe</button>
        </div>
      </form>
    </main>
  )
}