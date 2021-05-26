const router = require('express').Router();
const axios = require('axios');
const { Movie } = require('../models');
const { getAndCreateMovieData } = require('../utils/routeHelpers');
require('dotenv').config();

const apiKey = process.env.OMDB_APIKEY;

// search by movie imdbID
router.get('/search/imdb', async (req, res) => {
  const imdbID = 'tt0126029';
  const baseSearchByIdUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  try {
    const movieData = await axios.get(baseSearchByIdUrl);
    const data = await movieData.data;
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// search by title
router.get('/search/title', async (req, res) => {
  const search = req.body.search;
  const baseSearchByTitleUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  try {
    const movieData = await axios.get(baseSearchByTitleUrl);
    const data = await movieData.data;
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  // search by title
  const search = req.body.search;
  const baseSearchByTitleUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  try {
    const movieData = await axios.get(baseSearchByTitleUrl);

    // get title's imdb id
    const { imdbID } = await movieData.data.Search[0];
    const baseSearchByIdUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

    // check if movie is already in database by ID as movie pk
    const databaseData = await Movie.findByPk(imdbID);

    // if it is,
    if (databaseData) {
      // return the values
      res.json(databaseData);
    } else { // if not,
      // // fetch from web api
      // const newMovieData = await axios.get(baseSearchByIdUrl);
      // const data = await newMovieData.data;

      // // put it into our own database
      // const { Title, Released, Director, Actors/* , Ratings, Plot, Poster */ } = data;
      // const newMovie = await Movie.create({
      //   id: imdbID,
      //   movie_title: Title,
      //   release_date: Released,
      //   director: Director,
      //   actors: Actors,
      //   avg_rating: 5
      // });
      const newMovie = await getAndCreateMovieData(baseSearchByIdUrl);
      if (newMovie) {
        // and return the values
        res.json(newMovie);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});









module.exports = router;

// const apiKey = process.env.OMDB_APIKEY
// const search = 'shawshank'
// const baseSearchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
// const getMovieData = async () => {
//   const { data } = await axios.get(baseSearchUrl)
//   const { Title, Year, imdbID, Poster } = data.Search[0]
//   console.log(Title)
//   console.log(Year)
//   console.log(imdbID)
//   console.log(Poster)
// }
