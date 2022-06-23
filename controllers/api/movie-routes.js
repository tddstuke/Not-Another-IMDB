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

router.get("/:id", async (req, res) => {
  try {
    const data = await Movie.findOne({
      where: {
        id: req.params.id,
      },
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
    if (!data) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Movie.update(
      {
        is_liked: req.body.is_liked,
        is_disliked: req.body.is_disliked,
        is_watchlist: req.body.is_watchlist,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
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

router.delete("/:id", async (req, res) => {
  try {
    const data = await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }
});

module.exports = router;
