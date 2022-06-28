const router = require("express").Router();
const { Movie } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  try {
    const data = await Movie.findAll({
      where: { user_id: req.session.user_id },
      // attributes: ["id"],
    });
    const movies = data.map((movie) => movie.get({ plain: true }));
    console.log(movies);

    // const movieIds = await Promise.all(
    //   movies.map(async (movie) => ({ id: movie.id }))
    // );
    // const filledMovies = await Promise.all(
    //   movies.map(async (movie) => {
    //     const { data } = await movieDataBase.FetchByID(movie.movie_id);
    //     return data;
    //   })
    // );
    // filledMovies.map((movie) => {
    //   movie.id === movieIds.id;
    // });
    // console.log(filledMovies);

    res.render("dashboard", {
      movies,
      // filledMovies,
      // movieIds,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
