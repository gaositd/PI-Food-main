const { dietType } = require('../../db');
const { dietTypesJSON } = require('../../JSON/dietTypesJSON.json');

async function getDietByType(req, res){
  
  res.json(dietTypesJSON);
}

module.exports = {
  getDietByType
}