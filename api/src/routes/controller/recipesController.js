const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NO_RECIPE, NO_PARAMETER, SPOONACULAR, RECIPES100, BYPK } = require('../../constants/constant');

async function getAllRecipes(req, res){
  const Search = req.query;
  
  try{
    
    const recipes100 = await axios.get(`${SPOONACULAR}complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.API_KEY}`);
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
  
    recipes100PI = recipes100PI.concat(dbRecipes);
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

    if (id.length > 6) {
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
          res.json(dbRecipes);
        } else {
          res.status(404)
            .json({ msg: NO_RECIPE });
        }
      } catch (error) {
        res.json({ msg: NO_RECIPE + ', ' + error.message })
      }
      resultingRecipes = resultingRecipes.concat(dbRecipes);
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

module.exports = {
  getAllRecipes,
  getRecipes,
}
