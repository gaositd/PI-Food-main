//only when attempts are fineshed
const axios = require('axios');
const fs = require('fs');

//write JSON file start
async function writeJSONFile (){
  try{
    const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&addRecipeInformation=true&number=100&apiKey=${process.env.APIKEY}`)
    .then(res => res.data.results)
    .catch(err =>{msg:NO_RECIPE+err.message});
    const data = JSON.stringify(result, null, 4);
    
    fs.writeFileSync('recipes.json', data);

  }catch(err){
    msg:"No wrte JSON file"+err.message
  };
}
module.exports = writeJSONFile;