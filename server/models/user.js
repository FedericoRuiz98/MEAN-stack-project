const mongoose = require("mongoose");
const { Schema } = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

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
    birthDate: Date,
    email: {
      type: String,
      required: "email is required",
      index: true,
      lowercase: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: {
      type: String,
      required: "password is required",
      min: [4, "Min length is 4 characters"],
      max: [32, "Max length is 32 characters"],
    },
    role: String,
    image: String,
    descp: String,
  },
  { timestamps: true }
);

//delete password when i get the json
UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

UserSchema.plugin(uniqueValidator, {
  message: "{PATH} need to be the unique",
});

module.exports = mongoose.model("Users", UserSchema);
