const router = require("express").Router();
const sequelize = require("../config/connection");
const { List, Movie, User } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  try {
    // const movies = await Movie.findAll({ raw: true });
    // const filledMovies = await Promise.all(
    //   movies.map(async (movie) => {
    //     const { data } = await movieDataBase.FetchByID(movie.movie_id);
    //     return data;
    //   })
    // );

    const { data } = await movieDataBase.fetchTrending();
    // console.log("data: ", data);

    res.render("homepage", {
      movies: data.results,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
  }
});

// search 3rd party api for movie by name
router.get("/by-name:name", async (req, res) => {
  try {
    const { data } = await movieDataBase.fetchByName(req.params.name);
    const infoId = data.results[0].id;
    // use name fetch to fetch by Id to recieve extra data
    const moreData = await movieDataBase.FetchByID(infoId);
    const info = moreData.data;
    const genres = info.genres;
    // const genres = genresArray.map((genre) => ({ name: genre.name }));
    // console.log(genreArray);
    // console.log(info);

    res.render("single-movie", {
      info,
      loggedIn: req.session.loggedIn,
      genres,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get movie details from 3rd party api using id

router.get("/by-id:id", async (req, res) => {
  try {
    const { data } = await movieDataBase.FetchByID(req.params.id);

    // console.log(data);
    res.json(data);
    // const info = data.data;
    const genres = data.genres;
    // console.log();
    res.render("add-list", {
      data,
      loggedIn: req.session.loggedIn,
      genres,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
