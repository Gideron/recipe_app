const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  Title:  String,
  Comment: String,
  Author: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);