const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

router.get('/', (req, res) => {
  res.json('this is the api route');
});

module.exports = router;
