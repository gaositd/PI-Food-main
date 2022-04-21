import axios from "axios";
import {
  SERVER_DIR, TYPES, GET_DIETS,
  POST_RECIPE, GET_RECIPES, RECIPES,
  GET_RECIPE, 
} from '../constants/constants.js';

//get all types of diets
function getDiets(){
  return async function(dispatch){
    try {
      const res = await axios.get(`${SERVER_DIR}${TYPES}`);
      return dispatch({ type: GET_DIETS, payload: res.data });
    } catch (err) {
      return ({ type: GET_DIETS, payload: err.message });
    }
  }
}
//get all recipes
function getRecipes(){
  return async function(dispatch){
    try {
      const res = await axios.get(`${SERVER_DIR}${RECIPES}`);
      return dispatch({type:GET_RECIPES, payload:res.data});
    } catch (err) {
      return ({ type: GET_RECIPES, payload: err.message });
    }
  }
}
//get one recipe (by ID)
function getRecipe(id){
  return async function(dispatch){
    try {
      const res = await axios.get(`${SERVER_DIR}${RECIPES}/${id}`);
      return dispatch({ type:GET_RECIPE, payload:res.data});
    } catch (err) {
      return ({ type: GET_RECIPE, payload: err.message });
    }
  }
}
//data in server
function setRecipe(data){
  axios.post(`${SERVER_DIR}${POST_RECIPE}`)
       .then(res => res.data)
      //  .catch(err =>{msg: `${err.message}`});
}

export {
  getDiets,
  setRecipe,
  getRecipes,
  getRecipe,
};