import axios from "axios";
import { SERVER_DIR, TYPES, GET_DIETS, } from '../constants/constants.js';

//get all types of diets
export function getDiets(){
  return function(dispatch){
    return axios.get(`${SERVER_DIR}${TYPES}`)
      .then(res =>{
        console.log("res.data");
        console.log(res.data);
        return dispatch({type: GET_DIETS, payload: res.data})
      })
      .catch((err) => ({type: GET_DIETS, payload: err.message}));
  }
}