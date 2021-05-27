const router = require('express').Router();
const { Rating, User, Movie } = require('../../models');

// get ratings by user

// get ratings by movie?

// create new ratings
router.post('/:movie_id', async (req, res) => {
  // see if the rating already exists
  const ratingData = await Rating.findAll({
    where: {
      movie_id: req.params.movie_id,
      user_id: req.session.user_id,
    },
  });
  if (ratingData[0]) { // if it exists
    const rating = await Rating.update( // then update it
      {
        user_rating: await req.body.rating,
      },
      {
        where: {
          movie_id: req.params.movie_id,
          user_id: req.session.user_id,
        },
      }
    );
    if (rating[0]) {
      res.status(200).json('rating updated.');
    } else {
      res.status(500).json('500');
    }
  } else { // if rating doesnt already exist create it
    const newRating = await Rating.create({
      user_rating: req.body.rating,
      movie_id: req.params.movie_id,
      user_id: req.session.user_id,
    });
    if (newRating) {
      res.status(200).json('rating created.');
    } else {
      res.status(500).json('500');
    }
  }
});

// delete ratings

// update ratings

module.exports = router;
