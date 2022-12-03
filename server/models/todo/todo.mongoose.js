const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  todoID: {
    type: String,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
