const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/user', userRoutes);

router.use('/rating', ratingRoutes);

router.get('/', (req, res) => {
  res.json('this is the api route');
});

module.exports = router;
