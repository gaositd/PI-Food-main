const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NO_RECIPE, NO_PARAMETER, SPOONACULAR, RECIPES100, BYPK } = require('../../constants/constant');
// const WriteFile = require('../../routes/controller/writeFile.js')

async function getAllRecipes(req, res){
  const { name } = req.query;
  // WriteFile();
  // if(!name){
  //   res.status(404)
  //      .json({ message: NO_PARAMETER })
  // }

  try{
    const recipes100 = await axios.get(`${SPOONACULAR}complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.APIKEY}`);
    let recipes100PI = recipes100.data.results.map(recipe =>{
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
    // let recipesFilter = recipes100PI.filter(recipe => 
    //   recipe.name.toLowerCase().includes(name.toLowerCase()));
    
    const dbRecipes = await Recipe.findAll({
      include:{
        model:    DietType,
        atributes:['name'],
        through:  {
          atributes:[],
        },
      },
    });
  
    // recipesFilter = recipesFilter.concat(dbRecipes);
    // if(recipesFilter.length === 0)
    recipes100PI = recipes100PI.concat(dbRecipes);
    if(recipes100.length === 0)
      res.status(404)
         .json({msg:NO_RECIPE})
    else
      // res.json({recipesFilter})
      res.json({recipes100PI})

  }catch(err){
    res.json({msg:err.message});
  }

}

async function getRecipes(req, res){
  const { id } = req.params;

  if(!id){
    res.status(404)
       .json({ message: NO_PARAMETER })
  }

  try{
    const recipe = await axios.get(`${SPOONACULAR}${id}${BYPK}`);

    resultingRecipes = {
      id:recipe.data.id,
      name:recipe.data.title,
      image:recipe.data.image,
      healthScore:recipe.data.healthScore,
      summary:recipe.data.summary,
      dishTypes:recipe.data.dishTypes.map(dish => dish),
      diets:recipe.data.diets.map(diet => diet),
      steps:recipe.data.analyzedInstructions,
    }

    if(resultingRecipes){
      res.json(resultingRecipes);
    }else{
      res.status(404)
         .json({msg: NO_RECIPE});
    }

  }catch(error){
    
    try{
      const dbRecipes = await Recipe.findByPk(id,{
        include:{
          model:DietType,
          atributes:['id'],
          through:{
            atributes:[],
          },
        },
      });
      
      if(dbRecipes){
        res.json(dbRecipes);
      }else{
        res.status(404)
          .json({msg: NO_RECIPE});
      }
    }catch(error){
      res.json({msg: NO_RECIPE+' '+error.message})
    }
  }
}

module.exports = {
  getAllRecipes,
  getRecipes,
}
