const dietTypesJSON = require('../../JSON/dietTypesJSON.json');
const dietType = require('../../../src/db');
async function getAllRecipes(req, res){
  res.send("Hola mundos desde recipes");
}

async function getRecipes(req, res){
  res.sen("Tipos");
}

async function putDataInDB(req, res){
  res.send("Datos en BD");
}

module.exports = {
  getAllRecipes,
  getRecipes,
  // getDietByType,
  // putDataInDB
}