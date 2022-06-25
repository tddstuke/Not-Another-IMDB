const router = require("express").Router();
const sequelize = require("../config/connection");
const { List, Movie, User } = require("../models");
const movieDataBase = require("../services/movie-service");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/by-name:name", async (req, res) => {
  try {
    const { data } = await movieDataBase.fetchByName(req.params.name);
    const info = data.results[0];
    console.log(info);
    res.json(info);
    const { title, overview, release_date } = info;
    // res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("login");
});

module.exports = router;
