const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

/*
TODO: password
example https://thinkster.io/tutorials/node-json-api/creating-the-user-model

NOTE:
FollowedUsers might be a security issue
*/
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  Email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  Image: String,
  Role: {type: String, enum: ['User','Creator'], required: true},
  Bookmarks: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  FollowedUsers: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);