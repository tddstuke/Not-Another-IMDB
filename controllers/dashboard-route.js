const router = require("express").Router();
const { Movie } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll({ raw: true });
    console.log(movies);
    const filledMovies = await Promise.all(
      movies.map(async (movie) => {
        const { data } = await movieDataBase.FetchByID(movie.movie_id);
        return data;
      })
    );
    console.log(filledMovies);
    res.render("dashboard", {
      movies: filledMovies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
