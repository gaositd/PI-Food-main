const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getAllRecipes,
  getRecipes,
  getDietByType,
  putDataInDB,
} = require('./controller/recipesController');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipes);
router.get('/types', getDietByType);
router.post('/recipes', putDataInDB);

module.exports = router;
