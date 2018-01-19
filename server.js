const express = require("express"),
  port = process.env.PORT || 80,
  app = express();

app.use("/", express.static(__dirname + "/"));

app.listen(3000, () => {
  console.log("Listening on port " + port);
});
