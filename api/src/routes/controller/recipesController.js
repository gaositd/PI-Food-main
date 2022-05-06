const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NO_RECIPE, NO_PARAMETER, SPOONACULAR, RECIPES100, BYPK } = require('../../constants/constant');

async function getAllRecipes(req, res){
  const Search = req.query;
  let arrAux = [];  
  try{
    
    const recipes100 = await axios.get(`${SPOONACULAR}complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.APIKEY0}`);
    let recipes100PI = recipes100.data.results.map(recipe =>{
      return{
        id:recipe.id,
        name:recipe.title,
        image:recipe.image,
        healthScore:recipe.healthScore,
        summary:recipe.summary,
        dishTypes:recipe.dishTypes,
        diets:recipe.diets,
        steps:recipe.analyzedInstructions.map(
          analized=> analized.steps.map(
            paso=> paso.step))
      }
    })
    if(Search.hasOwnProperty('Search')){
      Search.search = Search.search.toLowerCase();
      let recipesFilter = recipes100PI.filter(recipe => recipe.name.includes(Search.search));

      recipes100 = [];
      recipes100 = recipesFilter;
    }
    
    const dbRecipes = await Recipe.findAll({
      include:{
        model:    DietType,
        atributes:['name'],
        through:  {
          atributes:[],
        },
      },
    });
  
    if(dbRecipes.length > 0){
      
      // recipes100PI = recipes100PI.concat(dbRecipes);
      // recipes100PI = arrAux;
      arrAux = dbRecipes.map(recipe =>{
        return({
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          healthyLevel:recipe.healthyLevel,
          summary:recipe.summary,
          healthScore:recipe.healthScore,
          steps:recipe.steps,
          diets:recipe.diets,
          dishTypes:"",
          createInDb:recipe.createInDb
        })
      });
      recipes100PI = recipes100PI.concat(arrAux);
    }
    if(recipes100.length === 0)
      res.status(404)
         .json({msg:NO_RECIPE})
    else
      res.json(recipes100PI)

  }catch(err){
    res.json({msg:err.message});
  }

}

async function getRecipes(req, res){
  const { id } = req.params;
  let resultingRecipes = {};

  if(id) fromDB(resultingRecipes, res, id);
  
  try{
    const recipe = await axios.get(`${SPOONACULAR}${id}${BYPK}`);

    resultingRecipes = {
      id:recipe.data.id,
      name:recipe.data.title,
      image:recipe.data.image,
      score:recipe.data.spoonacularScore,
      healthScore:recipe.data.healthScore,
      summary:recipe.data.summary,
      dishTypes:recipe.data.dishTypes,
      diets:recipe.data.diets,
      steps:recipe.data.analyzedInstructions.map(
          analized=> analized.steps.map(
            paso=> paso.step))
    }

    if(resultingRecipes){
      res.json(resultingRecipes);
    }else{
      res.status(404)
         .json({msg: NO_RECIPE});
    }

  }catch(error){
    res.json({msg: NO_RECIPE+', '+error.message})
  }
}

async function fromDB(resultingRecipes, res, id) {
  
    try {
      const dbRecipes = await Recipe.findByPk(id, {
        include: {
          model: DietType,
          atributes: ['id'],
          through: {
            atributes: [],
          },
        },
      });

      if (dbRecipes) {
        const arrDiets = dbRecipes.diets.split(',');
        const arrDishes = dbRecipes.dishes.split(',');
        resultingRecipes = {
          id:dbRecipes.id,
          name:dbRecipes.name,
          image:dbRecipes.image,
          score:dbRecipes.healthScore,
          healthScore:dbRecipes.healthyLevel,
          summary:dbRecipes.summary,
          dishTypes:arrDishes,
          diets:arrDiets,
          steps:dbRecipes.steps,
          createInDb:dbRecipes.createInDb,
        }
        res.json(resultingRecipes);
        res.status(404)
           .json({ msg: NO_RECIPE });
      } else {
      }
    } catch (error) {
      // res.json({ msg: NO_RECIPE + ', ' + error.message })
    }
   // resultingRecipes = resultingRecipes.concat(dbRecipes);
}

module.exports = {
  getAllRecipes,
  getRecipes,
}
