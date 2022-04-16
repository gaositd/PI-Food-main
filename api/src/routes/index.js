const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getAllRecipes,
  getRecipes,
} = require('./controller/recipesController');
const { getDietByType } = require('./controller/typesControler');
const createRecipe = require('./controller/postController');
// const cors = require('cors');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipes);
router.get('/types', getDietByType);
router.post('/recipe', createRecipe);

module.exports = router;
