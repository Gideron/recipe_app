const bc = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const User = require("../../models/user");

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { email, username, password, confirmPassword } },
      context,
      info
    ) {
      password = await bc.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
      });

      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
