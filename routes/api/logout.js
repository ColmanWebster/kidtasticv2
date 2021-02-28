const router = require("express").Router();
const loginController = require("../../controllers/loginController.js");

router.route("/").post(loginController.logout).get(loginController.currentUser);

module.exports = router;
