const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
  //   name: String,
  //   email: String,
  //   phone: Number,
  //   age: Number,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model(`User`, userSchema);
