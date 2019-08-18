require('dotenv').config();

const express = require('express');

const app = express();

if (process.env.NODE_ENV === "production") {
  // Hook up express to the build files
  app.use(express.static("client/build"));

  // For unrecognized routes, serve index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT);
