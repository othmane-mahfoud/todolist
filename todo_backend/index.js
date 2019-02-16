const express    = require("express"),
      bodyParser = require("body-parser"),
      port       = process.env.PORT || 3000,
      app        = express();

const todoRoutes = require("./routes/todos")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/todos", todoRoutes);

app.listen(port, function(){
  console.log("server listening on port: " + port);
});
