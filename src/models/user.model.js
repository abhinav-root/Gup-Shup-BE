const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: Types.String,
      required: true,
      lowercase: true,
      minLength: [3, "firstname should be atleast 3 characters"],
      maxLength: [20, "firstname cannot exceed 20 characters"],
    },
    lastName: {
      type: Types.String,
      required: true,
      lowercase: true,
      minLength: [3, "lastname should be atleast 3 characters"],
      maxLength: [20, "lastname cannot exceed 20 characters"],
    },
    email: {
      type: Types.String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: Types.String,
      required: true,
    },
    avatar: {
      type: Types.String,
      required: true,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1, type: -1 });

const User = mongoose.model("User", userSchema);

module.exports = User;
