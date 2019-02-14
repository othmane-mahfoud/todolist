const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/todolist", {newUrlParser: true});

module.exports = require("./todo");
