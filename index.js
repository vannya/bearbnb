require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require("./services/passport");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieSession({ maxAge: 15 * 24 * 60 * 60 * 1000, keys: [process.env.COOKIE_KEY] }));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth")(app);

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
