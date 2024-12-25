const mongoose = require("mongoose");
const { EMAIL } = require("../../../helpers/mongodb/mongooseValidators");
const Image = require("../../../helpers/mongodb/Image");

const schema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 25,
  },
  uniqueDisplayName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
    maxlength: 25,
  },
  email: EMAIL,
  password: {
    type: String,
    required: true,
    trim: true,
  },
  image: Image,
  isAdmin: { type: Boolean, default: false },
  isMod: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdGuides: [
    {
      type: String,
    },
  ],
  isBanned: {
    type: Boolean,
    default: false,
  },
  banReason: {
    type: String,
  },
  banDate: {
    type: Date,
  },
  banEndDate: {
    type: Date,
    default: null,
  },
});

const User = mongoose.model("user", schema);

module.exports = User;
