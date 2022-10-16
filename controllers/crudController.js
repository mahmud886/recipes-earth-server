const Crud = require('../models/crudModel');

// Display All CRUD Data
const crud_index = async (req, res) => {
    try {
        const crud = await Crud.find();
        res.json(crud);
    } catch (err) {
        res.send('Error Occurs:', err);
    }
};

// Create New CRUD
const crud_create_post = async (req, res) => {
    let crud = new Crud(req.body);
    try {
        const result = await crud.save();
        console.log('result', result);
        return res.status(201).json({
            message: 'Crud is successfully added!',
        });
    } catch (err) {
        res.status(500).json({ message: 'Creation failed!' });
    }
};

// Show a particular CRUD Detail by Id
const crud_details = async (req, res) => {
    const id = req.params.id;
    try {
        const crud = await Crud.findById(id);
        if (!crud) {
            return res.status(404).json({ message: 'Crud not found!' });
        }
        res.status(200).json({ message: 'Retrieved Crud', crud: crud });
    } catch (err) {
        console.log('error', err);
        res.status(500).json({ message: 'Recovery failed!' });
    }
};

// Update CRUD Detail by Id
const crud_update = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {
            new: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };

        const result = await Crud.findByIdAndUpdate(id, updates, options);
        res.send(result);
    } catch (err) {
        console.log(err.message);
    }
};

// Delete CRUD Detail by Id
const crud_delete = async (req, res) => {
    const id = req.params.id;

    try {
        const crud = await Crud.findById(id);
        if (!crud) {
            res.status(404).send('Crud not found');
        }
        await Crud.findByIdAndRemove(id);
        res.status(200).json({ message: 'Deletion completed successfully!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Delete Failed!' });
    }
};

module.exports = {
    crud_index,
    crud_details,
    crud_create_post,
    crud_update,
    crud_delete,
};
