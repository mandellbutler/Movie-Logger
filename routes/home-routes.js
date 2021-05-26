const router = require('express').Router();
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

module.exports = router;
