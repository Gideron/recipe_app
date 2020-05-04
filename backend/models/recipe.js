const { model, Schema } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: String,
    description: String,
    steps: String,
    username: String,
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    cookingTime: String,
    /*categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],*/
    rates: [
      {
        username: String,
        createdAt: String,
      },
    ],
    bookmarks: [
      {
        username: String,
      },
    ],
    //picture: {},
    comments: [
      {
        body: String,
        username: String,
        createdAt: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Recipe", recipeSchema);
