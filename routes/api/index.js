const router = require("express").Router();
// const postRoutes = require("./posts");
const authRoutes = require("./user.js");
// const watchRoutes = require("./watch.js");
const loginRoutes = require("./login.js");
// Post routes
// router.get("/", authRoutes);

// router.use("/posts", postRoutes);

router.use("/signup", authRoutes);
router.use("/login", loginRoutes);
// router.use("/watch", watchRoutes);

module.exports = router;
