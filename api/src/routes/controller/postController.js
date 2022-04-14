const axios = require('axios');
const { Recipe, DietType } = require('../../../src/db');
const { NOT_CREATE_ERROR, DATA_LOAD } = require('../../constants/constant');
const crypto = require('crypto');

async function createRecipe(req, res){
  const { name, image, healthScore, summary, healthyLevel, diets, steps } = req.body;

  const data ={
    id: crypto.randomUUID(),
    name,
    image,
    healthScore,
    summary,
    healthyLevel,
    diets,
    steps,
    createInDb:true,
  };

  Recipe.create(data);
  res.status(201)
      .json({msg: DATA_LOAD})
    
};

module.exports = createRecipe;