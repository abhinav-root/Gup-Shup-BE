const logger = require("../config/logger");
const User = require("../models/user.model");

const searchUsers = async (req, res) => {
  try {
    const { q } = req.query;
    console.log({ q });
    const users = await User.find({
      _id: {
        $ne: req.user.id,
      },
      $or: [
        { firstName: { $regex: q, $options: "i" } },
        { lastName: { $regex: q, $options: "i" } },
      ],
    });
    return res.json(users);
  } catch (err) {
    logger.error(err.message);
    res.status(500).json(err);
  }
};

module.exports = { searchUsers };
