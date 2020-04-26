const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  Title:  String,
  Description: String,
  Steps: String,
  Difficulty: {type: String, enum: ['Easy','Medium','Hard'], required: true},
  CookingTime: Number,
  Categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
  Rates: [{type: Schema.Types.ObjectId, ref: 'Rate'}],
  Picture: {},
  Comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true});

module.exports = mongoose.model('Recipe', recipeSchema);