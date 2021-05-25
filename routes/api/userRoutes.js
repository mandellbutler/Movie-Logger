/* eslint-disable no-tabs */
const router = require('express').Router()
const { User } = require('../../models/User') // TODO: write models index.js

// GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll()
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// SIGN UP
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    req.session.save(() => {
      req.session.loggedIn = false
      res.status(200).json(userData)
    })
  } catch (err) {
    res.status(500).json('500 Internal Server Error.')
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password.' })
      return
    }
    const validPassword = await userData.checkPassword(req.body.password)
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password.' })
      return
    }
    req.session.save(() => {
      req.session.loggedIn = true
      res.status(200).json({ user: userData, message: 'Login successful!' })
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
