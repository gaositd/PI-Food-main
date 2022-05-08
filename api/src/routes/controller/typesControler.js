//Tenes que cargar en tu base de datos los tipos que estan en ese link por ejemplo Gluten Free, Ketogenic, y el resto la primera vez, luego una vez que ya estan cargados esa ruta /types debería devolverte el arreglo con todos esos tipos que previamente cargaste
const { DietType } = require('../../../src/db');
const { NOT_FOUND } = require('../../constants/constant');

async function getDietByType(req, res){
  try {
    const allTypes = await DietType.findAll();
    
    if(allTypes.length){
      res.json(allTypes);
    }else{
      res.status(404)
         .json({ msg: `${NOT_FOUND}`});
    }
  } catch (error) { msg: `${NOT_FOUND} ${error.message}`}
}

module.exports = {
  getDietByType
}