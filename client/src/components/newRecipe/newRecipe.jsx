import React, {
  useState,
  useEffect,
} from "react";
import {
  setRecipe,
  getDiets,
} from '../../action/allActions.js';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './newRecipe.css';

let sendRecipe = {
  name:"",
  summary:"",
  healthyLevel:0,
  image:"",
  healthScore:0,
  dishType:"",
  steps:"",
  diets:"",
};
let checks = [];
export function validate(input, checks) {
  let errors = {};
  
  const numbersRegex = RegExp(/^[1-9][0-9]?$|^100/);
  const urlRegex = RegExp( /^(ftp|http|https):\/\/[^ "]+$/);
  
  if(!input.dishName){
    errors.dishName = "Please enter a recipe name";
  }else if(input.dishName.length < 4){
    errors.dishName = "Please enter a valid dishname name";
  }else{
    sendRecipe.name = input.dishName;
  }

  if(!input.summary){
    errors.summary = "Please enter a summary ";
  }else if(input.summary.length <= 40){
    errors.summary = "Please enter a valid dish summary";
  }else{
    sendRecipe.summary = input.summary;
  }

  if(input.steps){
    sendRecipe.steps = input.steps;
  }

  if(input.healthy){
    if(!numbersRegex.test(input.healthy)){
      errors.healthy = "Please enter a health number between 0 and 100"
    }else{
      sendRecipe.healthyLevel = input.healthy;
    }
  }

  if(input.picture){
    if(!urlRegex.test(input.picture)){
      errors.picture = "Please enter a valid picture URL"
    }else{
      sendRecipe.image = input.picture;
    }
  }else{
    sendRecipe.image = "https://static.wixstatic.com/media/44e15e_07f8ad9e95f240fda9e67ba90a986899~mv2.jpg/v1/fit/w_2500,h_1330,al_c/44e15e_07f8ad9e95f240fda9e67ba90a986899~mv2.jpg";
  }

  if(input.dishType){
    sendRecipe.dishType = input.dishType;
  }
  
  if(!numbersRegex.test(input.healthScore)){
    errors.score = " Please enter a score number between 0 and 100"
  }else{
    sendRecipe.healthScore = input.healthScore;
  }

  if(checks) {console.log(checks); sendRecipe.diets = checks;}
  
  return errors;
  
}

export function NewRecipe(){
  const [input, setInput] = useState({
    dishName:'',
    summary:'',
  });
  const [errors, setErrors] = useState({});
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange =(event)=>{
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value,
    }, checks.toString()));
  }
  const dietsCheckBox = useSelector(state => state.allDiets);
  
  useEffect(()=> dispatch(getDiets()),[dispatch]);

  function handleCheckChange(e){
    if(!checks.includes(e.target.value)){
      checks.push(e.target.value);
    }else{
      checks = checks.filter(check => check !== e.target.value);
    }
    sendRecipe.diets = checks.toString();
    console.log(checks);
  }

  function handleSubmit(event){
  if(!input.dishName || !input.summary){
    alert('No submited, check mandatory fields');
    event.preventDefault();
    return;
  }else{
    dispatch(setRecipe(sendRecipe));
    alert("Recipe was saved, it will be redirected to home page.");
    history('/home');
  }
  
  }

  return(
    <main className="mainPage">
      {/* <form className="form" onSubmit={handleSubmit} > */}
      <form className="form" >
        <div className="labelInput">
          <label htmlFor="dishName" className="text">Recipe Name *</label>
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
            <textarea
              className="txtArea"
              name="steps"
              id="steps"
              placeholder="Recipe step by step"
              cols="46"
              rows="5"
              onChange={handleInputChange}
            />
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
              onChange={handleInputChange}
            />
        </div>
        {/* <div className="labelInput">
          <label htmlFor="score" className="text">Score Recipe</label>
            <input
              className="inputText"
              type="number"
              id="healthScore"
              name="healthScore"
              min="0"
              max="100"
              placeholder="Score 1 to 100"
              onChange={handleInputChange}
            />
        </div> */}
        <div className="labelInput">

        <label htmlFor="healthy" className="text">Dish Type</label>
          <input
            type="text"
            id="dishType"
            name="dishType"
            className="inputText"
            placeholder="Dish type names separated by commas (pate, casserole, spoon)"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />  
        </div>
        <div>
          <label htmlFor="diets" className="text"> Select your(s) diet(s)
            {/* <Checkboxes /> */}
            <div key="1B" className="cheboxContainer">
              {
                dietsCheckBox && dietsCheckBox.map(
                  diet =>
                  <div key={diet.ID} className="cheboxLbl" >
                    <div className="lblChekc">
                      <label htmlFor={diet.ID}>{diet.name}</label>
                    </div>
                    <div className="inputCheck">
                      <input
                        type="checkbox"
                        id={diet.ID}
                        value={diet.name}
                        name={diet.ID}
                        onChange={handleCheckChange}
                      />
                    </div>
                  </div>
                )
              }
            </div>
            {/* <Checkboxes /> */}
          </label>
        </div>
        <div className="button">
          <button
            type="submit"
            className="btn btn-large"
            onClick={handleSubmit}
          >
            Send Recipe
          </button>
        </div>
      </form>
    </main>
  )
}