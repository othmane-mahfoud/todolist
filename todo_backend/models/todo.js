const mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
  name:{
    type: String,
    required: "Todo must have a value"
  },
  completed:{
    type: Boolean,
    default: false
  },
  completed_date:{
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
