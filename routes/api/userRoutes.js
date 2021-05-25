/* eslint-disable no-tabs */
const bcrypt = require('bcrypt')
const router = require('express').Router()
const { User } = require('./models')

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll()
    res.status(200).json(userData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

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
