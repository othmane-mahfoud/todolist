const express = require("express"),
      port    = process.env.PORT || 3000,
      app     = express();


app.listen(port, function(){
  console.log("server listening on port: " + port);
});
