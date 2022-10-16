const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
    foodCode: {
        type: String,
        required: [true, 'Food Code is required'],
        unique: [true, 'Nutrition Code already exists'],
    },
    foodCategories: {
        type: String,
        required: [true, 'Food Category Name is Required'],
    },
    foodNameEnglish: {
        type: String,
        required: [true, 'Food English Name is Required'],
    },
    foodNameBangla: {
        type: String,
        required: [true, 'Food Bangla Name is Required'],
    },
    ediblePortionCoefficient: {
        type: Number,
        required: [true, 'Food Code is required'],
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
    totalDietaryFibre: {
        type: Number,
    },
    ash: {
        type: Number,
    },
    ca: {
        type: Number,
    },
    fe: {
        type: Number,
    },
    mg: {
        type: Number,
    },
    k: {
        type: Number,
    },
    na: {
        type: Number,
    },
    zn: {
        type: Number,
    },
    cu: {
        type: Number,
    },
    retinol: {
        type: Number,
    },
    betaCaroteneEquivalents: {
        type: Number,
    },
    vitaminA: {
        type: Number,
    },
    vitaminB6: {
        type: Number,
    },
    vitaminD: {
        type: Number,
    },
    vitaminE: {
        type: Number,
    },
    thiamin: {
        type: Number,
    },
    ribonflavin: {
        type: Number,
    },
    niacinEquivalents: {
        type: Number,
    },
    folate: {
        type: Number,
    },
    vitaminC: {
        type: Number,
    },
});

const Nutrition = mongoose.model('nutrition', NutritionSchema);
module.exports = Nutrition;
