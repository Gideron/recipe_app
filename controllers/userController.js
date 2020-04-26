'use strict';
const userModel = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate('Bookmarks').populate('FollowedUsers');
    res.json(users);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).populate('Bookmarks').populate('FollowedUsers');
    res.json(user);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.json(newUser);
  } catch (e) {
    res.status(500).json({message: e.message});
  }
};

module.exports = {
    getAllUsers,
    getUser,
    postUser,
};
