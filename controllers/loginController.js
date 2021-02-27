const db = require("../models");

module.exports = {
  login: async function (req, res) {
    console.log("Login function called");
    const user = await db.User.findOne({
      email: req.body.email
    });
    if (!user) { 
      console.log("message that user was not found")
      return res.status(400).send("Email already exists.");
    }
    if (user.isPasswordValid(req.body.password)) {
      //res.json(user) or store session or send JWT //
    } else {
      res.error("wrong password!");
    }
  },
};
