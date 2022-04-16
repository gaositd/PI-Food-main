const {
  GET_DIETS,
} = require('../constants/constants.js')
const initialState ={
  allDiets:[],
};

const routeReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_DIETS:
      return {
        ...state,
        allDiets: action.payload,
      }
    default: return state;
  }
}

export default routeReducer;