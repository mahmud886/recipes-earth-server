/**
 * @author Md. Iqbal Mahmud
 * @version 0.0.1
 */

const Nutrition = require('../models/NutritionModel');

/**
 * GET THE LIST OF NUTRITION
 */

const getNutritionData = async (req, res) => {
    try {
        const nutrition = await Nutrition.find();
        res.json(nutrition);
    } catch (err) {
        res.send('Error Occurs', err);
    }
};

/**
 * POST SINGLE NUTRITION DATA TO DATABASE
 */

const createNutritionData = async (req, res) => {
    const newNutrition = new Nutrition(req.body);

    await newNutrition.save((err) => {
        if (err) {
            res.status(500).json({
                err: 'There was a server side error!',
            });
        } else {
            res.status(200).json({
                message: 'Nutrition was inserted successfully',
            });
        }
    });
};

/**
 * GET SINGLE NUTRITION DATA FROM DATABASE BY ID
 */

const getSingleNutritionData = async (req, res) => {
    const id = req.params.id;
    try {
        const nutrition = await Nutrition.findById(id);
        if (!nutrition) {
            return res
                .status(404)
                .json({ message: 'Nutrition data not found!' });
        }
        res.status(200).json({
            message: 'Nutrition data found',
            nutrition: nutrition,
        });
    } catch (err) {
        console.log('err', err);
        res.status(500).json({ message: 'Recovery Failed!' });
    }
};
/**
 * UPDATE SINGLE NUTRITION DATA TO DATABASE BY ID
 */

const updateNutritionData = async (req, res) => {
    const id = req.params.id;
    try {
        const updates = req.body;
        const options = {
            new: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const result = await Nutrition.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch (err) {
        console.log(err.message);
    }
};

/**
 * DELETE SINGLE NUTRITION DATA TO DATABASE BY ID
 */

const singleNutritionDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const nutrition = await Nutrition.findById(id);
        if (!nutrition) {
            res.status(404).send('Nutrition not found');
        }
        await Nutrition.findByIdAndRemove(id);
        res.status(200).json({ message: 'Deletion completed successfully!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Delete Failed!' });
    }
};

// Module exports
module.exports = {
    getNutritionData,
    createNutritionData,
    getSingleNutritionData,
    updateNutritionData,
    singleNutritionDelete,
};
