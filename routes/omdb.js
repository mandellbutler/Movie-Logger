const router = require('express').Router();
const axios = require('axios');
const { Movie } = require('../models');
const { getAndCreateMovieData } = require('../utils/routeHelpers');
require('dotenv').config();

const apiKey = process.env.OMDB_APIKEY;

// search by title for search bar
// route: search/:search
// this will return a list of search results on the page
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

// search by ID taken from search by title
// route: search/id/:id
router.get('/id/:id', async (req, res) => {
  const id = await req.params.id;
  try {
    // check if movie is already in database by ID
    const databaseData = await Movie.findByPk(id);
    if (databaseData) { // if it is...
      // return the values
      const data = databaseData.get({ plain: true });
      res.render('movie', { movie: data }); // and render the movie page with database data
    } else { // if not
      // request the information from the api
      const baseSearchByIdUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
      try {
        // then create a new movie entry in the database
        // this will limit the amount of api requests
        const newMovie = await getAndCreateMovieData(baseSearchByIdUrl);
        const movie = await newMovie.get({ plain: true });
        if (movie) {
        // pass the newMovie data into the template renderer
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
