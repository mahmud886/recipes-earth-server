const express = require('express');

const router = express.Router();
const RecipeController = require('../controllers/RecipeController.js');

router.get('/', RecipeController.getRecipe);
router.post('/', RecipeController.createRecipe);
router.get('/:id', RecipeController.getSingleRecipe);
router.patch('/:id', RecipeController.updateRecipe);
router.delete('/:id', RecipeController.singleRecipeDelete);

module.exports = router;
