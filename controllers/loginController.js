const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res) {
    console.log("Login function called in loginCOntroller");
    const user = await db.User.findOne({
      email: req.body.email,
    });

    if (!user || !user.checkPassword(req.body.password)) {
      console.log("message that user was not found");
      return res.status(400).send("Invalid Login Credentials. Please try again.");
    } else {
      req.session.userId = user._id;
      req.session.user = { ...user._doc };
      req.session.loggedIn = true;
      req.session.save((err) => {
        if (err) console.log("Invalid Username or Passwsord. Please try again.");
      });
      res.send(user);
    }
  },
  currentUser: function (req, res) {
    console.log(req.session);
    res.json(req.session);
  },

  logout: function (req, res) {
    if (req.session.loggedIn) {
      res.send("Bye!");
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.send("Something went wrong, goodbye!");
      res.status(404).end();
    }
  },
};

// router.post("/logout",
