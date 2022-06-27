const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Movie, List } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await List.findAll({
      attributes: ["id", "name", "user_id"],
    });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.session_id);
    const data = await List.create({
      name: req.body.name,
      user_id: req.session.user_id,
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
