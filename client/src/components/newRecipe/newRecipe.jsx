import React, {
  useState,
} from "react";
import { setRecipe } from '../../action/allActions.js';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkboxes } from "./checkBoxes/checkBoxes";
import './newRecipe.css';

let sendRecipe = {
  name:"",
  summary:"",
  healthyLevel:0,
  image:"",
  healthScore:0,
  steps:"",
  diets:"",
};
export function validate(input, dietsDB) {
  // const dietsDB = useSelector(state =>state.sendDiets);
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

  if(!numbersRegex.test(input.healthScore)){
    errors.score = " Please enter a score number between 0 and 100"
  }else{
    sendRecipe.healthScore = input.healthScore;
  }

  if(dietsDB) sendRecipe.diets = dietsDB;
  
  sendRecipe.diets = "";
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
  const dietsDB = useSelector(state =>state.sendDiets);
  const handleInputChange =(event)=>{
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value,
    }, dietsDB));
  }

  function handleSubmit(event){
    if(errors.length > 0){
      alert('No submited, check fields');
      event.preventDefault();
      return;
    }else{
      dispatch(setRecipe(sendRecipe));
      alert("Recipe was saved");
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
        <div className="labelInput">
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
            onClick={handleSubmit}
          >
            Send Recipe
          </button>
        </div>
      </form>
    </main>
  )
}
/*  https://www.petitchef.es/recetas/plato/tacos-vegetarianos-con-lentejas-fid-1572375 */