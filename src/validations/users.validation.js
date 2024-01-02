const { query } = require("express-validator");

const searchUsersValidation = () => {
  return [query("q").notEmpty().isString()];
};

module.exports = { searchUsersValidation };
