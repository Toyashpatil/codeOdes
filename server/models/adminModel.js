const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      required: true,
    },
    tokens: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
