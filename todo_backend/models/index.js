const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/todolist", {useNewUrlParser: true});

module.exports.Todo = require("./todo");
