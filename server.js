require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const crudRoutes = require('./routes/crudRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');
const recipeRoutes = require('./routes/RecipeRoutes');
const healthyRecipeRoutes = require('./routes/healthyRecipeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// database connection
connection();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
//app.use("/api/auth", authRoute);

app.use('/api/v1/cruds', crudRoutes);
app.use('/api/v1/nutritions', nutritionRoutes);
app.use('/api/v1/recipes', recipeRoutes);
app.use('/api/v1/healthyRecipes', healthyRecipeRoutes);
app.use('/api/v1/categories', categoryRoutes);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
