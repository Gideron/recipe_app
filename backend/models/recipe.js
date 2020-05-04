const { model, Schema } = require("mongoose");

const recipeSchema = new Schema(
  {
    //title: String,
    body: String,
    //steps: String,
    username: String,
    createdAt: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    /* difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    cookingTime: Number,
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    rates: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rate",
      },
    ],
    //picture: {},
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],*/
  },
  { timestamps: true }
);

module.exports = model("Recipe", recipeSchema);
