const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  // .get(userController.getCurrentUser)
  // .get(()=> "Hello")
  .post(userController.create);

router.route("/login").post(userController.login);

module.exports = router;
