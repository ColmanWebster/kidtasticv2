const db = require("../models");

module.exports = {
	login: async function (req, res) {
		console.log("Made it to login Controller", req.body);
		const user = await db.User.findOne({
			email: req.body.email,
		});
		if (!user) {
			console.log("no user found!", req.body.email);
			return;
			res.error("no user found!");
		}
		console.log("Valid user found.  Checking password", req.body.email);
		if (user.checkPassword(req.body.password)) {
			//res.json(user) or store session or send JWT //
			console.log("password check passed");
			res.json(user);
		} else {
			console > log("password check failed");
			res.error("wrong password!");
		}
	},
};
