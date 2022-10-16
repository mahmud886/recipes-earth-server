const express = require('express');
const router = express.Router();
const nutritionController = require('../controllers/nutritionController');

router.get('/', nutritionController.getNutritionData);
router.post('/', nutritionController.createNutritionData);
router.get('/:id', nutritionController.getSingleNutritionData);
router.patch('/:id', nutritionController.updateNutritionData);
router.delete('/:id', nutritionController.singleNutritionDelete);

module.exports = router;
