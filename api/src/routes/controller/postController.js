const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NOT_CREATE_ERROR, DATA_LOAD } = require('../../constants/constant');
const crypto = require('crypto');

async function createRecipe(req, res){
  const { name, image, healthScore, summary, healthyLevel, diets, steps } = req.body;

  const data = {
    // id: crypto.randomUUID(),
    id:null,
    name,
    image,
    healthScore,
    summary,
    healthyLevel,
    diets,
    steps,
    createInDb: true,
  };

  try{
    await Recipe.create(data);
    // await Recipe.setRecipes(diets);
    res.status(201)
        .json({msg: DATA_LOAD});
  }catch(err){
    res.json({msg:err.message});
  }
};

module.exports = createRecipe;