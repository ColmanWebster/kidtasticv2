const router = require("express").Router();
const postRoutes = require("./posts");
const authRoutes = require("./user.js");

// Post routes
// router.get("/", authRoutes);

router.use("/posts", postRoutes);

router.use("/signup", authRoutes);

module.exports = router;
