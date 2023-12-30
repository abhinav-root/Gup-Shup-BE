const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: Types.ObjectId,
      ref: "User",
    },
    content: { type: Types.String, trim: true },
    chat: { type: Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
