const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('this is the api route')
})

module.exports = router
