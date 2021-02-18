const db = require("../models");

module.exports = {
  // getCurrentUser: function (req, res) {
  //   res.json("yay");
  // },

  create: function (req, res) {
    console.log(req.body);
    console.log("req.body ");
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // signup: async function ({ body: { userData, parentId } }, res) {
  //   let user;
  //   console.log(userData);
  //   if (parentId) {
  //     user = await db.Child.create(userData);
  //     //update user with userId add childId to children array;
  //   } else {
  //     user = await db.User.create(userData);
  //   }
  // },
  login: async function (req, res) {
    console.log("Something")
    const user = await db.User.find({ email: req.body.email });
    if (!user) {
      res.error("no user found!");
    }
    if (user.isPasswordValid(req.body.password)) {
      //res.json(user) or store session or send JWT
    } else {
      res.error("wrong password!");
    }
  },
};
