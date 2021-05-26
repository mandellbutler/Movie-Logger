/* eslint-disable no-tabs */
const router = require('express').Router();
const Movie = require('../../models/Movie'); // TODO: write models index.js

// GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const userData = await Movie.findAll();
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



