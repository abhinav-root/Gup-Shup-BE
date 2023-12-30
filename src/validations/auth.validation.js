const { body } = require("express-validator");
const User = require("../models/user.model");

const loginValidation = () => {
  return [
    body("email").notEmpty().isString().isEmail().escape().trim(),
    body("password").notEmpty().isString(),
  ];
};

const signupValidation = () => {
  return [
    body("firstName").notEmpty().isString().isLength({ min: 3, max: 20 }),
    body("lastName").notEmpty().isString().isLength({ min: 3, max: 20 }),
    body("email")
      .notEmpty()
      .isString()
      .isEmail()
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email already in use");
        }
      })
      .escape()
      .trim(),
    body("password").notEmpty().isString().isLength({ min: 8, max: 50 }),
  ];
};

module.exports = { loginValidation, signupValidation };
