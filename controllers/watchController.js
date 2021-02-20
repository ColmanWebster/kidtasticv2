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

  findVideo: (req, res) => {
    const theVid = db.WatchModel.findOne({ id: _id });
    console.log(theVid);
  },
};
