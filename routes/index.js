const router = require('express').Router()
const apiRoutes = require('./api')

// api routes
router.use('/api', apiRoutes)

// index route
router.use('/', (req, res) => {
  res.render('homepage')
})

module.exports = router
