const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NO_RECIPE, NO_PARAMETER, SPOONACULAR, RECIPES100, BYPK } = require('../../constants/constant');
const WriteFile = require('../../routes/controller/writeFile.js')

async function getAllRecipes(req, res){
  const { name } = req.query;
  // WriteFile();
  if(!name){
    res.status(404)
       .json({ message: NO_PARAMETER })
  }
  // res.end("That's all folks");
  try{
    const recipes100 = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.API_KEY}`);
    const recipes100PI = recipes100.data.results.map(recipe =>{
      return{
        id:recipe.id,
        name:recipe.title,
        image:recipe.image,
        healthScore:recipe.healthScore,
        summary:recipe.summary,
        dishTypes:recipe.dishTypes.map(dish => dish),
        diets:recipe.diets.map(diet => diet),
        steps:recipe.analyzedInstructions,
      }
    })
    let recipesFilter = recipes100PI.filter(recipe => 
      recipe.name.toLowerCase().includes(name.toLowerCase()));
    
    const dbRecipes = await Recipe.findAll({
      include:{
        model:    DietType,
        atributes:['name'],
        through:  {
          atributes:[],
        },
      },
    });
  
    recipesFilter = recipesFilter.concat(dbRecipes);
    if(recipesFilter.length === 0)
      res.status(404)
         .json({msg:NO_RECIPE})
    else
      res.json({recipesFilter})

  }catch(err){
    res.json({msg:err.message});
  }

}

async function getRecipes(req, res){
  const {id } = req.params;

  try{
    const recipe = await axios.get(`${SPOONACULAR}${id}${BYPK}`);

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
    }else{
      const dbRecipes = await Recipe.findByPk({
        include:{
          model:DietType,
          atributes:['id'],
          through:{
            atributes:[],
          },
        },
      });
      resultingRecipes = dbRecipes;
    }

    if(resultingRecipes){
      res.json(resultingRecipes);
    }else{
      res.status(404)
         .json({msg: NOT_FOUND});
    }

  }catch(error){

  }
}

module.exports = {
  getAllRecipes,
  getRecipes,
}
