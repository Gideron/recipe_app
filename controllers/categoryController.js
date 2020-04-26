'use strict';
const categoryModel = require('../models/category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find().populate('ParentCategory');
    res.json(categories);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id).populate('ParentCategory');
    res.json(category);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const postCategory = async (req, res) => {
  try {
    const newCategory = await categoryModel.create(req.body);
    res.json(newCategory);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

module.exports = {
    getAllCategories,
    getCategory,
    postCategory,
};
