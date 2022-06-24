const router = require("express").Router();
const sequelize = require("../config/connection");
const { List, Movie, User } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

module.exports = router;
