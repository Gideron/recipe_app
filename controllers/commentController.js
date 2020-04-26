'use strict';
const commentModel = require('../models/comment');

const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find().populate('Author');
    res.json(comments);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await commentModel.findById(req.params.id).populate('Author');
    res.json(comment);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const postComment = (req, res) => {
  try {
    const newComment = await commentModel.create(req.body);
    res.json(newComment);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

module.exports = {
    getAllComments,
    getComment,
    postComment,
};
