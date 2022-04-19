import axios from "axios";
import {
  SERVER_DIR, TYPES, GET_DIETS,
  POST_RECIPE
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

function setRecipe(data){
  axios.post(`${SERVER_DIR}${POST_RECIPE}`)
       .then(res => res.data)
      //  .catch(err =>{msg: `${err.message}`});
}

export {
  getDiets,
  setRecipe,
};