const router = require('express').Router();
const axios = require('axios');
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

// search by title
// get title's imdb id
// check if movie is already in database by ID as movie pk
// if it is,
// return the values
// if not,
// fetch from web api
// put it into our own database

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
