import {
  GET_DIETS, GET_RECIPES, SET_RECIPE,
  GET_RECIPE, 
} from'../constants/constants.js';
const initialState ={
  allDiets:[],
  saveRecipe:{},
  allRecipes:[],
  recipe:{},
};

const routeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DIETS:
      return {
        ...state,
        allDiets: action.payload,
      }
    case GET_RECIPES:
      return {
        ...state,
        allRecipes:action.payload,
      }
    case GET_RECIPE:{
      return{
        ...state,
        recipe:action.payload,
      }
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