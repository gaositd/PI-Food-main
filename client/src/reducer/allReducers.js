import {
  GET_DIETS, GET_RECIPES, SET_RECIPE,
  GET_RECIPE, FILTER_DIET, SORT_NAME,
  DIET_UP, /*DIET_DOWN,*/ HEALT_UP,
  HEALT_DOWN, FILTER_SCORE, NAME_UP, NAME_DOWN
} from'../constants/constants.js';
const initialState ={
  allDiets:[],
  saveRecipe:{},
  allRecipes:[],
  recipe:{},
  filterDiet:'',
  byName:[],
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
        ...state,
        saveRecipe:action.payload,
      }
    case FILTER_DIET:{
      return {
        ...state,
        filterDiet:action.payload,
      }
    }
    case SORT_NAME:{
      if(action.payload === NAME_UP){
        const {allRecipes} = state;
        return {
          ...state,
          byName:allRecipes
          .sort((a, b) =>{
            const recipeA = a.name
            const recipeB = b.name
            if(recipeA > recipeB)
              return 1;
            if(recipeA < recipeB)
              return -1;
            return 0;
            }
          )
        }
      }//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      if(action.payload === NAME_DOWN){
        const {allRecipes} = state;
        // console.log(allRecipes);
        return {
          ...state,
          byName:allRecipes
          .sort((a, b) =>{
            const recipeA = a.name
            const recipeB = b.name
            if(recipeA > recipeB)
              return -1;
            if(recipeA < recipeB)
              return 1;
            return 0;
            }
          )
        }
      }
    }
    case FILTER_SCORE:{
      const {allRecipes} = state;
      if(action.payload === HEALT_UP){
        return{
          ...state,
          byName:state.allRecipes
            .sort((a,b)=>{
              return a.healthScore - b.healthScore
            })
        }
      }
      if(action.payload === HEALT_DOWN){
        const {allRecipes} = state;
        return{
          ...state,
          byName:allRecipes
            .sort((a,b)=>{
              return a.healthScore - b.healthScore
            })
        }
      }
      break;
    }
    default:
      return state;
  }
}

export default routeReducer;