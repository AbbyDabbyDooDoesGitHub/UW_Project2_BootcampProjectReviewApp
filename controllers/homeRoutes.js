const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const userData = await User.findAll({
    attributes: { exclude: ["password"] },
  });

  const users = userData.map((project) => project.get({ plain: true }));

  res.render("homepage", {
    users,

    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// router.get("/submission", (req, res) => {
//     if (req.session.logged_in) {
//       res.redirect("/");
//       return;
//     }

// Route "/dashboard"

// Route "/dashboard/new"

// Route "/dashboard/edit/:id"

// Route "/post/:id"

module.exports = router;
