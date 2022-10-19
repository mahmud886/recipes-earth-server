const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryType: {
        type: String,
        required: [true, 'Category Type is Required!'],
    },
    categoryName: {
        type: String,
        requried: [true, 'Category name is Required!'],
    },
    image: {
        type: String,
    },
});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;
