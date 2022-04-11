const dietTypesJSON = require('../../JSON/dietTypesJSON.json');
const dietType = require('../../../src/db');
const { default: axios } = require('axios');
// const fs = require('fs');// save all recipes into JSON file
// const recipesJson = path.join('../../../src/JSON/recipes.json');
const { NOT_FOUND } = require('../../constants/constant');
let resultingRecipes = {}

async function getAllRecipes(req, res){
  const {name} = req.query;
  const { healthScore, title, image, dishTypes, diets, summary, steps } = req.body;
  try{
    const allRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apikey=${process.env.API_KEY}&addRecipeInformation=true`);

    // fs.writeFileSync(recipesJson,allRecipes,{//write in the JSON file
    //   encoding: "utf8",
    //   flag: "w+",
    //   mode: 0o666
    // });

    const recipesByName = allRecipes.map(recipe => recipe.title.include(name));
    if(recipes){
      resultingRecipes = {
        healthScore,
        title,
        image,
        dishTypes,
        diets,
        summary,
        steps,
      }
      res.status(200)
        .json(resultingRecipes);

    }else{
      res.status(404)
        .json({ msg:NOT_FOUND })
    }
  }
  catch(error){
    return {
      message: error.message
    }
  }
}

async function getRecipes(req, res){
  const {id } = req.params;

  try{
    const recipe = await axios.get(`https://api.spoonacular.com/recipes/716426/information?apiKey=${process.env.API_KEY}`);

    if(recipe){
      resultingRecipes = {
        healthScore,
        title,
        image,
        dishTypes,
        diets,
        summary,
        steps,
      }
      res.status(200)
        .json(resultingRecipes);
    }else{
      res.status(404)
        .json({ msg:NOT_FOUND })
    }

  }catch(error){

  }
}

async function putDataInDB(req, res){
  res.send("Datos en BD");
}

module.exports = {
  getAllRecipes,
  getRecipes,
}