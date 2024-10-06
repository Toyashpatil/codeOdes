const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    otp: {
      type: String,
      // required:true
    },
    phone: {
      type: String,
      // required: true,
    },
    age: {
      type: String,
      // required: true,
    },
    gender: {
      type: String,
      // required: true,
    },
    college_name: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
