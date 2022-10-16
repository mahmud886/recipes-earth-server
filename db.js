require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
    const dbURi = process.env.dbURI;
    const connection = mongoose
        .connect(dbURi, { useNewUrlParser: true })
        .then((result) => console.log('Connected to database'))
        .catch((err) => console.log('could not connect to database'));
};
