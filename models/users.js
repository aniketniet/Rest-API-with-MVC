const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

//model
const User = mongoose.model("User", userSchema);

module.exports = User;
