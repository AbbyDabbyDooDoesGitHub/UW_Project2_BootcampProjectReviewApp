const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route "/"

// Route "/login"

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // TODO: Add a comment describing the functionality of this property
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.signed_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
module.exports = router;


// Route "/dashboard"

// Route "/dashboard/new"

// Route "/dashboard/edit/:id"

// Route "/post/:id"