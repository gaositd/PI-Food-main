import React, {
  useState,
  // useEffect,
} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setRecipe } from '../../action/allActions.js';
import { Checkboxes } from "./checkBoxes/checkBoxes";
import './newRecipe.css';
// import { ErrorPopUp } from "../error/error";
// import crypto from 'crypto';

export function validate(input) {
  let errors = {};
  
  if(!input.dishName){
    errors.dishName = " Please enter a name of dishname ";
  }else if(input.dishName.length < 4){
    errors.dishName = " Please enter a valid name of dishname ";
  }

  if(!input.summary){
    errors.summary = " Please enter a summary ";
  }else if(input.summary.length <= 40){
    errors.summary = " Please enter a valid summary of dish ";
  }

  return errors;
}

export function NewRecipe(){
  const [input, setInput] = useState({
    dishName:'',
    summary:'',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange =(event)=>{
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  return(
    <main className="mainPage">
      <form className="form" onSubmit={handleSubmit} >
        <div className="labelInput">
          <label htmlFor="dishName" className="text">Dish Name *</label>
            <input
              className={!errors ? errors.dishName & 'error' :'inputText'}
              type="text"
              id="dishName"
              name="dishName"
              placeholder="Full Recipe Name"
              value={input.dishName}
              onChange={handleInputChange}
            />
            {
            errors.dishName && (
              <div className="error">{errors.dishName}</div>
          )}
        </div>
        <div className="labelInput">
          <label htmlFor="summary" className="text">Summary *</label>
            <textarea
              className={!errors ? errors.summary & 'error' :"txtArea"}
              name="summary"
              id="summary"
              placeholder="Summary recipe"
              cols="46" rows="5"
              value={input.summary}
              onChange={handleInputChange}
            />
            {
            errors.summary && (
              <div className="error">{errors.summary}</div>
          )}
        </div>
        <div className="labelInput">
          <label htmlFor="steps" className="text">Recipe step by step</label>
            <textarea className="txtArea" name="steps" id="steps" placeholder="Recipe step by step" cols="46" rows="5"/>
        </div>
        <div className="labelInput">
          <label htmlFor="healthy" className="text">Healthy level</label>
            <input
              className="inputText"
              type="number"
              id="healthy"
              name="healthy"
              min="0"
              max="100"
              placeholder="Healthy level 1 to 100"
            />
        </div>
        <div className="labelInput">
        <label htmlFor="healthy" className="text">Load a Image from URL</label>
          <input
            type="text"
            id="picture"
            name="picture"
            className="inputText"
            placeholder="example path https://www.myImage.com/food.png"
          />  
        </div>
        <div className="labelInput">
          <label htmlFor="score" className="text">Score Recipe</label>
            <input
              className="inputText"
              type="number"
              id="score"
              name="score"
              min="0"
              max="100"
              placeholder="Score 1 to 100"
            />
        </div>
        <div>
          <label htmlFor="diets" className="text"> Select your(s) diet(s)
            <Checkboxes />
          </label>
        </div>
        <div className="button">
          <button
            type="submit"
            className="btn btn-large"
          >
            Send Recipe
          </button>
        </div>
      </form>
    </main>
  )
}
/*  https://www.petitchef.es/recetas/plato/tacos-vegetarianos-con-lentejas-fid-1572375 */