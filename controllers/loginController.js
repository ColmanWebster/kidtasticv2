const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res) {
    console.log("Login function called");
    const user = await db.User.findOne({
      email: req.body.email,
    });
    if (!user || !user.checkPassword(req.body.password)) {
      console.log("message that user was not found");
      return res
        .status(401)
        .send("Invalid Username or Passowrd. Please try again.");
    } else {
      req.session.userId = user._id;
      req.session.user = { ...user._doc };
      req.session.loggedIn = true;
      req.session.save((err) => {
        if (err) console.log("Something went wrong!");
      });
      res.send(user);
    }
  },
  loginRequired: function (req, res, next) {
    if (req.user) {
      res.send(req.user);
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Invalid Token! You must be signed up!" });
    }
  },
  currentUser: function (req, res) {
    console.log(req.session);
    res.json(req.session);
  },
};
