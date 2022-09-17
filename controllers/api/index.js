const router = require("express").Router();
const userRoutes = require("./user-routes");
const homeRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/projects", homeRoutes);

module.exports = router;
