const HealthyRecipe = require('../models/HealthyRecipeModel');

/**
 * GET THE LIST OF NUTRITION
 */
const getHealthyRecipe = async (req, res) => {
    try {
        const healthyRecipe = await HealthyRecipe.find();
        res.json(healthyRecipe);
    } catch (err) {
        res.send('Error Occurs', err);
    }
};

/**
 * POST SINGLE NUTRITION DATA TO DATABASE
 */
const createHealthyRecipe = async (req, res) => {
    const newHealthyRecipe = new HealthyRecipe(req.body);

    await newHealthyRecipe.save((err) => {
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
const getSingleHealthyRecipe = async (req, res) => {
    const id = req.params.id;
    try {
        const healthyRecipe = await HealthyRecipe.findById(id);
        if (!healthyRecipe) {
            return res.status(404).json({
                message: 'Recipe data not Found!',
            });
        }
        res.status(200).json({
            message: 'Recipe data Found!',
            healthyRecipe: healthyRecipe,
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
const updateHealthyRecipe = async (req, res) => {
    const id = req.params.id;
    try {
        const updates = req.body;
        const options = {
            new: true,
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const healthyRecipe = await HealthyRecipe.findByIdAndUpdate(
            id,
            updates,
            options
        );
        res.send(healthyRecipe);
    } catch (err) {
        console.log(err.message);
    }
};
/**
 * DELETE SINGLE NUTRITION DATA TO DATABASE BY ID
 */
const singleHealthyRecipeDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const healthyRecipe = await HealthyRecipe.findById(id);
        if (!healthyRecipe) {
            res.status(404).send('Recipe not Found!');
        }
        await HealthyRecipe.findByIdAndRemove(id);
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

module.exports = {
    getHealthyRecipe,
    createHealthyRecipe,
    getSingleHealthyRecipe,
    updateHealthyRecipe,
    singleHealthyRecipeDelete,
};
