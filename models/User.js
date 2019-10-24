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
    profile_picture: String,
    type: {
      enum: ['user', 'admin'],
      default: "user",
      type: String
    },
    diet: {
      type: Schema.Types.ObjectId,
      ref: 'Menus'
    },
    objetivos_verificados: {
      type: Boolean,
      default: false
    }
  }, 
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  hashField: 'password'
});

module.exports = model('User', userSchema);