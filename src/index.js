const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.route");
const logger = require("./config/logger");
const passport = require("passport");
require("./middlewares/passsport-local.middleware");
require("./middlewares/passport-jwt.middleware");
const usersRoutes = require("./routes/users.route");

const app = express();

app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    responseTime: Date.now() - req.startTime,
  });
  next();
});

connectDB();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());

// Routes
app.get("/", (req, res) => res.json({ message: "Api is running" }));
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

const port = process.env.PORT;

app.listen(port, () => logger.info(`Server listening on port ${port}`));
