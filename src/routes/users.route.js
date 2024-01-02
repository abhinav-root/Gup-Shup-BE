const { searchUsersValidation } = require("../validations/users.validation");
const { searchUsers } = require("../controllers/users.controller");
const validate = require("../validations/validator");
const passport = require("passport");

const router = require("express").Router();

router.get(
  "/",
  searchUsersValidation(),
  validate,
  passport.authenticate("jwt", { session: false }),
  searchUsers
);

module.exports = router;
