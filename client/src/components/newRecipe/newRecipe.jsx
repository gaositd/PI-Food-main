import React from "react";

export function NewRecipe(){
  function handleSubmit(e){
    e.preventDefault();
  }

  return(
    <main className="main">
      <form onsubmit={handleSubmit}>
        <input type="text" id="dishName" name="dishName" placeholder="Full Dish Name" />
        <textarea name="summary" id="summary" placeholder="Summary recipe" />
        <textarea name="steps" id="steps" placeholder="Recipe step by step" />
        <div className="oneRow">
          <select name="diets" className="diets" id="diets" >
            <option> </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <input type="number" id="healthy" name="healthy" min="0" max="10" />
          <input type="number" id="score" name="score" min="0" max="10" />
        </div>
      </form>
    </main>
  )
}