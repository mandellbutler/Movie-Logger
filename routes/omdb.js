const router = require('express').Router()
const axios = require('axios')
require('dotenv').config()

const apiKey = process.env.OMDB_APIKEY

router.get('/search', async (req, res) => {
  const search = req.body.search
  const baseSearchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
  try {
    const movieData = await axios.get(baseSearchUrl)
    const data = await movieData.data.Search[0]
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router

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
