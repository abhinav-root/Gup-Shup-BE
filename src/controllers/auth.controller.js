const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const logger = require("../config/logger");

const login = (req, res) => {
  const { firstName, lastName, email, id } = req.user;
  const payload = { id, firstName, lastName, email };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return res.json({ accessToken });
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log({ firstName, lastName, email, password });
    const hashedPassword = await bcrypt.hash(password, 12);
    // console.log({ hashedPassword });
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(err);
  }
};

module.exports = { login, signup };
