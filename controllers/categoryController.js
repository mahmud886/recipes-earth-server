const Category = require('../models/CategoryModel');

const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (err) {
        res.send('Error Occurs', err);
    }
};
const createCategory = async (req, res) => {
    const newCategory = new Category(req.body);

    await newCategory.save((err) => {
        if (err) {
            res.status(500).json({
                err: 'There was a server side error!',
            });
        } else {
            res.status(200).json({
                message: 'Category was inserted Successfully!',
            });
        }
    });
};
const getSingleCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                message: 'Category data not Found!',
            });
        }
        res.status(200).json({
            message: 'Category data Found!',
            category: category,
        });
    } catch (err) {
        console.log('err', err);
        res.status(500).json({
            message: 'Recovery Failed!',
        });
    }
};
const updateCategory = async (req, res) => {
    const id = req.params.id;

    try {
        const updates = req.body;
        const options = {
            new: true,
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const category = await Category.findByIdAndUpdate(id, updates, options);
        res.send(category);
    } catch (err) {
        console.log(err.message);
    }
};
const singleCategoryDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            res.status(404).send('Category not Found!');
        }
        await Category.findByIdAndRemove(id);
        res.status(200).json({
            message: 'Category Delete Successfully!',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Category Delete Failed!',
        });
    }
};

module.exports = {
    getCategory,
    createCategory,
    getSingleCategory,
    updateCategory,
    singleCategoryDelete,
};
