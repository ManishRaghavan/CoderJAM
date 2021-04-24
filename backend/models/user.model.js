const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  gender: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  age: { type: Number, require: true },
  gender: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  doctors: [{ type: String }],
  problems: [{ type: String }],
  isCovid: { type: Boolean, require: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
