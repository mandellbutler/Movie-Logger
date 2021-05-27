const router = require('express').Router();
const { User, Movie, Rating } = require('../models');

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

// dashboard route
router.get('/dashboard', async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    include: {
      model: Movie
    }
  });
  const data = userData.get({ plain: true });
  console.log(data.movies);
  if (userData) {
    res.render('dashboard', { movies: data.movies });
  } else {
    res.status(404).json('User Not Found');
  }
});

module.exports = router;
