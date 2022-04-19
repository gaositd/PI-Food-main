import {
  GET_DIETS, SET_RECIPE
} from'../constants/constants.js';
const initialState ={
  allDiets:[],
  saveRecipe:{}
};

const routeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DIETS:
      return {
        ...state,
        allDiets: action.payload,
      }
    case SET_RECIPE:
      return {
        saveRecipe:action.payload,
      }
    default:
      return state
  }
}

export default routeReducer;