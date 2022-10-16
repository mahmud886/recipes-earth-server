/**
 * @author Md. Iqbal Mahmud
 * @version 0.0.1
 */

const Recipe = require('../models/RecipeModel');
/**
 * GET THE LIST OF NUTRITION
 */

const getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.find();
        res.json(recipe);
    } catch (err) {
        res.send('Error Occurs', err);
    }
};

/**
 * POST SINGLE NUTRITION DATA TO DATABASE
 */

const createRecipe = async (req, res) => {
    const newRecipe = new Recipe(req.body);

    await newRecipe.save((err) => {
        if (err) {
            res.status(500).json({
                err: 'There was a server side error!',
            });
        } else {
            res.status(200).json({
                message: 'Recipe was Inserted Successfully!',
            });
        }
    });
};

/**
 * GET SINGLE NUTRITION DATA FROM DATABASE BY ID
 */

const getSingleRecipe = async (req, res) => {
    const id = req.params.id;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({
                message: 'Recipe data not Found!',
            });
        }
        res.status(200).json({
            message: 'Recipe data Found!',
            recipe: recipe,
        });
    } catch (err) {
        console.log('err', err);
        res.status(500).json({
            message: 'Recovery Failed!',
        });
    }
};

/**
 * UPDATE SINGLE NUTRITION DATA TO DATABASE BY ID
 */

const updateRecipe = async (req, res) => {
    const id = req.params.id;
    try {
        const updates = req.body;
        const options = {
            new: true,
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const recipe = await Recipe.findByIdAndUpdate(id, updates, options);
        res.send(recipe);
    } catch (err) {
        console.log(err.message);
    }
};

/**
 * DELETE SINGLE NUTRITION DATA TO DATABASE BY ID
 */

const singleRecipeDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            res.status(404).send('Recipe not Found!');
        }
        await Recipe.findByIdAndRemove(id);
        res.status(200).json({
            message: 'Recipe Delete Successfully!',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Recipe Delete Failed!',
        });
    }
};

// Module exports

module.exports = {
    getRecipe,
    createRecipe,
    getSingleRecipe,
    updateRecipe,
    singleRecipeDelete,
};
