const router = require('express').Router();
const axios = require('axios');
const { Movie } = require('../models');
const { getAndCreateMovieData } = require('../utils/routeHelpers');
require('dotenv').config();

const apiKey = process.env.OMDB_APIKEY;

// search by movie imdbID
// router.get('/id/:id', async (req, res) => {
//   const imdbID = 'tt0126029';
//   const baseSearchByIdUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
//   try {
//     const movieData = await axios.get(baseSearchByIdUrl);
//     const data = await movieData.data;
//     res.json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// search by title
router.get('/:search', async (req, res) => {
  const search = await req.params.search;
  const baseSearchByTitleUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=movie`;
  try {
    const movieData = await axios.get(baseSearchByTitleUrl);
    const data = await movieData.data.Search;
    res.render('search', { movies: data });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/id/:id', async (req, res) => {
  const id = await req.params.id;
  try {
    // check if movie is already in database by ID as movie pk
    const databaseData = await Movie.findByPk(id);
    if (databaseData) {
      // return the values
      const data = databaseData.get({ plain: true });
      res.render('movie', { movie: data });
    } else {
      const baseSearchByIdUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
      try {
        const newMovie = await getAndCreateMovieData(baseSearchByIdUrl);
        const movie = await newMovie.get({ plain: true });
        if (movie) {
        // and return the values
          res.render('movie', { movie: movie });
        } else {
          res.status(404).json('movie not found');
        }
      } catch (err) {
        res.json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
