const router = require("express").Router();
const authContoller = require("../controllers/auth.controller");
const { PROTECTED } = require("../middlewares/passport-jwt.middleware");
const {
  loginValidation,
  signupValidation,
} = require("../validations/auth.validation");
const validate = require("../validations/validator");
const passport = require("passport");

router.post(
  "/login",
  loginValidation(),
  validate,
  passport.authenticate("local", { session: false }),
  authContoller.login
);

router.post("/signup", signupValidation(), validate, authContoller.signup);

module.exports = router;
