const router = require('express').Router();
const { Rating, User, Movie } = require('../../models');

// get ratings by user

// get ratings by movie?

// create new ratings
router.post('/:movie_id', async (req, res) => {
  const ratingData = await Rating.findAll({
    where: {
      movie_id: req.params.movie_id,
      user_id: req.session.user_id
    }
  });
  if (ratingData) {
    const rating = await Movie.update(req.body, {
      where: {
        movie_id: req.params.movie_id,
        user_id: req.session.user_id
      }
    });
    if (rating) {
      res.status(200).json('rating updated.');
    } else {
      res.status(500).json('500');
    }
  } else {
    const rating = await Movie.create({
      user_rating: req.body.rating,
      movie_id: req.params.movie_id,
      user_id: req.session.user_id
    });
    if (rating) {
      res.status(200).json('rating created.');
    } else {
      res.status(500).json('500');
    }
  }
});

// delete ratings

// update ratings

module.exports = router;