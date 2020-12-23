const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const schema = mongoose.schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "user name is required",
      index: true,
      lowercase: true,
      max: [127, "Max lenght is 127 characters"],
    },
    birthDate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: "email is required",
      index: true,
      lowercase: true,
      unique : true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: {
      type: String,
      required: "password is required",
      min : [4, "Min length is 4 characters"],
      max : [32, "Max length is 32 characters"]
    },
    role: String,
    image: String,
    descp: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
