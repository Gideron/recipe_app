'use strict';
const recipeModel = require('../models/recipe');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.find().populate('Categories').populate('Rates').populate('Comments');
    res.json(recipes);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.params.id).populate('Categories').populate('Rates').populate('Comments');
    res.json(recipe);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const postRecipe = (req, res) => {
  try {
    const newRecipe = await recipeModel.create(req.body);
    res.json(newRecipe);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
  //res.send('With this endpoint you can add recipes');
};

module.exports = {
    getAllRecipes,
    getRecipe,
    postRecipe,
};
