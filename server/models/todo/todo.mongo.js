const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  userID: {
    type: Number,
    required: true,
  },
  todoID: {
    type: Number,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
