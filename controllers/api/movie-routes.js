const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Movie, Favorite } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await Movie.findAll({
      attributes: [
        "id",
        "title",
        "overview",
        "release_date",
        "genre",
        "poster_path",
        // "user_id",
      ],
      //   include: {model: USER, attributes: ["username"]},}
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Movie.create({
      id: req.body.id,
      title: req.body.title,
      overview: req.body.overview,
      release_date: req.body.release_date,
      genre: req.body.genre,
      poster_path: req.body.poster_path,
      // user_id: req.session.user_id,
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
