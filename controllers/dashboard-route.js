const router = require("express").Router();
const { Movie } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  const movies = await Movie.findAll({ raw: true });
  const filledMovies = await Promise.all(
    movies.map(async (movie) => {
      const { data } = await movieDataBase.fetchById(movie.movie_id);
      return data;
    })
  );
  res.render("dashboard", { movies: filledMovies });
});

module.exports = router;
