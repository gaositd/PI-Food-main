const NO_RECIPE = "Recipes not found";
const NO_PARAMETER = "no parameter, search failed";
const SPOONACULAR = "https://api.spoonacular.com/recipes/";
const RECIPES100 = `complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.API_KEY}`;
const BYPK = `/information?apiKey=${process.env.API_KEY}`;
const LOAD_ERROR = "Loada data error";
const NOT_FOUND = "Not found";
const NOT_CREATE_ERROR = "Not created";
const DATA_LOAD = "Data loaded successfully";
const CERO_AUX = '0000000000';

module.exports ={
  NO_RECIPE,
  NO_PARAMETER,
  SPOONACULAR,
  RECIPES100,
  BYPK,
  LOAD_ERROR,
  NOT_FOUND,
  NOT_CREATE_ERROR,
  DATA_LOAD,
  CERO_AUX,
}