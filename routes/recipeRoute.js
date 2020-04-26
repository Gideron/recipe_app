'use strict';

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getAllRecipes);

router.get('/:id', recipeController.getRecipe);

router.post('/', recipeController.postRecipe);

module.exports = router;