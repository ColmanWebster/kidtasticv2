const router = require("express").Router();
const loginController = require("../../controllers/loginController.js");

router.route("/").post(loginController.login).get(loginController.currentUser);

module.exports = router;
// .get(userController.getCurrentUser)
// .get(()=> "Hello")
