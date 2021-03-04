const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const mongoStore = require("connect-mongo").default;
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT || "mongodb://localhost/kidtastic",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("You're connected to the Kidtastic database. Nice.");
  }
);
const session = require("express-session");

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: mongoStore.create({
    mongoUrl: process.env.DB_CONNECT || "mongodb://localhost/kidtastic",
    ttl: 1800,
  }),
};
app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kidtastic");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//MAKE TEST ROUTES //
