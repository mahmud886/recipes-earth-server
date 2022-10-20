const mongoose = require('mongoose');

const HealthyRecipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: [true, 'Recipe Title is Required'],
    },
    recipeDescription: {
        type: String,
    },
    recipeDuration: {
        type: String,
        required: [true, 'Recipe Duration is Required'],
    },
    recipeServing: {
        type: String,
        required: [true, 'Recipe Serving is Required'],
    },
    recipeType: {
        type: String,
        required: [true, 'Recipe Type is Required'],
    },
    recipeCategory: {
        type: String,
        required: [true, 'Recipe Category is Required'],
    },
    recipeIngredients: {
        type: String,
        required: [true, 'Recipe Ingredients is Required'],
    },
    recipeSteps: {
        type: String,
        required: [true, 'Recipe Steps is Required'],
    },
    image: {
        type: String,
    },
    energy: {
        type: Number,
    },
    water: {
        type: Number,
    },
    protein: {
        type: Number,
    },
    fat: {
        type: Number,
    },
    carbohydrate: {
        type: Number,
    },
});

const HealthyRecipe = mongoose.model('healthyRecipe', HealthyRecipeSchema);
module.exports = HealthyRecipe;
