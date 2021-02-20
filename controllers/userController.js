const db = require("../models");

module.exports = {
  // getCurrentUser: function (req, res) {
  //   res.json("yay");
  // },

  create: async ({ body: { confirmedPassword, ...body } }, res) => {
    const emailExists = await db.User.findOne({ email: body.email });
    if (emailExists) return res.status(400).send("Email already exists.");
    else {
      db.User.create(body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
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
    console.log("Something");
    const user = await db.User.find({
      email: req.body.email,
      password: req.body.password,
    });
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
