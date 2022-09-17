const router = require("express").Router();
const { Project } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const userData = await Project.findAll({});

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

router.get("/submission", withAuth, (req, res) => {
  res.render("submission");
});

// Route "/dashboard"
router.get("/dashboard", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

// Route "/dashboard/new"
router.get("/dashboard/new", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

// Route "/dashboard/edit/:id"
router.get("/dashboard/edit/:id", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

// Route "/post/:id"
router.get("/post/:id", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

router.get("/signup", (req, res) => {
  if (req.session.signed_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});
module.exports = router;
