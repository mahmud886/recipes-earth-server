const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategory);
router.post('/', categoryController.createCategory);
router.get('/:id', categoryController.getSingleCategory);
router.patch('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.singleCategoryDelete);

module.exports = router;
