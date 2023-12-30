const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (username, password, done) {
      const user = await User.findOne({ email: username });
      if (!user) {
        done(null, false);
      }
      if (!bcrypt.compareSync(password, user.password)) {
        done(null, false);
      }
      done(null, user);
    }
  )
);
