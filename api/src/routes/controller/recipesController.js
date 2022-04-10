const dietTypes = require('../../JSON/diestTypes.json');

async function getAllRecipes(req, res){
  res.send("Hola mundos desde recipes");
}

async function getRecipes(req, res){
  res.sen("Tipos");
}

async function getDietByType(req, res){
  let dietTypes = await dietTypes.findAll();

  if(!dietTypes.length){
    await dietTypes.create();
  }
}

async function putDataInDB(req, res){
  res.send("Datos en BD");
}

module.exports = {
  getAllRecipes,
  getRecipes,
  getDietByType,
  putDataInDB
}