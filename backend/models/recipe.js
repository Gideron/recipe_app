const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: String,
    description: String,
    steps: String,
    //difficulty: {type: String, enum: ['Easy','Medium','Hard'], required: true},
    //cookingTime: Number,
    //categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    //rates: [{type: Schema.Types.ObjectId, ref: 'Rate'}],
    //picture: {},
    //comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
