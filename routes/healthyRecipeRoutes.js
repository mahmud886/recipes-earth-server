const express = require('express');

const router = express.Router();
const healthyRecipeController = require('../controllers/healthyRecipeController.js');

router.get('/', healthyRecipeController.getHealthyRecipe);
router.post('/', healthyRecipeController.createHealthyRecipe);
router.get('/:id', healthyRecipeController.getSingleHealthyRecipe);
router.patch('/:id', healthyRecipeController.updateHealthyRecipe);
router.delete('/:id', healthyRecipeController.singleHealthyRecipeDelete);

module.exports = router;
