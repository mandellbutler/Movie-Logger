const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const omdbRoutes = require('./omdb')

// omdb routes
router.use('/omdb', omdbRoutes)

// api routes
router.use('/api', apiRoutes)

// index route
router.use('/', homeRoutes)

module.exports = router
