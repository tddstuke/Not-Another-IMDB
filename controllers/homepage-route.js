const router = require("express").Router();
const sequelize = require("../config/connection");
const { List, Movie, User } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
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

    console.log(data);
    res.json(data);
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
