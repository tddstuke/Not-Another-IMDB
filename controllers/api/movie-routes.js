const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Movie } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await Movie.findAll({
      attributes: ["id", "movie_id", "title"],
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
      attributes: ["id", "title", "user_id"],
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
        list_id: req.body.list_id,
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
      // list_id: req.body.list_id,
      title: req.body.title,
      movie_id: req.body.movie_id,
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
