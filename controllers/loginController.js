const db = require("../models");

module.exports = {
  login: async function (req, res) {
    res.send("Hello!!!!!");
    console.log("Something");
    const user = await db.User.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (!user) {
      res.error("no user found!");
    }
    if (user.isPasswordValid(req.body.password)) {
      //res.json(user) or store session or send JWT //
    } else {
      res.error("wrong password!");
    }
  },
};
