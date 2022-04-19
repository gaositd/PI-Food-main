import React, { 
  useState,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRecipe } from '../../action/allActions.js';
import { Checkboxes } from "./checkBoxes/checkBoxes";
import './newRecipe.css';
import { errorPopUp } from "../error/error";
import crypto from 'crypto';

export function NewRecipe(){
  const [input, setInput] = useState({
    dishName:'',
    summary:'',
  });

  let data;
  
  // const dispatch = useDispatch();
  // const saveRecipe = useSelector(state => state.saveRecipe);
  // useEffect(()=> dispatch(setRecipe(data)),[dispatch]);
  
  function validate(input) {
    if(input.name === 'dishName' || input.name === 'summary'){
      errorPopUp(`${input.name} mandatory field`);
      return false;
    }else{
      return true;
    }
  }

  function handleChange(event){
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    //validate(event.target);
    data={
      id: crypto.randomUUID(),
      name:event.target.value,
      image:'ruta',
      healtScore:99,
      summary:event.target.value,
      healthyLevel:21,
      stepByStep:event.target.value,
      dietType:event.target.value,
      createInDb: true,
    }
  }
  // https://www.petitchef.es/recetas/plato/tacos-vegetarianos-con-lentejas-fid-1572375
  function handleSubmit(event){
    event.preventDefault();
    const value =  event.target.value;
    // if(validate(value)){
    //   alert("form was to send it");
    // }
  }


  return(
    <main className="mainPage">
      <form className="form" onSubmit={handleSubmit} >
        <div className="labelInput">
          <label htmlFor="dishName" className="text">Dish Name <span className="mandatory">*</span></label>
            <input
              className="inputText"
              type="text"
              id="dishName"
              name="dishName" placeholder="Full Recipe Name"
              value={input.dishName}
              onChange={handleChange}
            />
        </div>
        <div className="labelInput">
          <label htmlFor="summary" className="text">Summary <span className="mandatory">*</span></label>
            <textarea
              className="txtArea"
              name="summary"
              id="summary"
              placeholder="Summary recipe"
              cols="46" rows="5"
              value={input.summary}
              onChange={handleChange}
            />
        </div>
        <div className="labelInput">
          <label htmlFor="steps" className="text">Recipe step by step</label>
            <textarea className="txtArea" name="steps" id="steps" placeholder="Recipe step by step" cols="46" rows="5"/>
        </div>
        <div className="labelInput">
          <label htmlFor="healthy" className="text">Healthy level</label>
            <input className="inputText" type="number" id="healthy" name="healthy" min="0" max="100" placeholder="Healthy level 1 to 100"/>
        </div>
        <div className="labelInput">
          <label htmlFor="healthy" className="text">Loada Image Recipe</label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="inputText"
              accept="image/png, .jpeg, .jpg, image/gif"
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