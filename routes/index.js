const router = require('express').Router()

router.use('/', (req, res) => {
  res.json('hello world')
})

module.exports = router
