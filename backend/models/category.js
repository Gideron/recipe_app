const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  Title:  String,
  ParentCategory: {type: Schema.Types.ObjectId, ref: 'Category', required: false},
});

module.exports = mongoose.model('Category', categorySchema);