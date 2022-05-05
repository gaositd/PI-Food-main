import axios from "axios";
import {
  SERVER_DIR, TYPES, GET_DIETS,
  POST_RECIPE, GET_RECIPES, RECIPES,
  GET_RECIPE, FILTER_DIET, SORT_NAME,
  SEARCH_RECIPES, SEND_DIETS, 
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
//send to server
function setRecipe(recipe){
  return async function(){
    try{
      const res = await axios.post(`${SERVER_DIR}${POST_RECIPE}`,recipe);
      return res;
    }
    catch (err) {
      return ({ type: POST_RECIPE, payload: err.message });
    }
  }
}

//filter and order data
function filterByDiet(diet){
  return { 
    type: FILTER_DIET,
    payload: diet
  };
}

function sortBy(sort){
  return {
    type:SORT_NAME,
    payload: sort
  }
}

function recipesByWord(searchRecipes){
  return {
    type:SEARCH_RECIPES,
    payload: searchRecipes
  }
}

function sendDiets(diets){
  return {
    type:SEND_DIETS,
    payload: diets
  }
}

export {
  getDiets,
  setRecipe,
  getRecipes,
  getRecipe,
  filterByDiet,
  sortBy,
  recipesByWord,
  sendDiets,
};