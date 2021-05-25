const router = require('express').Router()
const apiRoutes = require('./api')

// api routes
router.use('/api', apiRoutes)

// index route
router.use('/', (req, res) => {
  res.json('hello world')
})

module.exports = router
