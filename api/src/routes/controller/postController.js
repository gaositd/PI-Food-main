const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { CERO_AUX, DATA_LOAD } = require('../../constants/constant');

var Sequelize = require('sequelize');
var Op = Sequelize.Op;

async function createRecipe(req, res){
  const { name, image, healthyLevel, summary, healthScore, steps, diets, dishType } = req.body;
  
  let recipelen = await Recipe.count() + 1;
  const idAux = '1'+CERO_AUX+recipelen;
  
  const data = {
    id: parseInt(idAux),
    name,
    image,
    healthyLevel,
    summary,
    healthScore,
    steps,
    diets,
    dishType,
    createInDb: true,
  };

  try{
    //lenado de tabla intermedia
    const dietas = diets.split(',');
    const allDiets = await DietType.findAll({
      where: {
        name:{
          [Op.in]: dietas
        }
      }
    });
    
    const ids = allDiets.map(dieta => {
      return dieta.ID;
    });
    //lenado de tabla intermedia
    let RecipeCreate = await Recipe.create(data);
    await RecipeCreate.setDietType(ids);
    res.status(201)
        .json({msg: DATA_LOAD});
  }catch(err){
    res.json({msg:err.message});
  }
};

module.exports = createRecipe;