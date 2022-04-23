import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getRecipe } from '../../action/allActions';
import './recipe.css';

export function Recipe(){
  const params = useParams();
  const id = parseInt(params.id);
  const dispatch = useDispatch();
  const oneRecipe = useSelector(state => state.recipe);
  useEffect(()=> dispatch(getRecipe(id)),[dispatch, id]);

  return(
    <div className="recipeContainer">
      <div className="imageSummary">
        <img src={oneRecipe.image} alt={oneRecipe.name} title={oneRecipe.name} />
        <div className="paragraph">
          <h2 className="font title">{oneRecipe.name}</h2>
          <p className="summary font" dangerouslySetInnerHTML={{__html: oneRecipe.summary}}></p>
        </div>
      </div>
      <div className="typeHealt">
        <div className="type">
          <span className="font title">Dish(es)</span>
          <ul>
            {
              oneRecipe.dishTypes && oneRecipe.dishTypes.map((dish, i) =>{
                return(<li key={i} className="font list">{dish}</li>)})
            }
          </ul>
        </div>
        <div className="type">
          <span className="font title">Diet(s)</span>
          <ul className="list">
            {
              oneRecipe.diets && oneRecipe.diets.map((diet, i) =>{
                return(<li key={i} className="font">{diet}</li>)})
            }
          </ul>
        </div>
        <div className="healt">
          <p className="font title">Score Level: <span>{oneRecipe.score}</span></p>
            <p className="font title">Healt Score: <span>{oneRecipe.healthScore}</span></p>
          </div>
      </div>
      <div className="steps">
      <span className="font title mt">Step by Step</span>
      {console.log(oneRecipe.steps)}
      <ol className="listStep">
        {
          oneRecipe.hasOwnProperty("steps") ?
            oneRecipe.steps[0].map( (step, i) => <li key={i} className="font title listStep">{step}</li> ):
            <span className="font title">{oneRecipe.steps}</span>
        }
      </ol>
      </div>
    </div>
  );
}