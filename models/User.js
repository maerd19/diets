const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profile_picture: String
  }, 
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  hashField: 'password'
});

module.exports = model('User', userSchema);