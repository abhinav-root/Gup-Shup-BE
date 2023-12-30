const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: Types.String,
      trim: true,
    },
    isGroupChat: { type: Types.Boolean, default: false },
    users: [{ type: Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
